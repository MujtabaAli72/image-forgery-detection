from fastapi import FastAPI, UploadFile, File
from tensorflow.keras.models import load_model
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
import tensorflow as tf
from PIL import Image
import io, os
from pathlib import Path

os.environ["TF_ENABLE_ONEDNN_OPTS"] = "0"
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "2" 

current_dir = os.path.dirname(os.path.abspath(__file__))
base_dir = os.path.dirname(current_dir)
# model_path = os.path.join(base_dir, "Model weight", "my_model.keras")
# print("======>>>>>",model_path)
base_dir = Path(__file__).resolve().parent.parent
model_path = base_dir / "Model weight" / "my_model.keras"

# Load model
# model = tf.keras.models.load_model(r"Model_weight/my_model.keras")  # Adjust path as needed
model = load_model(model_path)
IMG_SIZE = (128, 128)
THRESHOLD = 0.7  # 70% confidence threshold

# Initialize FastAPI
app = FastAPI(title="Forgery Image Detection API")

# Allow CORS (so Streamlit frontend can call API)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def preprocess_image(image_bytes):
    """Preprocess image for model prediction"""
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    image = image.resize(IMG_SIZE)
    image_array = np.array(image) / 255.0  # normalize
    image_array = np.expand_dims(image_array, axis=0)
    return image_array

@app.post('/api/predict')
async def predict(file: UploadFile = File(...)):
    """Predict whether image is Fake or Real"""
    try:
        image_bytes = await file.read()
        image_array = preprocess_image(image_bytes)

        prediction = model.predict(image_array)
        confidence = float(np.max(prediction))
        predicted_class = int(np.argmax(prediction))

        label = "Fake" if predicted_class == 0 else "Real"
        if confidence < THRESHOLD:
            label = "Uncertain"

        return {
            "label": label,
            "confidence": round(confidence * 100, 2)
        }
    except Exception as e:
        return {"error": str(e)}


@app.route('/api/about', methods=['GET'])
def about():
    """Get information about the developer"""
    return {
        'name': 'Mujtaba Ali',
        'email': 'm.elya1412@gmail.com',
        'project': 'Image Forgery Detection using Deep Learning',
        'description': 'Advanced image forgery detection system using Error Level Analysis (ELA) and Convolutional Neural Networks',
        'technologies': ['Python', 'TensorFlow', 'Keras', 'Flask', 'React', 'Deep Learning'],
        'accuracy': '93.56%',
        'model': 'CNN with ELA preprocessing'
    }


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000, reload=True)

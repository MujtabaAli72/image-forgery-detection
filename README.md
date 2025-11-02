# Image Forgery Detection System

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Python](https://img.shields.io/badge/python-3.12-blue.svg)
![React](https://img.shields.io/badge/react-18.2.0-blue.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.3.3-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

An advanced AI-powered image forgery detection system using **Error Level Analysis (ELA)** and **Deep Learning** techniques. Built by **Mujtaba Ali** ([m.elya1412@gmail.com](mailto:m.elya1412@gmail.com)).

## Features

- **Error Level Analysis**: Detects compression inconsistencies in images
- **Deep Learning Classification**: CNN model with 93.56% accuracy
- **Real-time Detection**: Instant results with confidence scores
- **Visual Highlighting**: Shows manipulated regions in images
- **Professional UI**: Modern, animated frontend built with React and Tailwind CSS
- **RESTful API**: Flask backend for easy integration

## Performance Metrics

- **Overall Accuracy**: 93.56%
- **Fake Image Detection**: 99.48%
- **Real Image Detection**: 91.22%
- **Training Dataset**: 4,164 images (CASIA dataset)
- **Detection Time**: < 1 second

## Technology Stack

### Backend
- Python 3.12
- TensorFlow 2.15
- Keras
- Flask
- OpenCV
- scikit-image
- PIL/Pillow

### Frontend
- React 18
- TypeScript 5.3
- Framer Motion (animations)
- Tailwind CSS 3.4
- Axios
- React Router

## Project Structure

```
img/
├── backend/
│   ├── app.py                 # Flask API server
│   ├── requirements.txt       # Python dependencies
│   └── my_model.keras         # Trained model (add this file)
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.tsx      # Navigation component
│   │   ├── pages/
│   │   │   ├── Home.tsx        # Landing page
│   │   │   ├── Detection.tsx   # Image upload & detection
│   │   │   ├── About.tsx       # Project information
│   │   │   └── Profile.tsx     # Developer profile
│   │   ├── App.tsx             # Main app component
│   │   ├── index.tsx           # Entry point
│   │   ├── index.css           # Global styles
│   │   └── react-app-env.d.ts  # TypeScript declarations
│   ├── package.json
│   ├── tsconfig.json           # TypeScript configuration
│   ├── postcss.config.js       # PostCSS configuration
│   └── tailwind.config.js      # Tailwind configuration
├── Copy_of_Image_forgery_Detection.ipynb  # Training notebook
└── README.md
```

## Installation & Setup

### Prerequisites
- Python 3.12 or higher
- Node.js 16 or higher
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install Python dependencies:
```bash
pip install -r requirements.txt
```

4. **Important**: Add your trained model file `my_model.keras` to the backend directory

5. Start the Flask server:
```bash
python app.py
```

The backend API will run at `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will open at `http://localhost:3000`

## Usage

1. **Start Backend**: Ensure the Flask server is running on port 5000
2. **Start Frontend**: Access the React app at http://localhost:3000
3. **Upload Image**: Navigate to the Detection page and upload an image
4. **View Results**: Get instant results with confidence score and ELA visualization

## How It Works

### 1. Error Level Analysis (ELA)
- Images are saved at a specific JPEG quality level
- The difference between the original and re-compressed image is calculated
- Manipulated areas show different error levels than authentic regions

### 2. Deep Learning Classification
- Preprocessed ELA images are fed into a CNN model
- The model was trained on 4,164 images from the CASIA dataset
- Architecture includes:
  - 2 Convolutional layers (32 filters, 5x5 kernel)
  - MaxPooling and Dropout layers
  - Dense layers for classification
  - Softmax output for binary classification

### 3. Model Training
- Dataset: CASIA1 & CASIA2
- Training: 3,331 images
- Validation: 833 images
- Epochs: 24 (with early stopping)
- Optimizer: Adam
- Loss: Binary Cross-Entropy

## API Endpoints

### Health Check
```
GET /api/health
```

### Predict Image
```
POST /api/predict
Content-Type: multipart/form-data

Request:
- image: image file

Response:
{
  "prediction": "fake" | "real",
  "confidence": 95.67,
  "is_fake": true,
  "ela_image": "data:image/png;base64,..."
}
```

### About
```
GET /api/about
```

## Model Training

To train the model yourself:

1. Download the CASIA dataset:
   - [CASIA1](https://www.kaggle.com/datasets/sophatvathana/casia-dataset)
   - [CASIA2](https://www.kaggle.com/datasets/sophatvathana/casia-dataset)

2. Open the Jupyter notebook:
```bash
jupyter notebook Copy_of_Image_forgery_Detection.ipynb
```

3. Run all cells to train the model

4. The trained model will be saved as `my_model.keras`

## Screenshots

### Home Page
Beautiful landing page with animated hero section and feature highlights.

### Detection Page
Drag-and-drop interface for uploading images and viewing results with ELA visualization.

### Profile Page
Information about the developer and project achievements.

## Dataset

This project uses the **CASIA Image Tampering Detection Evaluation Database**:
- **Authentic Images**: 2,100
- **Tampered Images**: 2,064
- **Types of Forgery**: Copy-move, splicing, removal

## Performance Optimization

- Image preprocessing optimized for speed
- Model inference < 1 second
- Responsive design for all devices
- Lazy loading and code splitting

## Future Enhancements

- [ ] Support for more image formats
- [ ] Batch processing for multiple images
- [ ] Advanced visualization of manipulated regions
- [ ] API key authentication
- [ ] Model retraining with user feedback
- [ ] Mobile app version

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Author

**Mujtaba Ali**
- Email: [m.elya1412@gmail.com](mailto:m.elya1412@gmail.com)
- Project: Image Forgery Detection using Deep Learning
- Specialization: AI/ML Engineering, Computer Vision, Deep Learning

## Acknowledgments

- CASIA dataset for providing the training data
- TensorFlow and Keras teams for the deep learning framework
- React and Framer Motion for the frontend framework

## Citation

If you use this project in your research, please cite:

```bibtex
@software{ali2024forgery,
  author = {Ali, Mujtaba},
  title = {Image Forgery Detection using Deep Learning and ELA},
  year = {2024},
  url = {https://github.com/yourusername/image-forgery-detection}
}
```

## Support

For questions or support, please contact [m.elya1412@gmail.com](mailto:m.elya1412@gmail.com)

---

Made with ❤️ by Mujtaba Ali

# How to Add Your Model File

## Quick Instructions

### Option 1: Copy from Notebook Location
If you have the model from your Jupyter notebook:

1. Find your `my_model.keras` file (it was saved when you ran the notebook)
2. Copy it to: `C:\Users\Two Star\Documents\img\backend\my_model.keras`

### Option 2: Train a New Model
If you need to train a new model, run the Jupyter notebook:

1. Open the notebook: `Copy_of_Image_forgery_Detection.ipynb`
2. Run all cells
3. The model will be saved as `my_model.keras`
4. Copy it to the backend folder

---

## The Application Works in Two Modes:

### 🎲 DEMO Mode (Current - No Model File)
- Shows **random predictions** (for testing UI)
- Displays ELA visualization
- Perfect for testing the interface

### 🎯 REAL Mode (With Model File)
- Uses your trained CNN model
- **93.56% accuracy** predictions
- Real forgery detection

---

## How to Switch to REAL Mode

1. **Add the model file:**
   ```
   Copy: my_model.keras
   To: C:\Users\Two Star\Documents\img\backend\my_model.keras
   ```

2. **Restart the backend server:**
   - Stop the current server (Ctrl+C)
   - Run `start-backend.bat` again

3. **You'll see this message:**
   ```
   ✅ Model loaded successfully from my_model.keras
   ```

---

## Current Status

The backend is configured to:
- ✅ Automatically detect if model file exists
- ✅ Load model if available
- ✅ Run in DEMO mode if model is missing
- ✅ Show clear status messages

**No code changes needed!** Just add the model file.

---

## Model File Location

```
img/
├── backend/
│   ├── app.py
│   ├── venv/
│   └── my_model.keras  ← PUT YOUR MODEL HERE
```

---

## Verifying Model is Loaded

When you start the backend with the model file, you'll see:

```
⚠️ Model file not found: my_model.keras
Running in DEMO mode with random predictions
To enable real predictions:
1. Add your 'my_model.keras' file to the backend folder
2. Restart the server
```

OR (with model):

```
✅ Model loaded successfully from my_model.keras
 * Running on http://127.0.0.1:5000
```

---

## For Now: Demo Mode is Perfect!

You can test the entire application in DEMO mode:
- ✅ Upload images
- ✅ See ELA visualization
- ✅ Get predictions (random)
- ✅ Test all UI features

When you're ready for real predictions, just add the model file!

---

**Made by Mujtaba Ali** (m.elya1412@gmail.com)

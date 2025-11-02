# Quick Start Guide - Image Forgery Detection

**Developer**: Mujtaba Ali | **Email**: m.elya1412@gmail.com

---

## ⚡ Super Quick Start (Windows)

### First Time Setup:
```bash
1. Double-click: setup.bat
2. Wait for installation to complete
3. Copy your "my_model.keras" file to the "backend" folder
```

### Every Time You Run:
```bash
1. Double-click: start-backend.bat (Terminal 1)
2. Double-click: start-frontend.bat (Terminal 2)
3. Open browser: http://localhost:3000
```

---

## 📋 What You Need

- ✅ Python 3.12+
- ✅ Node.js 16+
- ✅ Your trained model file: `my_model.keras`

---

## 🔧 Manual Setup (Alternative)

### Backend:
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

### Frontend:
```bash
cd frontend
npm install
```

---

## 🚀 Running the Application

### Backend (Terminal 1):
```bash
cd backend
venv\Scripts\activate
python app.py
```
✅ Should show: `Running on http://127.0.0.1:5000`

### Frontend (Terminal 2):
```bash
cd frontend
npm start
```
✅ Should open browser to: `http://localhost:3000`

---

## ⚙️ Enable Real Detection (Important!)

After adding your `my_model.keras` file to the `backend/` folder:

**Edit `backend/app.py`:**

1. **Uncomment line 9:**
```python
model = tf.keras.models.load_model('my_model.keras')
```

2. **Uncomment lines 71-73:**
```python
y_pred = model.predict(processed_image)
y_pred_class = np.argmax(y_pred, axis=1)[0]
confidence = float(np.amax(y_pred) * 100)
```

3. **Comment out lines 75-77** (demo code):
```python
# y_pred_class = np.random.randint(0, 2)
# confidence = np.random.uniform(85, 99.9)
```

---

## 📁 Project Structure

```
img/
├── backend/
│   ├── app.py              ← Flask API
│   ├── requirements.txt    ← Python packages
│   └── my_model.keras      ← ADD YOUR MODEL HERE
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Detection.tsx
│   │   │   ├── About.tsx
│   │   │   └── Profile.tsx
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── index.css
│   ├── package.json
│   └── tsconfig.json
│
├── setup.bat               ← Run first time
├── start-backend.bat       ← Start Flask
└── start-frontend.bat      ← Start React
```

---

## 🎨 Features

### Pages:
- **Home** (`/`) - Landing page with animations
- **Detection** (`/detection`) - Upload & detect forgeries
- **About** (`/about`) - Project information
- **Profile** (`/profile`) - Developer profile

### Detection Page:
1. Drag & drop image OR click to browse
2. Click "Detect Forgery"
3. View results with confidence score
4. See ELA analysis visualization

---

## 🔍 Testing

1. Navigate to Detection page
2. Upload a test image (JPG or PNG)
3. Click "Detect Forgery"
4. Should see:
   - ✅ REAL or ⚠️ FAKE badge
   - Confidence percentage
   - ELA visualization
   - Analysis description

---

## ❗ Troubleshooting

### Backend won't start?
- Check Python installed: `python --version`
- Activate virtual environment
- Install dependencies: `pip install -r requirements.txt`

### Frontend won't start?
- Check Node.js installed: `node --version`
- Delete `node_modules` folder
- Run: `npm install`
- Run: `npm start`

### Port already in use?
- Backend (5000): Close other apps using port 5000
- Frontend (3000): Type `y` when asked to use different port

### Model not found error?
- Make sure `my_model.keras` is in `backend/` folder
- Uncomment model loading lines in `app.py`

### Tailwind styles not working?
- Restart dev server: Stop and run `npm start` again
- Check `index.css` has Tailwind imports

---

## 📊 API Endpoints

### Health Check:
```
GET http://localhost:5000/api/health
```

### Predict Forgery:
```
POST http://localhost:5000/api/predict
Content-Type: multipart/form-data
Body: image file
```

### About:
```
GET http://localhost:5000/api/about
```

---

## 🎯 Model Performance

- **Overall Accuracy**: 93.56%
- **Fake Detection**: 99.48%
- **Real Detection**: 91.22%
- **Dataset**: 4,164 images (CASIA)

---

## 💻 Tech Stack

### Backend:
- Python 3.12
- Flask 3.0
- TensorFlow 2.15
- OpenCV, Pillow

### Frontend:
- React 18
- TypeScript 5.3
- Tailwind CSS 3.4
- Framer Motion

---

## 📚 Documentation

- `README.md` - Full documentation
- `SETUP.md` - Detailed setup guide
- `PROJECT_OVERVIEW.md` - Technical details
- `TYPESCRIPT_MIGRATION.md` - TypeScript guide
- `PROJECT_COMPLETE.md` - Complete summary
- `QUICK_START.md` - This file!

---

## 📞 Support

**Developer**: Mujtaba Ali
**Email**: m.elya1412@gmail.com

For help, questions, or issues, contact via email.

---

## ✅ Checklist

Before running:
- [ ] Python 3.12+ installed
- [ ] Node.js 16+ installed
- [ ] Ran `setup.bat` or installed dependencies manually
- [ ] Added `my_model.keras` to `backend/` folder
- [ ] Uncommented model loading in `app.py`

Ready to run:
- [ ] Backend started (port 5000)
- [ ] Frontend started (port 3000)
- [ ] Browser opened to http://localhost:3000
- [ ] Can upload and detect images

---

**🎉 You're all set! Start detecting image forgeries!**

Made with ❤️ by Mujtaba Ali

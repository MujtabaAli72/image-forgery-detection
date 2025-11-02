# 🚀 START HERE - Image Forgery Detection System

**Developer**: Mujtaba Ali | **Email**: m.elya1412@gmail.com

---

## ✅ Installation Complete!

All dependencies have been successfully installed:
- ✅ Backend (Python, TensorFlow, Flask)
- ✅ Frontend (React, TypeScript, Tailwind)

---

## 🎯 How to Run the Application (2 Simple Steps)

### Step 1: Start Backend Server

**Option A - Double-click:**
```
start-backend.bat
```

**Option B - Manual:**
```bash
cd backend
venv\Scripts\activate
python app.py
```

✅ You should see:
```
⚠️ Model file not found: my_model.keras
Running in DEMO mode with random predictions
 * Running on http://127.0.0.1:5000
```

**Keep this terminal open!**

---

### Step 2: Start Frontend (New Terminal)

**Option A - Double-click:**
```
start-frontend.bat
```

**Option B - Manual:**
```bash
cd frontend
npm start
```

✅ Browser will automatically open to:
```
http://localhost:3000
```

---

## 🎮 Using the Application

### 1. Home Page
- Beautiful landing page with project info
- Click "Try Detection Now"

### 2. Detection Page
- Drag & drop an image OR click to browse
- Click "Detect Forgery"
- View results with:
  - Fake/Real prediction
  - Confidence score
  - ELA visualization

### 3. About Page
- Learn about the project
- See technical details
- View model performance

### 4. Profile Page
- Developer information
- Skills & achievements
- Project details

---

## 🎲 DEMO Mode vs REAL Mode

### Current Status: DEMO Mode
- ✅ All UI features work perfectly
- ✅ ELA visualization works
- ⚠️ Predictions are **random** (for testing)

### To Enable REAL Mode (93.56% Accuracy):

1. **Add your model file:**
   ```
   Copy: my_model.keras
   To: backend/my_model.keras
   ```

2. **Restart backend:**
   - Stop server (Ctrl+C)
   - Run `start-backend.bat` again

3. **Look for this message:**
   ```
   ✅ Model loaded successfully from my_model.keras
   ```

📖 See [HOW_TO_ADD_MODEL.md](HOW_TO_ADD_MODEL.md) for details

---

## 📁 Quick File Reference

```
img/
├── start-backend.bat       ← Start Flask server
├── start-frontend.bat      ← Start React app
├── START_HERE.md          ← This file!
├── HOW_TO_ADD_MODEL.md    ← Model instructions
├── README.md              ← Full documentation
│
├── backend/
│   ├── app.py             ← Backend code (ready!)
│   ├── venv/              ← Virtual environment
│   └── my_model.keras     ← Add your model here
│
└── frontend/
    ├── src/               ← React/TypeScript code
    └── node_modules/      ← Dependencies installed
```

---

## 🔗 Important URLs

| Service | URL | Status Check |
|---------|-----|--------------|
| Frontend | http://localhost:3000 | Open in browser |
| Backend API | http://localhost:5000 | http://localhost:5000/api/health |
| API Docs | - | See README.md |

---

## ⚡ Quick Commands

**Check if backend is running:**
```bash
curl http://localhost:5000/api/health
```

**Check if frontend is running:**
```
Open: http://localhost:3000
```

**Stop servers:**
```
Press Ctrl+C in the terminal
```

---

## 🎨 Features

### Frontend:
- ✨ Beautiful animated UI
- 📱 Fully responsive design
- 🎭 Smooth page transitions
- 🖼️ Drag & drop upload
- 📊 Real-time results
- 🌈 Glass-morphism effects

### Backend:
- 🔍 ELA image processing
- 🤖 CNN model integration
- 📡 RESTful API
- 🔒 CORS enabled
- ⚡ Fast processing

---

## 🐛 Troubleshooting

### Backend won't start?
- Check Python installed: `python --version`
- Activate virtual environment
- Check port 5000 not in use

### Frontend won't start?
- Check Node.js installed: `node --version`
- Try: `cd frontend && npm install`
- Check port 3000 not in use

### Can't connect?
- Ensure both servers are running
- Check firewall settings
- Try different browser

### Model errors?
- See [HOW_TO_ADD_MODEL.md](HOW_TO_ADD_MODEL.md)
- Check model file location
- Restart backend after adding model

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| **START_HERE.md** | Quick start guide (this file) |
| **HOW_TO_ADD_MODEL.md** | Model installation guide |
| **README.md** | Complete project documentation |
| **SETUP.md** | Detailed setup instructions |
| **PROJECT_OVERVIEW.md** | Technical overview |
| **QUICK_START.md** | Quick reference |
| **INSTALLATION_GUIDE.md** | Installation details |
| **INSTALL_COMMANDS.md** | All install commands |

---

## 🎓 Learning Resources

**To understand the code:**
1. Read `README.md` - Full project docs
2. Check `PROJECT_OVERVIEW.md` - Technical details
3. Explore `frontend/src/pages/` - React components
4. Review `backend/app.py` - Backend logic

**To modify:**
1. Frontend: Edit files in `frontend/src/`
2. Backend: Edit `backend/app.py`
3. Styles: Edit `frontend/src/index.css`

---

## 📊 Project Stats

- **Lines of Code**: ~3,500+
- **Pages**: 4 (Home, Detection, About, Profile)
- **API Endpoints**: 3
- **Technologies**: 15+
- **Accuracy**: 93.56%
- **Dataset**: 4,164 images

---

## 🎉 You're All Set!

### Next Steps:
1. ✅ **Run both servers** (steps above)
2. ✅ **Open http://localhost:3000**
3. ✅ **Test the Detection page**
4. ⬜ **Add model file** (optional, for real predictions)

### Demo Mode is Perfect For:
- ✅ Testing the interface
- ✅ Learning how it works
- ✅ Showing the UI to others
- ✅ Development & testing

### Add Model When Ready For:
- 🎯 Real forgery detection
- 🎯 93.56% accuracy predictions
- 🎯 Production use

---

## 💡 Pro Tips

1. **Keep both terminals open** while using the app
2. **Refresh browser** if you make code changes
3. **Check console** (F12) for any errors
4. **DEMO mode** is great for testing UI
5. **Add model later** when you need real predictions

---

## 📞 Need Help?

**Contact**: Mujtaba Ali
**Email**: m.elya1412@gmail.com

**Common Questions:**
- See README.md
- Check TROUBLESHOOTING section above
- Review documentation files

---

## 🚀 Ready to Start!

Just run these two commands in separate terminals:

```bash
# Terminal 1
start-backend.bat

# Terminal 2
start-frontend.bat
```

Then open: **http://localhost:3000**

---

**Built with ❤️ by Mujtaba Ali**

*Making the digital world more trustworthy, one image at a time.*

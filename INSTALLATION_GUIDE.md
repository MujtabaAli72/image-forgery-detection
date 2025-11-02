# Complete Installation Guide

## Choose Your Installation Method

### Option 1: Automatic Installation (Recommended)

#### Using NPM (Standard):
```bash
# Just double-click this file:
install-all.bat
```

#### Using Bun (Faster):
```bash
# Just double-click this file:
install-all-bun.bat
```

---

### Option 2: Manual Installation

#### Backend Installation:

```bash
# Navigate to backend folder
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
venv\Scripts\activate

# Upgrade pip
pip install --upgrade pip

# Install all dependencies
pip install flask==3.0.0
pip install flask-cors==4.0.0
pip install tensorflow==2.15.0
pip install pillow==10.1.0
pip install numpy==1.24.3
pip install scikit-learn==1.3.2
pip install opencv-python==4.8.1.78
pip install scikit-image==0.22.0
```

#### Frontend Installation (Choose One):

**Using NPM:**
```bash
cd frontend
npm install --legacy-peer-deps
```

**Using Bun (Faster):**
```bash
cd frontend
bun install
```

**Using Yarn:**
```bash
cd frontend
yarn install
```

---

## Required Software

### 1. Python 3.12+
**Download**: https://www.python.org/downloads/

Installation check:
```bash
python --version
```

### 2. Node.js 16+ (for npm)
**Download**: https://nodejs.org/

Installation check:
```bash
node --version
npm --version
```

### 3. Bun (Optional - Faster Alternative)
**Download**: https://bun.sh/

Installation check:
```bash
bun --version
```

**To install Bun on Windows:**
```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

---

## Complete Step-by-Step Installation

### Step 1: Install Prerequisites

1. Install Python 3.12+ from https://www.python.org/
2. Install Node.js 16+ from https://nodejs.org/
3. (Optional) Install Bun from https://bun.sh/

### Step 2: Run Installation Script

**For NPM users:**
```bash
Double-click: install-all.bat
```

**For Bun users:**
```bash
Double-click: install-all-bun.bat
```

### Step 3: Add Model File

Copy your trained model file:
```
my_model.keras → backend/my_model.keras
```

### Step 4: Enable Model Loading

Edit `backend/app.py`:

**Uncomment line 9:**
```python
model = tf.keras.models.load_model('my_model.keras')
```

**Uncomment lines 71-73:**
```python
y_pred = model.predict(processed_image)
y_pred_class = np.argmax(y_pred, axis=1)[0]
confidence = float(np.amax(y_pred) * 100)
```

**Comment out lines 75-77:**
```python
# y_pred_class = np.random.randint(0, 2)
# confidence = np.random.uniform(85, 99.9)
```

### Step 5: Start the Application

**Terminal 1 - Backend:**
```bash
Double-click: start-backend.bat
```

**Terminal 2 - Frontend:**

Using NPM:
```bash
Double-click: start-frontend.bat
```

Using Bun:
```bash
Double-click: start-frontend-bun.bat
```

### Step 6: Open Application

Open your browser to:
```
http://localhost:3000
```

---

## Dependencies Installed

### Backend (Python):
- flask==3.0.0
- flask-cors==4.0.0
- tensorflow==2.15.0
- pillow==10.1.0
- numpy==1.24.3
- scikit-learn==1.3.2
- opencv-python==4.8.1.78
- scikit-image==0.22.0

### Frontend (Node):
- react==18.2.0
- react-dom==18.2.0
- react-router-dom==6.20.0
- react-scripts==5.0.1
- typescript==5.3.3
- axios==1.6.2
- framer-motion==10.16.16
- react-icons==4.12.0
- react-dropzone==14.2.3
- @types/node==20.10.5
- @types/react==18.2.45
- @types/react-dom==18.2.18
- tailwindcss==3.4.0
- autoprefixer==10.4.16
- postcss==8.4.32

---

## Troubleshooting Installation

### Python Issues:

**"Python is not recognized"**
- Add Python to PATH during installation
- Or manually add: `C:\Python312\` to PATH

**"pip is not recognized"**
```bash
python -m pip install --upgrade pip
```

**TensorFlow installation fails**
- Requires 64-bit Python
- May need Visual C++ Redistributable
- Try: `pip install tensorflow-cpu==2.15.0` if GPU not needed

### Node/NPM Issues:

**"npm is not recognized"**
- Restart terminal after Node.js installation
- Add Node.js to PATH: `C:\Program Files\nodejs\`

**npm install fails**
```bash
# Clear cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install --legacy-peer-deps
```

**Port 3000 already in use**
- Type `y` when prompted to use different port
- Or kill the process using port 3000

### Bun Issues:

**"bun is not recognized"**
```powershell
# Reinstall Bun
powershell -c "irm bun.sh/install.ps1 | iex"

# Add to PATH manually: C:\Users\YourName\.bun\bin
```

**Bun install fails**
- Try npm instead: `npm install --legacy-peer-deps`
- Update Bun: `bun upgrade`

---

## Verification Commands

Check if everything is installed correctly:

```bash
# Python
python --version
pip --version

# Node
node --version
npm --version

# Bun (if using)
bun --version

# Backend packages
cd backend
venv\Scripts\activate
pip list

# Frontend packages
cd frontend
npm list --depth=0
```

---

## Quick Commands Reference

### Install Everything:
```bash
install-all.bat          # Using npm
install-all-bun.bat      # Using bun
```

### Start Application:
```bash
start-backend.bat        # Start Flask
start-frontend.bat       # Start React (npm)
start-frontend-bun.bat   # Start React (bun)
```

### Development Commands:

**Backend:**
```bash
cd backend
venv\Scripts\activate
python app.py
```

**Frontend (npm):**
```bash
cd frontend
npm start              # Development
npm run build         # Production build
npm test              # Run tests
```

**Frontend (bun):**
```bash
cd frontend
bun run start         # Development
bun run build        # Production build
bun test             # Run tests
```

---

## System Requirements

- **OS**: Windows 10/11, macOS, Linux
- **RAM**: 4GB minimum (8GB recommended)
- **Disk Space**: 2GB free
- **Internet**: Required for installation

---

## After Installation

Your project structure should look like:

```
img/
├── backend/
│   ├── venv/                    ✅ Created
│   ├── app.py
│   ├── requirements.txt
│   └── my_model.keras          ⚠️ You need to add this
│
├── frontend/
│   ├── node_modules/           ✅ Created
│   ├── src/
│   ├── package.json
│   └── ...
```

---

## Next Steps After Installation

1. ✅ Dependencies installed
2. ⬜ Add `my_model.keras` to backend folder
3. ⬜ Uncomment model loading in `app.py`
4. ⬜ Start backend server
5. ⬜ Start frontend server
6. ⬜ Test the application

---

## Support

For installation issues, contact:
**Mujtaba Ali** - m.elya1412@gmail.com

---

**Happy Installing!** 🚀

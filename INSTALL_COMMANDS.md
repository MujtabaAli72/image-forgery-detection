# All Installation Commands - Quick Reference

## 🚀 One-Click Installation (EASIEST)

### Method 1: Using NPM (Standard)
```bash
Double-click: install-all.bat
```

### Method 2: Using Bun (Faster)
```bash
Double-click: install-all-bun.bat
```

### Method 3: Original Setup Script
```bash
Double-click: setup.bat
```

---

## 📦 Manual Installation Commands

### Backend Installation

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment (Windows)
venv\Scripts\activate

# Activate virtual environment (Mac/Linux)
source venv/bin/activate

# Upgrade pip
pip install --upgrade pip

# Option A: Install from requirements.txt
pip install -r requirements.txt

# Option B: Install individually
pip install flask==3.0.0
pip install flask-cors==4.0.0
pip install tensorflow==2.15.0
pip install pillow==10.1.0
pip install numpy==1.24.3
pip install scikit-learn==1.3.2
pip install opencv-python==4.8.1.78
pip install scikit-image==0.22.0
```

### Frontend Installation

#### Using NPM:
```bash
cd frontend

# Standard install
npm install

# If you get peer dependency errors
npm install --legacy-peer-deps

# Alternative: Force install
npm install --force
```

#### Using Bun (Recommended - 10x Faster):
```bash
cd frontend

# Install Bun first (if not installed)
powershell -c "irm bun.sh/install.ps1 | iex"

# Install dependencies
bun install
```

#### Using Yarn:
```bash
cd frontend

# Install Yarn first (if not installed)
npm install -g yarn

# Install dependencies
yarn install
```

#### Using PNPM:
```bash
cd frontend

# Install pnpm first (if not installed)
npm install -g pnpm

# Install dependencies
pnpm install
```

---

## 🏃 Running the Application

### Start Backend:

```bash
# Windows
cd backend
venv\Scripts\activate
python app.py

# Mac/Linux
cd backend
source venv/bin/activate
python app.py
```

**Or use the script:**
```bash
Double-click: start-backend.bat
```

### Start Frontend:

#### Using NPM:
```bash
cd frontend
npm start
```
**Or:** Double-click `start-frontend.bat`

#### Using Bun:
```bash
cd frontend
bun run start
```
**Or:** Double-click `start-frontend-bun.bat`

#### Using Yarn:
```bash
cd frontend
yarn start
```

#### Using PNPM:
```bash
cd frontend
pnpm start
```

---

## 🔍 Verification Commands

### Check Installations:

```bash
# Python
python --version          # Should be 3.12+
pip --version

# Node.js
node --version           # Should be 16+
npm --version

# Bun (if using)
bun --version

# Yarn (if using)
yarn --version

# PNPM (if using)
pnpm --version
```

### Verify Backend Packages:

```bash
cd backend
venv\Scripts\activate
pip list
```

Should show:
- Flask 3.0.0
- tensorflow 2.15.0
- opencv-python 4.8.1.78
- etc.

### Verify Frontend Packages:

```bash
cd frontend

# NPM
npm list --depth=0

# Bun
bun pm ls

# Yarn
yarn list --depth=0

# PNPM
pnpm list --depth=0
```

Should show:
- react 18.2.0
- typescript 5.3.3
- tailwindcss 3.4.0
- etc.

---

## 🧹 Clean Installation (If Having Issues)

### Backend Clean Install:

```bash
cd backend

# Remove virtual environment
rm -rf venv

# Remove Python cache
rm -rf __pycache__

# Reinstall
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

### Frontend Clean Install:

```bash
cd frontend

# Remove node_modules and lock files
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock
rm -f pnpm-lock.yaml
rm -f bun.lockb

# Clear cache and reinstall
npm cache clean --force
npm install --legacy-peer-deps

# OR with Bun
bun install
```

---

## ⚙️ Individual Package Installation

### Backend Packages:

```bash
# Web Framework
pip install flask==3.0.0
pip install flask-cors==4.0.0

# Deep Learning
pip install tensorflow==2.15.0

# Image Processing
pip install pillow==10.1.0
pip install opencv-python==4.8.1.78
pip install scikit-image==0.22.0

# Data Science
pip install numpy==1.24.3
pip install scikit-learn==1.3.2
```

### Frontend Packages:

```bash
# Core
npm install react@18.2.0 react-dom@18.2.0
npm install react-scripts@5.0.1
npm install typescript@5.3.3

# Routing
npm install react-router-dom@6.20.0

# HTTP Client
npm install axios@1.6.2

# Animations
npm install framer-motion@10.16.16

# Icons
npm install react-icons@4.12.0

# File Upload
npm install react-dropzone@14.2.3

# Styling
npm install -D tailwindcss@3.4.0
npm install -D autoprefixer@10.4.16
npm install -D postcss@8.4.32

# TypeScript Types
npm install -D @types/node@20.10.5
npm install -D @types/react@18.2.45
npm install -D @types/react-dom@18.2.18
```

---

## 🐛 Common Installation Issues & Fixes

### Issue: "Python not found"
```bash
# Add Python to PATH or use full path
C:\Python312\python.exe -m venv venv
```

### Issue: "npm not found"
```bash
# Restart terminal after Node.js installation
# Or add to PATH: C:\Program Files\nodejs\
```

### Issue: "Permission denied"
```bash
# Run terminal as Administrator (Windows)
# Or use sudo (Mac/Linux)
sudo npm install -g npm
```

### Issue: "TensorFlow installation fails"
```bash
# Use CPU version instead
pip install tensorflow-cpu==2.15.0

# Or install Visual C++ Redistributable
# Download from Microsoft website
```

### Issue: "EACCES permission error (npm)"
```bash
# Fix npm permissions
npm config set prefix ~/.npm-global
export PATH=~/.npm-global/bin:$PATH
```

### Issue: "Peer dependency errors"
```bash
npm install --legacy-peer-deps
```

### Issue: "Node Sass errors"
```bash
npm rebuild node-sass
```

### Issue: "Port already in use"
```bash
# Kill process on port 5000 (backend)
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5000 | xargs kill -9
```

---

## 🌐 Alternative Installation Methods

### Using Docker (Advanced):

Create `docker-compose.yml`:
```yaml
version: '3.8'
services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
```

Run:
```bash
docker-compose up
```

### Using Conda (Alternative to venv):

```bash
# Create conda environment
conda create -n image-forgery python=3.12

# Activate
conda activate image-forgery

# Install packages
pip install -r requirements.txt
```

---

## 📊 Installation Size Reference

- **Backend (Python)**: ~2.5 GB
  - TensorFlow: ~1.5 GB
  - Other packages: ~1 GB

- **Frontend (Node)**: ~500 MB
  - node_modules: ~450 MB
  - Build output: ~50 MB

**Total Disk Space Required**: ~3 GB

---

## ⏱️ Installation Time Estimates

- **Backend**: 5-10 minutes
  - TensorFlow download: 3-5 minutes
  - Other packages: 2-5 minutes

- **Frontend**:
  - NPM: 3-5 minutes
  - Bun: 30-60 seconds ⚡
  - Yarn: 2-3 minutes
  - PNPM: 1-2 minutes

---

## 🎯 Quick Start After Installation

1. ✅ Install dependencies (done!)
2. Add `my_model.keras` to `backend/`
3. Uncomment model loading in `backend/app.py`
4. Run `start-backend.bat`
5. Run `start-frontend.bat` or `start-frontend-bun.bat`
6. Open http://localhost:3000

---

## 📞 Need Help?

Contact: **Mujtaba Ali** - m.elya1412@gmail.com

---

**Happy Installing!** 🚀

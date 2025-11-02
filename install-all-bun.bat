@echo off
echo ========================================
echo  Image Forgery Detection - Complete Setup (Bun)
echo  Created by Mujtaba Ali
echo ========================================
echo.

echo This will install ALL dependencies using Bun for frontend.
echo.
pause

echo.
echo ========================================
echo  STEP 1: Backend Setup
echo ========================================
echo.

cd backend

echo Checking Python installation...
python --version
if errorlevel 1 (
    echo ERROR: Python is not installed!
    echo Please install Python 3.12+ from https://www.python.org/
    pause
    exit /b 1
)

echo.
echo Creating virtual environment...
python -m venv venv

echo.
echo Activating virtual environment...
call venv\Scripts\activate.bat

echo.
echo Installing Python dependencies...
pip install --upgrade pip
pip install flask==3.0.0
pip install flask-cors==4.0.0
pip install tensorflow==2.15.0
pip install pillow==10.1.0
pip install numpy==1.24.3
pip install scikit-learn==1.3.2
pip install opencv-python==4.8.1.78
pip install scikit-image==0.22.0

echo.
echo Backend dependencies installed!
cd ..

echo.
echo ========================================
echo  STEP 2: Frontend Setup (Using Bun)
echo ========================================
echo.

cd frontend

echo Checking Bun installation...
bun --version
if errorlevel 1 (
    echo ERROR: Bun is not installed!
    echo Please install Bun from https://bun.sh/
    echo Or run install-all.bat to use npm instead
    pause
    exit /b 1
)

echo.
echo Installing frontend dependencies with Bun...
echo This is much faster than npm!
echo.

bun install

cd ..

echo.
echo ========================================
echo  Installation Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Add your model file 'my_model.keras' to the backend folder
echo 2. Edit backend/app.py and uncomment model loading (lines 9, 71-73)
echo 3. Run start-backend.bat (in one terminal)
echo 4. Run start-frontend-bun.bat (in another terminal)
echo 5. Open http://localhost:3000 in your browser
echo.
echo ========================================
pause

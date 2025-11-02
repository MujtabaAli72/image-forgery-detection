@echo off
echo ========================================
echo  Image Forgery Detection - Setup
echo  Created by Mujtaba Ali
echo ========================================
echo.

echo Setting up Backend...
cd backend
echo Creating virtual environment...
python -m venv venv
call venv\Scripts\activate.bat
echo Installing Python dependencies...
pip install -r requirements.txt
cd ..

echo.
echo Setting up Frontend...
cd frontend
echo Installing Node dependencies (this may take a few minutes)...
npm install
cd ..

echo.
echo ========================================
echo  Setup Complete!
echo ========================================
echo.
echo To start the application:
echo 1. Run start-backend.bat (in one window)
echo 2. Run start-frontend.bat (in another window)
echo.
echo IMPORTANT: Don't forget to add your model file
echo 'my_model.keras' to the backend folder!
echo.
pause

@echo off
echo ========================================
echo  Image Forgery Detection - Backend
echo  Created by Mujtaba Ali
echo ========================================
echo.

cd backend

echo Activating virtual environment...
if exist venv\Scripts\activate.bat (
    call venv\Scripts\activate.bat
    echo Virtual environment activated!
) else (
    echo Virtual environment not found!
    echo Please run setup first.
    pause
    exit
)

echo.
echo Starting Flask server...
python app.py

pause

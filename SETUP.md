# Quick Setup Guide

## Step 1: Clone/Extract Project
Ensure you have the complete project folder.

## Step 2: Backend Setup

### Option A: Using Command Prompt (Windows)
```cmd
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

### Option B: Using PowerShell (Windows)
```powershell
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

### Option C: Using Terminal (Mac/Linux)
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Step 3: Add Model File

**IMPORTANT**: Copy your trained model file `my_model.keras` to the `backend/` directory.

To use the model in production:
1. Uncomment line 9 in `backend/app.py`:
   ```python
   model = tf.keras.models.load_model('my_model.keras')
   ```
2. Uncomment lines 71-73 in `backend/app.py`:
   ```python
   y_pred = model.predict(processed_image)
   y_pred_class = np.argmax(y_pred, axis=1)[0]
   confidence = float(np.amax(y_pred) * 100)
   ```
3. Comment out or remove lines 75-77 (demo code)

## Step 4: Start Backend Server

```bash
python app.py
```

You should see:
```
 * Running on http://127.0.0.1:5000
```

## Step 5: Frontend Setup

Open a **NEW** terminal/command prompt window:

```bash
cd frontend
npm install
```

Wait for installation to complete (this may take a few minutes).

## Step 6: Start Frontend

```bash
npm start
```

The browser should automatically open to `http://localhost:3000`

## Troubleshooting

### Backend Issues

**Error: "No module named 'flask'"**
- Solution: Ensure virtual environment is activated
- Run: `pip install -r requirements.txt` again

**Error: "Port 5000 already in use"**
- Solution: Change port in `app.py` (line 102):
  ```python
  app.run(debug=True, port=5001)  # Change to 5001
  ```
- Then update frontend API URL in `Detection.js` (line 73)

**Error: "tensorflow not found"**
- Solution: Install TensorFlow manually:
  ```bash
  pip install tensorflow==2.15.0
  ```

### Frontend Issues

**Error: "npm not found"**
- Solution: Install Node.js from https://nodejs.org/

**Error: "Port 3000 already in use"**
- Solution: The terminal will ask if you want to use another port. Type 'y' and press Enter.

**Blank page or errors in browser**
- Solution:
  1. Check browser console (F12) for errors
  2. Ensure backend is running on port 5000
  3. Try clearing browser cache

### CORS Issues

If you see CORS errors in the browser console:
1. Ensure flask-cors is installed: `pip install flask-cors`
2. Backend should have `CORS(app)` on line 7 of `app.py`

## Testing the Application

1. Navigate to http://localhost:3000
2. Click "Try Detection Now" or go to Detection page
3. Upload a test image (JPG or PNG)
4. Click "Detect Forgery"
5. View results with confidence score

## Production Deployment

### Backend (Flask)
- Use Gunicorn or uWSGI
- Deploy to: Heroku, AWS, DigitalOcean, or Render
- Example with Gunicorn:
  ```bash
  pip install gunicorn
  gunicorn -w 4 -b 0.0.0.0:5000 app:app
  ```

### Frontend (React)
- Build for production: `npm run build`
- Deploy to: Vercel, Netlify, or GitHub Pages
- Update API URL to your backend URL

## Environment Variables

Create `.env` file in frontend directory:
```env
REACT_APP_API_URL=http://localhost:5000
```

Create `.env` file in backend directory:
```env
FLASK_ENV=development
FLASK_DEBUG=1
```

## System Requirements

- **Python**: 3.12 or higher
- **Node.js**: 16 or higher
- **RAM**: 4GB minimum (8GB recommended)
- **Disk**: 2GB free space
- **OS**: Windows 10/11, macOS, or Linux

## Additional Resources

- TensorFlow Documentation: https://www.tensorflow.org/
- React Documentation: https://react.dev/
- Flask Documentation: https://flask.palletsprojects.com/

## Contact

For issues or questions:
- Email: m.elya1412@gmail.com
- Check the README.md for more details

---

Happy coding! 🚀

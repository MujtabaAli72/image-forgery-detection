# Image Forgery Detection System - Project Overview

**Developer**: Mujtaba Ali
**Email**: m.elya1412@gmail.com
**Version**: 1.0.0
**Date**: 2024

---

## Executive Summary

This is a professional, production-ready **Image Forgery Detection System** that combines traditional image forensics with modern deep learning. The system can detect manipulated images with **93.56% accuracy** using Error Level Analysis (ELA) and a Convolutional Neural Network.

## Key Features

### 1. Advanced Detection Technology
- **Error Level Analysis (ELA)**: Identifies compression inconsistencies
- **Deep Learning**: CNN model trained on 4,164 images
- **High Accuracy**: 93.56% overall, 99.48% for fake images
- **Real-time Processing**: Results in under 1 second

### 2. Professional Frontend
- **Modern Design**: Gradient backgrounds, glass-morphism effects
- **Smooth Animations**: Powered by Framer Motion
- **Responsive**: Works on desktop, tablet, and mobile
- **Intuitive UX**: Drag-and-drop image upload

### 3. Robust Backend
- **RESTful API**: Flask-based with CORS support
- **Image Processing**: PIL, OpenCV, scikit-image
- **Model Serving**: TensorFlow/Keras integration
- **Error Handling**: Comprehensive validation

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Frontend (React)                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │   Home   │  │Detection │  │  About   │          │
│  └──────────┘  └──────────┘  └──────────┘          │
│                      ↓                               │
│              Framer Motion + Tailwind               │
└─────────────────────────────────────────────────────┘
                       ↓ HTTP/REST
┌─────────────────────────────────────────────────────┐
│                  Backend (Flask)                     │
│  ┌──────────────────────────────────────────────┐  │
│  │            API Endpoints                      │  │
│  │  /api/predict  /api/health  /api/about      │  │
│  └──────────────────────────────────────────────┘  │
│                       ↓                              │
│  ┌──────────────────────────────────────────────┐  │
│  │         Image Processing Pipeline            │  │
│  │   ELA → Resize → Normalize → CNN → Result   │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

## Technical Stack

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Python | 3.12 | Core language |
| TensorFlow | 2.15.0 | Deep learning framework |
| Keras | Latest | Neural network API |
| Flask | 3.0.0 | Web framework |
| Flask-CORS | 4.0.0 | Cross-origin support |
| Pillow | 10.1.0 | Image processing |
| OpenCV | 4.8.1 | Computer vision |
| NumPy | 1.24.3 | Numerical computing |
| scikit-learn | 1.3.2 | ML utilities |
| scikit-image | 0.22.0 | Image processing |

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2.0 | UI framework |
| React Router | 6.20.0 | Routing |
| Framer Motion | 10.16.16 | Animations |
| Axios | 1.6.2 | HTTP client |
| Tailwind CSS | Latest (CDN) | Styling |
| React Icons | 4.12.0 | Icons |
| React Dropzone | 14.2.3 | File upload |

## Model Architecture

```
Input: 128x128x3 RGB Image (ELA processed)
    ↓
Conv2D (32 filters, 5x5, ReLU)
    ↓
Conv2D (32 filters, 5x5, ReLU)
    ↓
MaxPooling2D (2x2)
    ↓
Dropout (0.25)
    ↓
Flatten
    ↓
Dense (256, ReLU)
    ↓
Dropout (0.5)
    ↓
Dense (2, Softmax)
    ↓
Output: [Fake, Real] probabilities
```

**Parameters**: 29,520,034
**Training Time**: ~10 minutes (24 epochs)
**Inference Time**: <1 second

## Dataset

**CASIA Image Tampering Detection Evaluation Database**

- **Source**: Kaggle
- **Total Images**: 4,164
  - Authentic (Au): 2,100
  - Tampered (Tp): 2,064
- **Split**: 80/20 train-validation
- **Augmentation**: Rotation, normalization

## Performance Metrics

| Metric | Value |
|--------|-------|
| Overall Accuracy | 93.56% |
| Fake Detection Accuracy | 99.48% |
| Real Detection Accuracy | 91.22% |
| Training Accuracy | 97.18% |
| Validation Accuracy | 92.20% |
| False Positive Rate | 8.78% |
| False Negative Rate | 0.52% |

## Pages & Features

### 1. Home Page ([Home.js](frontend/src/pages/Home.js))
- Animated hero section with gradient background
- Feature cards with icons
- Performance statistics
- Call-to-action buttons
- Floating animations

### 2. Detection Page ([Detection.js](frontend/src/pages/Detection.js))
- Drag-and-drop file upload
- Image preview
- Real-time detection
- Confidence score visualization
- ELA image display
- Results animation
- Error handling

### 3. About Page ([About.js](frontend/src/pages/About.js))
- Project description
- How it works section
- Technology stack
- Model performance
- Dataset information
- Development timeline

### 4. Profile Page ([Profile.js](frontend/src/pages/Profile.js))
- Developer information
- Skills showcase
- Project highlights
- Achievements
- Contact information
- Interactive elements

## API Documentation

### Endpoints

#### 1. Health Check
```http
GET /api/health
```

**Response**:
```json
{
  "status": "healthy",
  "message": "API is running"
}
```

#### 2. Predict Image Forgery
```http
POST /api/predict
Content-Type: multipart/form-data
```

**Request**:
- `image`: Image file (JPEG, PNG, TIF)

**Response**:
```json
{
  "prediction": "fake",
  "confidence": 99.48,
  "is_fake": true,
  "ela_image": "data:image/png;base64,..."
}
```

#### 3. Developer Information
```http
GET /api/about
```

**Response**:
```json
{
  "name": "Mujtaba Ali",
  "email": "m.elya1412@gmail.com",
  "project": "Image Forgery Detection using Deep Learning",
  "description": "Advanced image forgery detection system...",
  "technologies": ["Python", "TensorFlow", ...],
  "accuracy": "93.56%",
  "model": "CNN with ELA preprocessing"
}
```

## Error Level Analysis (ELA) Explained

**How ELA Works**:

1. **Save Image**: Original image is saved at a specific JPEG quality (91%)
2. **Compare**: Difference between original and re-compressed image is calculated
3. **Amplify**: Differences are scaled and brightness-enhanced
4. **Analyze**: Bright areas indicate potential manipulation

**Why ELA Works**:
- JPEG compression is lossy and uniform across authentic images
- Manipulated regions show different compression levels
- Copy-paste or splicing creates compression inconsistencies
- These inconsistencies appear as bright areas in ELA

## Security Considerations

- ✅ Input validation for file uploads
- ✅ File type checking (images only)
- ✅ CORS configuration for controlled access
- ✅ No data storage (privacy-preserving)
- ✅ Error handling to prevent crashes
- ⚠️ Add authentication for production use
- ⚠️ Rate limiting recommended
- ⚠️ HTTPS required for production

## Deployment Guide

### Backend Deployment (Heroku Example)

1. Create `Procfile`:
```
web: gunicorn app:app
```

2. Deploy:
```bash
heroku create your-app-name
git push heroku main
```

### Frontend Deployment (Vercel Example)

1. Build:
```bash
npm run build
```

2. Deploy:
```bash
vercel deploy
```

### Environment Variables

**Backend** (`.env`):
```env
FLASK_ENV=production
MODEL_PATH=my_model.keras
```

**Frontend** (`.env`):
```env
REACT_APP_API_URL=https://your-backend-url.com
```

## File Structure Details

```
img/
├── backend/
│   ├── app.py                    # Main Flask application
│   ├── requirements.txt          # Python dependencies
│   └── my_model.keras           # Trained CNN model
│
├── frontend/
│   ├── public/
│   │   └── index.html           # HTML template
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.js        # Navigation bar component
│   │   ├── pages/
│   │   │   ├── Home.js          # Landing page
│   │   │   ├── Detection.js     # Detection interface
│   │   │   ├── About.js         # About page
│   │   │   └── Profile.js       # Profile page
│   │   ├── App.js               # Root component
│   │   ├── index.js             # Entry point
│   │   └── index.css            # Global styles
│   ├── package.json             # Node dependencies
│   └── tailwind.config.js       # Tailwind configuration
│
├── Copy_of_Image_forgery_Detection.ipynb  # Training notebook
├── README.md                     # Main documentation
├── SETUP.md                      # Setup instructions
├── PROJECT_OVERVIEW.md          # This file
├── .gitignore                   # Git ignore rules
├── setup.bat                    # Windows setup script
├── start-backend.bat           # Start backend script
└── start-frontend.bat          # Start frontend script
```

## Development Workflow

### Local Development
1. Run `setup.bat` (first time only)
2. Run `start-backend.bat` in one terminal
3. Run `start-frontend.bat` in another terminal
4. Access http://localhost:3000

### Making Changes

**Backend**:
- Edit files in `backend/`
- Flask auto-reloads on changes (debug mode)

**Frontend**:
- Edit files in `frontend/src/`
- React auto-reloads on changes

### Testing
- Upload test images (both real and fake)
- Check console for errors (F12)
- Verify API responses in Network tab

## Future Enhancements

### Short-term
- [ ] Add more image format support (GIF, BMP, WEBP)
- [ ] Batch processing for multiple images
- [ ] Download detection report (PDF)
- [ ] Dark mode toggle

### Medium-term
- [ ] User authentication system
- [ ] Save detection history
- [ ] Advanced ELA visualization with heatmaps
- [ ] Compare multiple images side-by-side
- [ ] API key system for developers

### Long-term
- [ ] Fine-tune model with more data
- [ ] Support for video forgery detection
- [ ] Mobile app (React Native)
- [ ] Browser extension
- [ ] Cloud deployment with CDN

## Known Limitations

1. **Model Size**: Large model file (~113 MB)
2. **Processing**: CPU-based inference (GPU optional)
3. **Formats**: Best with JPEG images
4. **Resolution**: Works best with medium-resolution images
5. **Internet**: Requires backend server connection

## Troubleshooting

### Common Issues

**Backend won't start**:
- Check Python version (3.12+)
- Verify virtual environment is activated
- Ensure all dependencies are installed

**Frontend won't start**:
- Check Node.js version (16+)
- Delete `node_modules` and reinstall
- Check for port conflicts (port 3000)

**Low accuracy**:
- Ensure model file is correct
- Check image quality (not too low resolution)
- Verify ELA quality parameter (91)

## Performance Optimization Tips

1. **Backend**:
   - Use Gunicorn with multiple workers
   - Add Redis for caching
   - Implement connection pooling
   - Use GPU for inference (CUDA)

2. **Frontend**:
   - Enable production build
   - Use lazy loading for images
   - Implement code splitting
   - Add service worker for PWA

3. **Model**:
   - Quantize model for smaller size
   - Use TensorFlow Lite for mobile
   - Batch predictions when possible

## Credits & References

- **CASIA Dataset**: Institute of Automation, Chinese Academy of Sciences
- **TensorFlow**: Google Brain Team
- **React**: Facebook/Meta
- **Framer Motion**: Framer
- **Tailwind CSS**: Tailwind Labs

## License

MIT License - See LICENSE file for details

## Contact & Support

**Developer**: Mujtaba Ali
**Email**: m.elya1412@gmail.com

For bugs, feature requests, or questions, please reach out via email.

---

**Built with ❤️ by Mujtaba Ali**

*Making the digital world more trustworthy, one image at a time.*

# Backend Deployment Guide for Vercel

## 🚀 Vercel Serverless Functions Deployment

This guide shows how to deploy your Express.js backend to Vercel as serverless functions.

### 📁 Project Structure (Serverless)
```
therapist-backend/
├── api/
│   ├── index.js          # Health check (GET /)
│   ├── contact.js        # Contact form (POST /api/contact)
│   └── consultation.js   # Consultation booking (POST /api/consultation)
├── lib/
│   └── db.js            # Database connection utility
├── models/
│   ├── Contact.js       # Contact model
│   └── Consultation.js  # Consultation model
├── vercel.json          # Vercel configuration
├── package.json         # Dependencies
└── .env                 # Environment variables (local)
```

### 🔧 Environment Variables for Vercel

Set these in your Vercel Dashboard:

```bash
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/?retryWrites=true&w=majority&appName=YOUR_APP_NAME
NODE_ENV=production
FRONTEND_URL=https://your-frontend.vercel.app
```

### 📋 Deployment Steps

#### Option 1: Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Import your backend repository
3. Framework Preset: **Other**
4. Root Directory: Leave empty or set to backend folder
5. Build Command: Leave empty (serverless functions don't need build)
6. Install Command: `npm install`

#### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to backend directory
cd therapist-backend

# Deploy
vercel

# For production deployment
vercel --prod
```

### 🌐 API Endpoints After Deployment

Your Vercel deployment will create these endpoints:

- **Health Check:** `https://your-app.vercel.app/`
- **Contact Form:** `https://your-app.vercel.app/api/contact`
- **Consultation:** `https://your-app.vercel.app/api/consultation`

### 🔄 Update Frontend API URLs

Update your frontend `.env` file:
```bash
VITE_API_URL=https://your-backend-app.vercel.app
```

### ⚡ Serverless Function Benefits

- **Automatic Scaling:** Functions scale to zero when not in use
- **Cost Effective:** Only pay for execution time
- **Global Distribution:** Functions run close to users
- **No Server Management:** Vercel handles infrastructure

### 🛠️ Local Testing

Test serverless functions locally with Vercel CLI:
```bash
# Install dependencies
npm install

# Start Vercel dev server
vercel dev
```

### 📝 Important Notes

1. **Cold Starts:** First request after idle time might be slower
2. **Execution Limits:** Max 30 seconds execution time
3. **Memory Limit:** 1024MB per function
4. **Database Connections:** Use connection pooling for efficiency

### 🔧 Alternative: Keep Express Server

If you prefer to keep your Express.js server structure, you can also deploy it to Vercel, but the serverless approach above is recommended for better performance and cost efficiency.

### 🐛 Troubleshooting

- **MongoDB Connection Issues:** Check if your IP is whitelisted in MongoDB Atlas
- **CORS Errors:** Ensure FRONTEND_URL is set correctly
- **Environment Variables:** Verify all required env vars are set in Vercel dashboard
- **Function Timeout:** Check logs in Vercel dashboard for execution time

### 📊 Monitoring

Monitor your deployment:
- **Vercel Dashboard:** View function logs and metrics
- **MongoDB Atlas:** Monitor database connections and queries
- **Error Tracking:** Set up error logging for production issues

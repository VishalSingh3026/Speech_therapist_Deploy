# Frontend Deployment Guide for Vercel

## 🚀 Environment Variables for Vercel

When deploying to Vercel, set these environment variables in your Vercel dashboard:

### Required Environment Variables:

```bash
VITE_API_URL=https://your-backend-name.onrender.com
VITE_NODE_ENV=production
VITE_SITE_NAME=Speech Spark Therapy
VITE_SITE_DESCRIPTION=Professional speech therapy services for children
VITE_SITE_URL=https://your-vercel-app.vercel.app
```

### Optional Environment Variables:

```bash
VITE_THERAPIST_NAME=Your Name
VITE_THERAPIST_PHONE=+1-xxx-xxx-xxxx
VITE_THERAPIST_EMAIL=contact@speechspark.com
```

## 📋 Deployment Steps

### 1. Deploy Backend to Render First
- Deploy your backend to Render
- Note down your Render app URL (e.g., `https://your-app.onrender.com`)

### 2. Deploy Frontend to Vercel

#### Option A: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Install Command: `npm install`

#### Option B: Using Vercel CLI
```bash
npm install -g vercel
cd speech-spark-portfolio-website
vercel
```

### 3. Set Environment Variables in Vercel
1. Go to Project Settings → Environment Variables
2. Add the required environment variables listed above
3. Replace `https://your-backend-name.onrender.com` with your actual Render URL

### 4. Update Backend CORS
After getting your Vercel URL, update your backend's environment variables:
```bash
FRONTEND_URL=https://your-vercel-app.vercel.app
```

## 🛠️ Local Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Environment Setup:**
   - Copy `.env.example` to `.env`
   - Update `VITE_API_URL` with your local backend URL

3. **Start Development Server:**
   ```bash
   npm run dev
   ```

## 📝 Build Commands

- **Development Build:** `npm run build:dev`
- **Production Build:** `npm run build`
- **Preview:** `npm run preview`

## 🔧 Important Notes

- All environment variables for Vite must start with `VITE_`
- The `.env` file is ignored by git for security
- Use `.env.example` as a template for other developers
- Always set `VITE_API_URL` to your production backend URL in Vercel
- Make sure your backend allows CORS from your Vercel domain

## 📚 Environment Variable Usage in Code

```typescript
// Access environment variables in your components
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const siteName = import.meta.env.VITE_SITE_NAME || 'Speech Therapy';

// Or use the centralized config
import { API_CONFIG, ENV_CONFIG } from '@/lib/config';
```

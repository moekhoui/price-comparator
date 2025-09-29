# Deployment Guide for Vercel

## Environment Variables for Vercel

Add these environment variables in your Vercel dashboard:

### Required Variables:

```
DATABASE_URL=mysql://username:password@host:port/database?ssl-mode=REQUIRED
```

```
GEMINI_API_KEY=your_gemini_api_key_here
```

### Optional Variables:

```
NEXTAUTH_URL=https://your-app-name.vercel.app
```

```
NEXTAUTH_SECRET=your-secret-key-here
```

## Steps to Deploy:

1. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/price-comparator.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your `price-comparator` repository

3. **Configure Environment Variables:**
   - In Vercel dashboard, go to your project
   - Click "Settings" → "Environment Variables"
   - Add the variables listed above

4. **Deploy:**
   - Vercel will automatically deploy on push
   - Or click "Deploy" in the dashboard

5. **Initialize Database:**
   - After deployment, visit: `https://your-app.vercel.app/api/init-db`
   - This will create all necessary database tables

## Post-Deployment:

- Your app will be available at: `https://your-app-name.vercel.app`
- The database will be automatically initialized on first API call
- All features (search, bookmarks, history) will work immediately

## Troubleshooting:

- If database connection fails, check your `DATABASE_URL` format
- If Gemini API fails, verify your `GEMINI_API_KEY`
- Check Vercel function logs for any errors

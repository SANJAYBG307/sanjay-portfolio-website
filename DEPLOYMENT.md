# Free Deployment Guide (Vercel + Render)

## 1. Deploy Backend (Render)

1. Push this repository to GitHub.
2. Open Render and create a **Web Service**.
3. Connect the GitHub repository.
4. Configure service:
   - Root directory: `portfolio-server`
   - Build command: `npm install`
   - Start command: `npm start`
5. Deploy and note your backend URL.
6. Verify backend:
   - `https://your-service.onrender.com/api/test`

## 2. Deploy Frontend (Vercel)

1. Open Vercel and import the same GitHub repository.
2. Configure project:
   - Root directory: `portfolio-client`
   - Build command: `npm run build`
   - Output directory: `dist`
3. Add environment variable in Vercel:
   - Name: `VITE_API_BASE_URL`
   - Value: `https://your-service.onrender.com/api`
4. Redeploy.

## 3. Important Notes

- `portfolio-client/vercel.json` includes SPA rewrite support for React Router routes.
- Render free tier can sleep when idle; first API request may be slow.
- Contact page route has been removed from frontend navigation, but backend contact API still exists.

## 4. Optional Custom Domain

- Add custom domain in Vercel project settings.
- Point DNS records from your domain provider to Vercel.

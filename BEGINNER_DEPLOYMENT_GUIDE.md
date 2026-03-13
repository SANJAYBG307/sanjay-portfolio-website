# Beginner Deployment Guide (Step by Step)

This guide explains how to deploy your portfolio from start to finish in very simple English.

You will deploy:
- Frontend (`portfolio-client`) to **Vercel** (free)
- Backend (`portfolio-server`) to **Render** (free)

At the end, anyone in the world can open your portfolio link.

---

## Part 0: What You Need Before Starting

### Step 1: Create required accounts
1. Create a GitHub account: https://github.com
2. Create a Vercel account (use GitHub login): https://vercel.com
3. Create a Render account (use GitHub login): https://render.com

### Step 2: Install Git (if not installed)
1. Download Git: https://git-scm.com/downloads
2. Install with default options.
3. Open terminal and run:

```powershell
git --version
```

If version is shown, Git is ready.

---

## Part 1: Understand Your Project Structure

Your project has 2 apps:

1. `portfolio-client`
- React frontend (what users see)

2. `portfolio-server`
- Node/Express backend API (profile/projects data)

Frontend calls backend using API URL from environment variable:
- `VITE_API_BASE_URL`

---

## Part 2: Push Project to GitHub

### Step 1: Create a new repository on GitHub
1. Go to GitHub.
2. Click **New repository**.
3. Name it, for example: `sanjay-portfolio`.
4. Click **Create repository**.

### Step 2: Push local code to GitHub
Run these commands in your project root:

```powershell
git init
git add .
git commit -m "Initial portfolio deploy setup"
git branch -M main
git remote add origin https://github.com/<your-username>/sanjay-portfolio.git
git push -u origin main
```

Replace `<your-username>` with your GitHub username.

---

## Part 3: Deploy Backend on Render (Free)

### Step 1: Create Render Web Service
1. Login to Render.
2. Click **New** -> **Web Service**.
3. Connect your GitHub repository.
4. Select this repo.

### Step 2: Fill backend settings
Use these values:

- **Name**: `portfolio-server` (or any name)
- **Root Directory**: `portfolio-server`
- **Environment**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

### Step 3: Deploy
1. Click **Create Web Service**.
2. Wait for deployment to complete.

### Step 4: Test backend
Open this URL in browser:

```text
https://<your-render-service>.onrender.com/api/test
```

You should see JSON response like backend working.

Save this base URL (important):

```text
https://<your-render-service>.onrender.com
```

---

## Part 4: Deploy Frontend on Vercel (Free)

### Step 1: Import project in Vercel
1. Login to Vercel.
2. Click **Add New...** -> **Project**.
3. Import your GitHub repo.

### Step 2: Configure frontend project
Use these values:

- **Framework Preset**: Vite
- **Root Directory**: `portfolio-client`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Step 3: Add environment variable
Before clicking deploy, add this env variable in Vercel project settings:

- **Name**: `VITE_API_BASE_URL`
- **Value**: `https://<your-render-service>.onrender.com/api`

### Step 4: Deploy
1. Click **Deploy**.
2. Wait until deployment finishes.

You will get frontend URL like:

```text
https://<your-vercel-project>.vercel.app
```

---

## Part 5: Connect and Verify Everything

### Step 1: Open frontend URL
1. Open your Vercel URL.
2. Check pages load correctly.

### Step 2: Test data loading
1. Home page should show profile data.
2. Projects page should show projects from backend.
3. Skills page should show skills from backend.

If data is missing, it means API URL env variable may be wrong.

---

## Part 6: Redeploy After New Code Changes

Whenever you change code:

```powershell
git add .
git commit -m "your update message"
git push
```

Then:
- Vercel auto redeploys frontend
- Render auto redeploys backend

---

## Part 7: Common Beginner Problems and Fixes

### Problem 1: Frontend works, but no API data
Reason: wrong `VITE_API_BASE_URL`

Fix:
1. Go to Vercel project -> Settings -> Environment Variables.
2. Correct `VITE_API_BASE_URL`.
3. Redeploy project.

### Problem 2: Render backend sleeps
Reason: free tier sleeps after inactivity.

Fix:
- First API call may be slow (10-60 sec). This is normal in free plan.

### Problem 3: Route not found on refresh
Fix:
- Already handled by `portfolio-client/vercel.json` rewrite config.

---

## Part 8: Optional Next Improvements

1. Add custom domain in Vercel (example: `sanjaybg.com`)
2. Add HTTPS domain to resume and LinkedIn
3. Add analytics (Vercel Analytics or Google Analytics)
4. Add CI checks (build/test on every push)

---

## Part 9: Quick Checklist (Final)

- [ ] GitHub repo created and code pushed
- [ ] Render backend deployed
- [ ] Render `/api/test` works
- [ ] Vercel frontend deployed from `portfolio-client`
- [ ] `VITE_API_BASE_URL` set in Vercel
- [ ] Portfolio opens publicly
- [ ] Data loads on Home/Projects/Skills

---

If you want, next I can create one more file called `DEPLOYMENT_CHECKLIST.md` with only 1-page quick commands so you can use it every time.
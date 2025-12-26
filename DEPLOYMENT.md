# Deployment Guide for CodeStorm 2026

Since we switched the registration to **Google Forms**, your website is now a **Static Website**. This makes deployment extremely easy and 100% FREE.

You do NOT need a backend server or database anymore.

## Option 1: Vercel (Recommended & Easiest)
Vercel is the creators of the tools we used (Vite/React ecosystem) and is perfect for this site.

### Steps:
1.  **Push your code to GitHub**:
    - Create a new repository on [GitHub.com](https://github.com/new) named `codestorm-2026`.
    - Run these commands in your terminal:
      ```bash
      git init
      git add .
      git commit -m "Ready for deployment"
      git branch -M main
      git remote add origin https://github.com/YOUR_USERNAME/codestorm-2026.git
      git push -u origin main
      ```

2.  **Deploy on Vercel**:
    - Go to [Vercel.com](https://vercel.com) and Sign Up/Login with GitHub.
    - Click **"Add New"** -> **"Project"**.
    - Select your `codestorm-2026` repository and click **Import**.
    - **Build Settings**: Vercel detects Vite automatically. (Build command: `vite build`, Output: `dist`).
    - Click **Deploy**.

🎉 **Done!** Vercel will give you a link (e.g., `https://codestorm-2026.vercel.app`) that you can share with everyone.

---

## Option 2: Netlify (Alternative)
1.  Push your code to GitHub (same as above).
2.  Go to [Netlify.com](https://www.netlify.com/) and Login.
3.  Click **"Add new site"** -> **"Import from Git"**.
4.  Choose "GitHub" and select your repository.
5.  Click **"Deploy to Netlify"**.

---

## Important Note
Since we are no longer using the backend `server/` folder or the `database`, you can ignore those files during deployment. The website relies entirely on the Frontend `src/` files and the Google Form link.

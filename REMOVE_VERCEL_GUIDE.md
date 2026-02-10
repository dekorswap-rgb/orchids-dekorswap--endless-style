# How to Remove Vercel Deployment from GitHub

Your project is currently deploying to **both Vercel and GitHub Pages** because Vercel is integrated with your GitHub repository. Here's how to fix this:

## ✅ Already Done (Local Cleanup)

- ✅ No `vercel.json` configuration file exists
- ✅ No `.vercel` directory in the project
- ✅ `.vercel` is already in `.gitignore`
- ✅ Removed Vercel reference from `README.md`

## 🔧 What You Need to Do (GitHub/Vercel Settings)

### **Option 1: Disconnect Vercel from GitHub (Recommended)**

1. **Go to Vercel Dashboard**:
   - Visit: https://vercel.com/dashboard
   - Log in to your Vercel account

2. **Find Your Project**:
   - Look for `dekor-swap` in your projects list
   - Click on the project

3. **Delete the Project**:
   - Go to **Settings** → **General**
   - Scroll to the bottom
   - Click **"Delete Project"**
   - Confirm deletion

4. **Remove GitHub Integration** (if needed):
   - Go to: https://github.com/settings/installations
   - Find **Vercel** in the list
   - Click **Configure**
   - Either:
     - Remove access to `dekor-swap` repository specifically, OR
     - Uninstall Vercel completely if you're not using it

### **Option 2: Keep Vercel, Disable GitHub Pages**

If you prefer Vercel over GitHub Pages:

1. **Disable GitHub Pages**:
   - Go to: https://github.com/dekorswap-rgb/dekor-swap/settings/pages
   - Under "Source", select **"None"**
   - Save

2. **Remove GitHub Actions Workflow**:
   - Delete `.github/workflows/deploy-gh-pages.yml`
   - Commit and push

3. **Update `next.config.ts`**:
   - Comment out `basePath` and `assetPrefix`
   - Rebuild and deploy

## 🎯 Recommended: Use GitHub Pages Only

Since you've already set up GitHub Pages and it's working:

1. **Disconnect Vercel** (see Option 1 above)
2. **Keep your current setup**:
   - GitHub Actions workflow: `.github/workflows/deploy-gh-pages.yml`
   - Next.js config: `basePath: '/dekor-swap'`
   - Site URL: https://dekorswap-rgb.github.io/dekor-swap/

## ✅ After Disconnecting Vercel

Once you disconnect Vercel from GitHub:
- Only **one deployment** will appear on each commit (GitHub Pages)
- Your site will be available at: **https://dekorswap-rgb.github.io/dekor-swap/**
- No more duplicate deployments!

## 📝 Notes

- The duplicate deployments are happening because **both Vercel and GitHub Actions** are triggered on every push to `main`
- This is a GitHub integration issue, not a code issue
- All Vercel-related files have been removed from your local project

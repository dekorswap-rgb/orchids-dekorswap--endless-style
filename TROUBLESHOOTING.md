# GitHub Pages Deployment - Troubleshooting Guide

## 🚨 Issues Identified

### 1. **Detached HEAD State**
Your repository is currently in a "detached HEAD" state, which means you're not on any branch. This prevents you from pushing changes.

**Current Status:**
```
HEAD detached from 8bf68fa
```

### 2. **GitHub Account Configuration**
- **Current User**: Marky3012
- **Current Email**: choudhurymayankhooda16@gmail.com
- **Remote**: dekorswap-rgb/dekor-swap

## 🔧 Step-by-Step Fix

### **Step 1: Fix Detached HEAD State**

Run these commands in order:

```bash
# 1. Check which branches exist
git branch -a

# 2. Checkout the main branch (or master if that's your default)
git checkout main
# OR if your branch is called master:
# git checkout master

# 3. If the branch doesn't exist locally, create it from the remote
git checkout -b main origin/main
# OR for master:
# git checkout -b master origin/master
```

### **Step 2: Stage and Commit Your Changes**

```bash
# Add all the changes we made
git add .

# Commit with a descriptive message
git commit -m "Fix GitHub Pages deployment configuration

- Add output: export to next.config.ts
- Add .nojekyll file to out directory
- Create GitHub Actions workflow for auto-deployment
- Update .gitignore to track out directory"
```

### **Step 3: Configure Git for Your GitHub Account**

If you're using a different GitHub account than what's currently configured:

```bash
# Set your GitHub username
git config user.name "YourGitHubUsername"

# Set your GitHub email (use the email associated with your GitHub account)
git config user.email "your-github-email@example.com"
```

### **Step 4: Push to GitHub**

```bash
# Push to the main branch
git push origin main

# If you get authentication errors, you may need to use a Personal Access Token
# See instructions below
```

## 🔑 Authentication Options

### **Option A: Using Personal Access Token (Recommended)**

1. **Create a Personal Access Token:**
   - Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Give it a name like "DekorSwap Deployment"
   - Select scopes: `repo` (full control of private repositories)
   - Click "Generate token"
   - **COPY THE TOKEN** (you won't see it again!)

2. **Use the token when pushing:**
   ```bash
   # When prompted for password, paste your token instead
   git push origin main
   ```

3. **Or update the remote URL to include the token:**
   ```bash
   git remote set-url origin https://YOUR_TOKEN@github.com/dekorswap-rgb/dekor-swap.git
   ```

### **Option B: Using SSH (Alternative)**

1. **Set up SSH key:**
   ```bash
   # Generate SSH key
   ssh-keygen -t ed25519 -C "your-github-email@example.com"
   
   # Start SSH agent
   eval "$(ssh-agent -s)"
   
   # Add SSH key
   ssh-add ~/.ssh/id_ed25519
   ```

2. **Add SSH key to GitHub:**
   - Copy your public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to GitHub.com → Settings → SSH and GPG keys → New SSH key
   - Paste the key and save

3. **Update remote to use SSH:**
   ```bash
   git remote set-url origin git@github.com:dekorswap-rgb/dekor-swap.git
   ```

## 📋 Enable GitHub Pages

After successfully pushing your changes:

1. **Go to your repository on GitHub**
   - Navigate to: https://github.com/dekorswap-rgb/dekor-swap

2. **Enable GitHub Pages:**
   - Click **Settings** tab
   - Click **Pages** in the left sidebar
   - Under "Build and deployment":
     - **Source**: Select "GitHub Actions"
   - Click **Save**

3. **Grant Workflow Permissions:**
   - Go to **Settings** → **Actions** → **General**
   - Scroll to "Workflow permissions"
   - Select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"
   - Click **Save**

## 🚀 Trigger Deployment

Once you've pushed your changes and enabled GitHub Pages:

1. **Check the Actions tab:**
   - Go to the **Actions** tab in your repository
   - You should see a workflow run starting automatically

2. **Monitor the deployment:**
   - Click on the running workflow to see progress
   - Wait for it to complete (usually 2-3 minutes)

3. **Access your website:**
   - Once complete, visit: https://dekorswap-rgb.github.io/dekor-swap/
   - Or your custom domain: https://dekorswap.com

## 🐛 Common Issues & Solutions

### **Issue: "Permission denied" when pushing**
**Solution:** Use a Personal Access Token instead of your password

### **Issue: "Updates were rejected because the remote contains work"**
**Solution:** 
```bash
git pull origin main --rebase
git push origin main
```

### **Issue: "GitHub Actions workflow not running"**
**Solution:** 
- Check Settings → Actions → General → Workflow permissions
- Ensure "Read and write permissions" is selected

### **Issue: "404 error when visiting GitHub Pages URL"**
**Solution:**
- Wait a few minutes for deployment to complete
- Check the Actions tab to ensure deployment succeeded
- Verify GitHub Pages is enabled in Settings

## ✅ Verification Checklist

- [ ] Repository is on main/master branch (not detached HEAD)
- [ ] All changes are committed
- [ ] Changes are pushed to GitHub
- [ ] GitHub Pages is enabled with "GitHub Actions" as source
- [ ] Workflow permissions are set to "Read and write"
- [ ] GitHub Actions workflow has run successfully
- [ ] Website is accessible at the GitHub Pages URL

## 📞 Need More Help?

If you're still having issues, please provide:
1. The exact error message you're seeing
2. Which step you're stuck on
3. Screenshot of the error (if applicable)

I'll help you resolve it!

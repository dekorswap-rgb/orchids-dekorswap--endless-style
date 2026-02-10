# Git Branching Strategy

## Branch Structure

### `main` (Production Branch)
- **Purpose**: Production-ready code deployed to dekorswap.com
- **Protection**: Should be protected, requires PR approval
- **Deployment**: Automatically deploys to GitHub Pages on push
- **Stability**: Only merge tested, stable code

### `development` (Development Branch)
- **Purpose**: Active development and testing
- **Usage**: Default branch for all new features
- **Testing**: Test all changes here before merging to main
- **Deployment**: Does NOT auto-deploy (safe for experimentation)

---

## Workflow

### For New Features

1. **Start from development**
   ```bash
   git checkout development
   git pull origin development
   ```

2. **Create feature branch** (optional, for larger features)
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make changes and commit**
   ```bash
   git add .
   git commit -m "Add your feature"
   ```

4. **Push to development**
   ```bash
   git checkout development
   git merge feature/your-feature-name  # if using feature branch
   git push origin development
   ```

5. **Test thoroughly on development branch**

6. **Merge to main when ready for production**
   ```bash
   git checkout main
   git pull origin main
   git merge development
   git push origin main
   ```
   
   This will trigger automatic deployment to dekorswap.com

---

## Quick Commands

### Switch to development
```bash
git checkout development
```

### Switch to production (main)
```bash
git checkout main
```

### See current branch
```bash
git branch
```

### See all branches
```bash
git branch -a
```

---

## Important Rules

1. ✅ **DO**: Work on `development` branch for all changes
2. ✅ **DO**: Test thoroughly before merging to `main`
3. ✅ **DO**: Keep `main` stable and production-ready
4. ❌ **DON'T**: Push directly to `main` (use PRs when possible)
5. ❌ **DON'T**: Merge untested code to `main`

---

## GitHub Actions Deployment

**Only `main` branch triggers deployment:**
- Push to `main` → Builds → Deploys to dekorswap.com
- Push to `development` → No deployment (safe for testing)

---

## Current Setup

- ✅ `main` branch: Production (deploys to dekorswap.com)
- ✅ `development` branch: Development (no auto-deploy)
- ✅ GitHub Actions: Configured to deploy only from `main`

You're all set! 🚀

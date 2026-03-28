# GitHub Setup Instructions

## 📋 Overview

This guide walks through uploading the GitHub Actions Migration Platform to your GitHub repository and setting up CI/CD.

## ✅ What's Already Done

- ✅ Git repository initialized locally
- ✅ All files committed with proper co-author attribution
- ✅ Main branch configured
- ✅ CI/CD scheduled for 6:30 PM AEST daily (10:30 AM UTC)

## 🚀 Step-by-Step Setup

### Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Create a new repository named `github-actions-migration-platform`
3. Do NOT initialize with README, .gitignore, or license (we have those)
4. Click "Create repository"

### Step 2: Add Remote and Push

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
cd /Users/vigneshnarayanan/github-actions-migration-platform

# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/github-actions-migration-platform.git

# Push to GitHub
git push -u origin main
```

**Note:** You may need to authenticate using:
- GitHub CLI: `gh auth login`
- Personal Access Token: `git config credential.helper store`
- SSH keys: `ssh-keygen -t ed25519 -C "your_email@example.com"`

### Step 3: Verify on GitHub

1. Go to https://github.com/YOUR_USERNAME/github-actions-migration-platform
2. Verify all files are present
3. Check `.github/workflows/` directory has all 3 workflow files

### Step 4: Enable GitHub Actions

1. Go to repository Settings → Actions → General
2. Ensure "Allow all actions and reusable workflows" is selected
3. Click Save

## 🔄 GitHub Actions Workflows

### Continuous Integration (ci.yaml)

**Triggers:**
- On push to main or develop branches
- On pull requests to main branch
- Daily at 6:30 PM AEST (10:30 AM UTC)

**Jobs:**
- **lint** - Code quality checks with ESLint
- **test** - Unit tests with Jest

**Commands that will run:**
```bash
npm ci              # Install dependencies
npm run lint        # ESLint check
npm test            # Jest tests
```

### Application Migration (migrate.yaml)

**Triggers:**
- Manual workflow dispatch (workflow_dispatch)

**Input:**
- app_name - Application to migrate
- dry_run - Preview mode (optional)

**Commands:**
```bash
npm ci
npm run analyze -- {app_name}
npm run migrate -- {app_name} --dry-run={dry_run}
```

### Application Patching (patch.yaml)

**Triggers:**
- Weekly schedule (Sundays)
- Manual workflow dispatch

**Input:**
- app_name - Application to patch
- patch_type - Type of patch (optional)
- dry_run - Preview mode (optional)

**Commands:**
```bash
npm ci
npm run patch -- {app_name} --type={patch_type} --dry-run={dry_run}
```

## 📅 Schedule Configuration

The CI workflow is scheduled daily at **6:30 PM AEST** (10:30 AM UTC):

```yaml
schedule:
  - cron: '30 10 * * *'
```

This uses a 24-hour UTC format:
- 6:30 PM AEST = 10:30 AM UTC
- Cron format: `minute hour * * *` = `30 10 * * *`

To change the schedule, edit `.github/workflows/ci.yaml` and update the cron expression.

## 🧪 Running Tests Locally

If you need to run tests manually:

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run specific test file
npm test -- tests/core/patch-engine.test.js

# Run with coverage
npm test -- --coverage
```

## 🔍 Running Linting

Check code quality:

```bash
# Check for issues
npm run lint

# Auto-fix fixable issues
npm run lint:fix
```

## 📊 Monitoring Workflow Runs

### Via GitHub Web Interface

1. Go to your repository
2. Click "Actions" tab
3. View workflow runs
4. Click on a run to see details
5. Click on a job to see logs

### Via GitHub CLI

```bash
# List recent workflow runs
gh run list --repo YOUR_USERNAME/github-actions-migration-platform

# View run details
gh run view RUN_ID --repo YOUR_USERNAME/github-actions-migration-platform

# View run logs
gh run view RUN_ID --log --repo YOUR_USERNAME/github-actions-migration-platform

# Watch a run
gh run watch RUN_ID --repo YOUR_USERNAME/github-actions-migration-platform
```

## ⚠️ Potential Issues & Solutions

### Issue: "npm ci fails with 404 errors"

**Solution:** Ensure all dependencies in `package.json` are available

```bash
npm ci --verbose
```

### Issue: "ESLint fails on style issues"

**Solution:** Auto-fix the issues:

```bash
npm run lint:fix
git add .
git commit -m "style: fix linting issues"
git push
```

### Issue: "Tests fail with missing fixtures"

**Solution:** Check test file paths and ensure fixtures exist

```bash
npm test -- --verbose
```

### Issue: "GitHub Actions workflow not triggering"

**Solution:** Check workflow syntax and file location:
- Must be in `.github/workflows/` directory
- Must have `.yaml` or `.yml` extension
- Must have valid YAML syntax

Validate with:
```bash
cat .github/workflows/ci.yaml | python3 -m yaml
```

## 🔐 Secrets Management (Optional)

If you need to add secrets (e.g., GitHub tokens, API keys):

1. Go to repository Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add secret name and value
4. Reference in workflow: `${{ secrets.SECRET_NAME }}`

Example:
```yaml
- name: Deploy
  env:
    API_KEY: ${{ secrets.API_KEY }}
  run: npm run deploy
```

## 📝 Expected Test Run Output

When CI runs successfully, you should see:

```
✅ Lint Check
  - No ESLint errors found

✅ Tests
  - PatchEngine
    ✓ should scan for patches
    ✓ should validate patches
    ✓ should apply patches in dry-run mode
    ✓ should handle scanAndPatch workflow
  
  - ConfigManager
    ✓ should initialize with base path
    ✓ should list applications

Test Suites: 2 passed, 2 total
Tests:       6 passed, 6 total
```

## 🔄 Next Steps

1. **Push to GitHub** - Follow Step 2 above
2. **Enable Actions** - Follow Step 4 above
3. **Verify first run** - Go to Actions tab and wait for workflow to complete
4. **Check logs** - Click on run to see detailed output
5. **Fix any failures** - Run commands locally and debug

## 📚 Additional Resources

- GitHub Actions Documentation: https://docs.github.com/actions
- Cron Schedule Generator: https://crontab.guru/
- GitHub CLI: https://cli.github.com/

## 🆘 Need Help?

1. Check workflow logs in GitHub Actions tab
2. Run commands locally to test: `npm install && npm test && npm run lint`
3. Review error messages carefully
4. Check `.github/workflows/*.yaml` syntax
5. Verify all dependencies are in `package.json`

---

**Repository Ready:** Yes ✅
**Local Git Setup:** Yes ✅
**CI/CD Configured:** Yes ✅
**Daily Schedule:** 6:30 PM AEST ✅

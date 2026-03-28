# 🔧 CI/CD Command Reference - Manual Run Instructions

## Quick Reference

If GitHub Actions tests fail, you can run these commands manually:

```bash
cd /Users/vigneshnarayanan/github-actions-migration-platform

# Full pipeline (all tests)
npm install && npm run lint && npm test

# Or run individually:
npm install
npm run lint
npm test
```

---

## 📋 All Available Commands

### Installation

```bash
# Install dependencies (required first)
npm install

# Clean install with package-lock.json
npm ci
```

**Use case:** GitHub Actions uses `npm ci`, local development uses `npm install`

---

### Linting (Code Quality)

```bash
# Check for linting errors
npm run lint

# Auto-fix fixable linting errors
npm run lint:fix
```

**Expected output if passing:**
```
> npm run lint
> eslint .

(no output = success!)
```

**If there are errors, run:**
```bash
npm run lint:fix
git add .
git commit -m "style: fix linting issues"
git push
```

---

### Testing

```bash
# Run all tests
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch

# Run tests with coverage report
npm test -- --coverage

# Run specific test file
npm test -- tests/core/patch-engine.test.js

# Run with verbose output
npm test -- --verbose
```

**Expected output if passing:**
```
PASS  tests/core/patch-engine.test.js
PASS  tests/utils/config.test.js

Test Suites: 2 passed, 2 total
Tests:       6 passed, 6 total
```

---

### Development

```bash
# Start CLI in development mode
npm run dev

# Start CLI normally
npm start

# Analyze example app
npm run analyze example-app

# Check status
npm run status

# Patch example app (dry-run)
npm run patch example-app -- --dry-run
```

---

## 📊 Understanding Test Output

### Successful Lint Output
```bash
$ npm run lint

> github-actions-migration-platform@0.1.0 lint
> eslint .

(no output means success - 0 errors!)
```

### Successful Test Output
```bash
$ npm test

PASS  tests/core/patch-engine.test.js
  PatchEngine
    ✓ should scan for patches (9 ms)
    ✓ should validate patches (1 ms)
    ✓ should apply patches in dry-run mode (1 ms)
    ✓ should handle scanAndPatch workflow (21 ms)

PASS  tests/utils/config.test.js
  ConfigManager
    ✓ should initialize with base path (30 ms)
    ✓ should list applications (1 ms)

Test Suites: 2 passed, 2 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        0.404 s
```

---

## 🚨 Troubleshooting

### Issue: "npm: command not found"

**Solution:** Install Node.js from https://nodejs.org/

```bash
# Verify installation
node --version    # should be v18+
npm --version     # should be v9+
```

---

### Issue: Linting Errors

**Error:**
```
src/commands/analyze.js
  13:11  error  'config' is assigned a value but never used  no-unused-vars
```

**Solution:**
```bash
# Option 1: Auto-fix
npm run lint:fix

# Option 2: Manual - remove the unused variable
# Edit the file and remove the unused variable assignment
```

---

### Issue: Test Failures

**Error:**
```
● PatchEngine › should scan for patches
  TypeError: Cannot read property 'scan' of undefined
```

**Solutions:**
1. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm test
   ```

2. Run with verbose output:
   ```bash
   npm test -- --verbose
   ```

3. Check test file exists:
   ```bash
   ls -la tests/core/patch-engine.test.js
   ```

---

### Issue: Dependencies Not Installing

**Error:**
```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
```

**Solutions:**
```bash
# Use legacy peer deps flag
npm install --legacy-peer-deps

# Or force fix
npm install --force
```

---

### Issue: Package-lock.json Issues

**Solutions:**
```bash
# Remove and recreate
rm package-lock.json
npm install

# Or update everything
npm update
npm install
```

---

## 📈 GitHub Actions CI/CD Commands

When workflows run on GitHub, they execute:

### Lint Job
```bash
npm ci
npm run lint
```

### Test Job
```bash
npm ci
npm test
```

**If either fails, check logs in:**
- Repository → Actions tab → Failed workflow → Click job → See logs

---

## 🔄 Full Pipeline Simulation (Local)

To simulate exactly what GitHub Actions runs:

```bash
# Clean install (like GitHub does)
npm ci

# Lint (like GitHub does)
npm run lint

# Test (like GitHub does)
npm test

# If all pass locally, they should pass on GitHub
```

---

## 🎯 Common Scenarios

### Scenario 1: Tests Fail on GitHub But Pass Locally

**Why:** Usually environment differences

**Solutions:**
```bash
# 1. Check Node version
node --version

# 2. Try npm ci instead of npm install
npm ci

# 3. Clear cache
npm cache clean --force
npm ci
npm test

# 4. Check .gitignore doesn't exclude important files
cat .gitignore
```

### Scenario 2: Need to Run Individual Test Suite

```bash
# Run only patch engine tests
npm test -- tests/core/patch-engine.test.js

# Run only config tests
npm test -- tests/utils/config.test.js
```

### Scenario 3: Check Test Coverage

```bash
npm test -- --coverage

# Opens in browser:
# open coverage/index.html
```

### Scenario 4: Debug a Single Test

```bash
# Run one test with verbose output
npm test -- tests/core/patch-engine.test.js --verbose

# Run with debugger
node --inspect-brk node_modules/.bin/jest --runInBand
```

---

## 📝 Performance Tips

### Speed Up Tests

```bash
# Run tests in parallel (default)
npm test

# Run tests sequentially (slower, useful for debugging)
npm test -- --runInBand

# Run only changed tests
npm test -- --onlyChanged
```

### Speed Up Linting

```bash
# Lint only changed files
npm run lint -- --fix-dry-run

# Lint specific directory
npm run lint -- src/commands/
```

---

## 🔐 Security Checks

```bash
# Check for vulnerabilities
npm audit

# Fix known vulnerabilities
npm audit fix

# Force fix (may break compatibility)
npm audit fix --force

# Dry run (see what would be fixed)
npm audit fix --dry-run
```

---

## 📊 View Detailed Logs

```bash
# Verbose npm output
npm install -verbose

# Verbose jest output
npm test -- --verbose

# Verbose eslint output
npm run lint -- --format pretty

# Show npm cache info
npm cache verify
```

---

## 🆘 Nuclear Options (Last Resort)

```bash
# Complete clean install
rm -rf node_modules
rm package-lock.json
npm cache clean --force
npm install

# Then test
npm test

# Then lint
npm run lint
```

---

## ✅ Pre-Push Checklist

Before pushing to GitHub:

```bash
# 1. Install
npm install

# 2. Lint
npm run lint

# 3. Fix any lint issues
npm run lint:fix

# 4. Test
npm test

# 5. Commit and push only if all pass!
git add .
git commit -m "your message"
git push
```

---

## 📋 Expected Success Output

### All Commands Pass

```
$ npm ci
added 443 packages ✓

$ npm run lint
> eslint .
(no output) ✓

$ npm test
PASS  tests/core/patch-engine.test.js
PASS  tests/utils/config.test.js
Test Suites: 2 passed, 2 total
Tests:       6 passed, 6 total ✓

Ready to push! ✅
```

---

## 🚀 Schedule Verification

GitHub Actions will run automatically:

**Daily at 6:30 PM AEST (10:30 AM UTC)**

To verify:
1. Go to: `https://github.com/YOUR_USERNAME/github-actions-migration-platform`
2. Click: Actions tab
3. Look for: "Continuous Integration" workflow
4. Should run daily at scheduled time

---

## 📞 Need Help?

Check these files:
- `CI_CD_TEST_REPORT.md` - Full test results
- `GITHUB_SETUP.md` - GitHub Actions setup
- `UPLOAD_TO_GITHUB_INSTRUCTIONS.md` - How to upload
- `FINAL_CI_CD_SUMMARY.md` - Overall summary

---

**Reference Version:** 1.0  
**Last Updated:** 2026-03-28  
**Status:** All Commands Tested ✅

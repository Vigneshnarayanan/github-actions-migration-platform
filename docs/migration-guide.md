# Migration Guide

## Overview

This guide walks through the process of migrating a legacy application from a traditional CI/CD system to GitHub Actions.

## Prerequisites

- Application source code in a GitHub repository
- Existing CI/CD configuration (Jenkins, GitLab CI, CircleCI, etc.)
- Access to GitHub Actions in your repository

## Migration Steps

### Step 1: Create Application Configuration

Create a configuration file for your application:

```bash
cp configs/example-app.yaml configs/my-app.yaml
```

Edit `configs/my-app.yaml` with your application details:

```yaml
name: my-app
type: nodejs
source:
  type: github
  url: https://github.com/myorg/my-app
ci:
  platform: jenkins
  config_path: Jenkinsfile
# ... rest of configuration
```

### Step 2: Analyze the Application

Run the analysis command to assess migration readiness:

```bash
npm run analyze my-app
```

Review the output for:
- Readiness score
- Potential issues
- Recommendations

### Step 3: Perform a Dry Run

Test the migration process without making changes:

```bash
npm run migrate my-app -- --dry-run
```

Review the migration plan output:
- Identified CI/CD steps
- Proposed GitHub Actions workflows
- Dependency analysis

### Step 4: Execute the Migration

Once satisfied with the dry run, execute the migration:

```bash
npm run migrate my-app
```

This will:
1. Parse your existing CI/CD configuration
2. Generate equivalent GitHub Actions workflows
3. Create workflow files in `.github/workflows/`
4. Update application configuration

### Step 5: Verify and Test

1. Push changes to a test branch
2. Verify GitHub Actions workflows execute
3. Compare results with legacy CI/CD
4. Make manual adjustments if needed

### Step 6: Enable Patching (Optional)

Set up automated patching for the application:

```bash
npm run patch my-app -- --dry-run --type security
```

Then enable in GitHub Actions:
- The `patch.yaml` workflow will run automatically
- Create pull requests for patch applications

## Troubleshooting

### Migration fails due to unsupported CI platform

Manually create GitHub Actions workflows by copying the structure from generated templates.

### Application behavior differs after migration

1. Check environment variables are properly set
2. Verify build and test commands match original
3. Check artifact handling
4. Review secret management

### Patches don't apply correctly

1. Verify patch definitions in `patches/` directory
2. Check application dependencies
3. Test patches in isolation
4. Review patch validation commands

## Next Steps

- Set up [monitoring](monitoring.md)
- Configure [notifications](notifications.md)
- Document [custom workflows](custom-workflows.md)

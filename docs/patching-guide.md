# Application Patching Guide

## Overview

The patching system enables automated scanning, validation, and application of patches to your applications.

## Patch Types

### 1. Dependency Patches
Update application dependencies to newer versions:
```bash
npm run patch my-app -- --type dependency
```

### 2. Security Patches
Apply security-related fixes:
```bash
npm run patch my-app -- --type security
```

### 3. Version Patches
Update to new major/minor/patch versions:
```bash
npm run patch my-app -- --type version
```

## Dry Run Mode

Always preview patches before applying:
```bash
npm run patch my-app -- --dry-run
```

## Patch Workflow

1. **Scan** - Identify available patches for the application
2. **Validate** - Check patch compatibility and integrity
3. **Apply** - Execute patch commands
4. **Verify** - Run validation tests after patch application
5. **Report** - Generate patch report with results

## Automatic Patching

The `patch.yaml` GitHub Actions workflow enables scheduled automatic patching:

- Runs weekly by default
- Can be triggered manually via workflow dispatch
- Creates pull requests for manual review
- Supports dry-run mode for preview

## Patch Configuration

Define patches in `patches/` directory:

```yaml
id: patch-001
type: dependency
name: Update Express.js
severity: medium
description: Update Express.js to latest stable version
commands:
  - npm update express
validation:
  - npm test
rollback:
  - npm install
```

## Best Practices

1. Always run dry-run first: `--dry-run`
2. Review patch details before applying
3. Have rollback procedures in place
4. Test patched applications thoroughly
5. Document patch changes in pull requests

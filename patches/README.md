# Patch Definitions

This directory contains patch definitions and templates for different patch types.

## Patch Types

- **dependency**: Update application dependencies to newer versions
- **security**: Apply security-related patches and fixes
- **version**: Update major/minor/patch versions

## Patch File Format

```yaml
id: patch-001
type: dependency
name: Update Express.js
severity: medium
description: Update Express.js to latest stable version
targetVersion: "4.18.2"
commands:
  - npm update express
validation:
  - npm test
rollback:
  - npm install
```

See template files for examples of each patch type.

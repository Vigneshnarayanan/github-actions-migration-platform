# CLI Reference

## Commands

### analyze

Analyze an application for migration readiness.

```bash
npm run analyze <app>
```

**Example:**
```bash
npm run analyze my-legacy-app
```

**Output:** JSON report with migration readiness score and recommendations.

---

### migrate

Migrate an application to GitHub Actions.

```bash
npm run migrate <app> [target] [options]
```

**Options:**
- `--dry-run` - Preview changes without applying
- `--override` - Override existing configuration

**Examples:**
```bash
# Dry run migration
npm run migrate my-app -- --dry-run

# Actual migration
npm run migrate my-app

# Override existing config
npm run migrate my-app -- --override
```

---

### patch

Apply patches to an application.

```bash
npm run patch <app> [options]
```

**Options:**
- `--type <type>` - Patch type: dependency, security, version (default: dependency)
- `--dry-run` - Preview patches without applying

**Examples:**
```bash
# Preview dependency patches
npm run patch my-app -- --dry-run

# Apply security patches
npm run patch my-app -- --type security

# Apply version patches
npm run patch my-app -- --type version
```

---

### status

Check migration and patch status.

```bash
npm run status [app]
```

**Examples:**
```bash
# Status of all applications
npm run status

# Status of specific application
npm run status my-app
```

**Output:** JSON status report.

---

## Global Options

- `DEBUG=1` - Enable debug logging
- `CONFIG_PATH=/path/to/configs` - Custom configuration directory

**Example:**
```bash
DEBUG=1 npm run migrate my-app
```

# Getting Started

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd github-actions-migration-platform
```

2. Install dependencies:
```bash
npm install
```

3. Make the CLI executable:
```bash
chmod +x src/cli.js
```

## Basic Usage

### Analyze an Application

```bash
npm run analyze my-legacy-app
```

### Migrate an Application

```bash
npm run migrate my-legacy-app

# Dry run mode
npm run migrate my-legacy-app -- --dry-run
```

### Apply Patches

```bash
# Patch dependencies
npm run patch my-legacy-app

# Patch with dry-run
npm run patch my-legacy-app -- --dry-run

# Security patches
npm run patch my-legacy-app -- --type security
```

### Check Status

```bash
# Check status of specific app
npm run status my-legacy-app

# Check status of all apps
npm run status
```

## Configuration

1. Create a configuration file for your application:
```bash
cp configs/example-app.yaml configs/my-app.yaml
```

2. Edit the configuration with your application details:
```yaml
name: my-app
type: nodejs
# ... more configuration
```

## Next Steps

- Read [Architecture](architecture.md) to understand the system design
- Read [Migration Guide](migration-guide.md) for detailed migration instructions
- Read [Patching Guide](patching-guide.md) to learn about patch workflows

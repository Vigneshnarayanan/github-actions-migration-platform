# Architecture

## System Overview

The GitHub Actions Migration Platform consists of several key components:

### Core Components

1. **CLI Interface** (`src/cli.js`)
   - Entry point for all commands
   - Handles command parsing and routing
   - Manages user input and output

2. **Commands** (`src/commands/`)
   - `analyze.js` - Application analysis for migration readiness
   - `migrate.js` - Legacy CI/CD to GitHub Actions conversion
   - `patch.js` - Application patching orchestration
   - `status.js` - Migration and patch status tracking

3. **Core Engine** (`src/core/`)
   - `patch-engine.js` - Main patching logic
   - Handles scanning, validation, and application of patches

4. **Utilities** (`src/utils/`)
   - `logger.js` - Structured logging
   - `config.js` - Configuration management

### Data Storage

- **Configurations** (`configs/`) - YAML files for each application
- **Patches** (`patches/`) - Patch templates and definitions
- **Reports** - Generated migration and patch reports

### GitHub Actions Workflows

- **migrate.yaml** - Main migration workflow
- **patch.yaml** - Automated patching workflow
- **ci.yaml** - Continuous integration for the platform itself

## Data Flow

```
User Command
    ↓
CLI Parser (cli.js)
    ↓
Command Handler (commands/*.js)
    ↓
Core Engine / ConfigManager
    ↓
Action & Report Generation
```

## Extensibility

The platform is designed to be extended:

- Add new patch types by extending `PatchEngine`
- Add new commands by creating files in `src/commands/`
- Add new utilities in `src/utils/`
- Add new workflows in `.github/workflows/`

# API Reference

## PatchEngine

### Class: PatchEngine

Main patching engine for scanning, validating, and applying patches.

#### Constructor
```javascript
const patchEngine = new PatchEngine();
```

#### Methods

##### scanForPatches(appName, type = 'dependency')

Scan an application for available patches.

**Parameters:**
- `appName` (string) - Name of the application
- `type` (string) - Patch type: 'dependency', 'security', 'version'

**Returns:** Promise<Array> - Array of patch objects

**Example:**
```javascript
const patches = await patchEngine.scanForPatches('my-app', 'dependency');
```

---

##### validatePatches(patches)

Validate patch objects for correctness.

**Parameters:**
- `patches` (Array) - Array of patch objects

**Returns:** Promise<Array> - Array of valid patch objects

**Example:**
```javascript
const validPatches = await patchEngine.validatePatches(patches);
```

---

##### applyPatches(appName, patches, dryRun = false)

Apply patches to an application.

**Parameters:**
- `appName` (string) - Name of the application
- `patches` (Array) - Array of validated patch objects
- `dryRun` (boolean) - If true, preview only

**Returns:** Promise<Array> - Array of patch results

**Example:**
```javascript
const results = await patchEngine.applyPatches('my-app', patches, false);
```

---

##### scanAndPatch(appName, options = {})

Complete scan and patch workflow.

**Parameters:**
- `appName` (string) - Name of the application
- `options.type` (string) - Patch type
- `options.dryRun` (boolean) - Preview mode

**Returns:** Promise<Object> - Patch operation result

**Example:**
```javascript
const result = await patchEngine.scanAndPatch('my-app', {
  type: 'security',
  dryRun: true
});
```

---

## ConfigManager

### Class: ConfigManager

Manages application configurations.

#### Constructor
```javascript
const configManager = new ConfigManager('./configs');
```

#### Methods

##### loadApplicationConfig(appName)

Load configuration for an application.

**Example:**
```javascript
const config = configManager.loadApplicationConfig('my-app');
```

---

##### saveApplicationConfig(appName, config)

Save configuration for an application.

**Example:**
```javascript
configManager.saveApplicationConfig('my-app', config);
```

---

##### listApplications()

List all configured applications.

**Example:**
```javascript
const apps = configManager.listApplications();
```

---

## Logger

Structured logging utility.

### Methods

- `logger.info(message)` - Info level log
- `logger.success(message)` - Success level log
- `logger.warning(message)` - Warning level log
- `logger.error(message)` - Error level log
- `logger.debug(message)` - Debug level log (requires DEBUG env var)

**Example:**
```javascript
logger.info('Starting migration');
logger.success('Migration completed');
```

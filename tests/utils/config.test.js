/**
 * Configuration loader tests
 */

describe('ConfigManager', () => {
  let ConfigManager;
  let configManager;

  beforeEach(() => {
    ConfigManager = require('../../src/utils/config');
    configManager = new ConfigManager('./tests/fixtures');
  });

  test('should initialize with base path', () => {
    expect(configManager.basePath).toBe('./tests/fixtures');
  });

  test('should list applications', () => {
    const apps = configManager.listApplications();
    expect(Array.isArray(apps)).toBe(true);
  });
});

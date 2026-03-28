/**
 * Configuration loader for applications
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const logger = require('./logger');

class ConfigManager {
  constructor(basePath = './configs') {
    this.basePath = basePath;
  }

  loadApplicationConfig(appName) {
    const configPath = path.join(this.basePath, `${appName}.yaml`);
    
    try {
      const fileContent = fs.readFileSync(configPath, 'utf8');
      const config = yaml.load(fileContent);
      logger.debug(`Loaded configuration for ${appName}`);
      return config;
    } catch (error) {
      logger.error(`Failed to load config for ${appName}: ${error.message}`);
      throw error;
    }
  }

  saveApplicationConfig(appName, config) {
    const configPath = path.join(this.basePath, `${appName}.yaml`);
    
    try {
      if (!fs.existsSync(this.basePath)) {
        fs.mkdirSync(this.basePath, { recursive: true });
      }
      
      const yamlContent = yaml.dump(config, { indent: 2 });
      fs.writeFileSync(configPath, yamlContent, 'utf8');
      logger.success(`Saved configuration for ${appName}`);
    } catch (error) {
      logger.error(`Failed to save config for ${appName}: ${error.message}`);
      throw error;
    }
  }

  listApplications() {
    try {
      if (!fs.existsSync(this.basePath)) {
        return [];
      }
      
      const files = fs.readdirSync(this.basePath);
      return files
        .filter(f => f.endsWith('.yaml'))
        .map(f => f.replace('.yaml', ''));
    } catch (error) {
      logger.error(`Failed to list applications: ${error.message}`);
      return [];
    }
  }
}

module.exports = ConfigManager;

/**
 * Status command - Check migration and patch status
 */

const logger = require('../utils/logger');
const ConfigManager = require('../utils/config');

async function checkStatus(appName = null) {
  try {
    const configMgr = new ConfigManager('./configs');
    
    if (appName) {
      logger.info(`Checking status for application: ${appName}`);
      const config = configMgr.loadApplicationConfig(appName);
      
      const status = {
        appName,
        migrationStatus: 'pending',
        lastUpdated: new Date().toISOString(),
        details: config,
      };
      
      console.log(JSON.stringify(status, null, 2));
      return status;
    } else {
      logger.info('Checking status for all applications');
      const apps = configMgr.listApplications();
      
      const statuses = apps.map(app => ({
        appName: app,
        migrationStatus: 'pending',
        lastUpdated: new Date().toISOString(),
      }));
      
      console.log(JSON.stringify(statuses, null, 2));
      return statuses;
    }
  } catch (error) {
    logger.error(`Status check failed: ${error.message}`);
    throw error;
  }
}

module.exports = { checkStatus };

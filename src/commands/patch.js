/**
 * Patch command - Apply patches to applications
 */

const logger = require('../utils/logger');
const PatchEngine = require('../core/patch-engine');

async function patchApplication(appName, options = {}) {
  logger.info(`Applying patches to application: ${appName}`);
  logger.info(`Patch type: ${options.type}`);
  
  if (options.dryRun) {
    logger.warning('DRY RUN MODE - Patches will be previewed only');
  }
  
  try {
    const patchEngine = new PatchEngine();
    
    const patchResult = await patchEngine.scanAndPatch(appName, {
      type: options.type,
      dryRun: options.dryRun,
    });

    logger.success(`Patch operation completed for ${appName}`);
    console.log(JSON.stringify(patchResult, null, 2));
    
    return patchResult;
  } catch (error) {
    logger.error(`Patch operation failed: ${error.message}`);
    throw error;
  }
}

module.exports = { patchApplication };

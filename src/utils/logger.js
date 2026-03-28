/**
 * Logger utility with consistent formatting
 */

const chalk = require('chalk');

const logger = {
  info: (message) => console.log(chalk.blue('ℹ'), message),
  success: (message) => console.log(chalk.green('✓'), message),
  warning: (message) => console.log(chalk.yellow('⚠'), message),
  error: (message) => console.error(chalk.red('✗'), message),
  debug: (message) => {
    if (process.env.DEBUG) {
      console.log(chalk.gray('🐛'), message);
    }
  },
};

module.exports = logger;

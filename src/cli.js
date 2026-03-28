#!/usr/bin/env node

/**
 * CLI entry point for GitHub Actions Migration Platform
 */

const { program } = require('commander');
const pkg = require('../package.json');

program
  .name('gapm')
  .description('GitHub Actions Migration Platform - Migrate legacy apps to GitHub Actions')
  .version(pkg.version);

program
  .command('analyze <app>')
  .description('Analyze a legacy application for migration readiness')
  .action(async (app) => {
    const { analyzeApplication } = require('./commands/analyze');
    await analyzeApplication(app);
  });

program
  .command('migrate <app> [target]')
  .description('Migrate an application to GitHub Actions')
  .option('--dry-run', 'Perform a dry run without making changes')
  .option('--override', 'Override existing configuration')
  .action(async (app, target, options) => {
    const { migrateApplication } = require('./commands/migrate');
    await migrateApplication(app, target, options);
  });

program
  .command('patch <app>')
  .description('Apply patches to an application')
  .option('--type <type>', 'Type of patch: dependency, security, version', 'dependency')
  .option('--dry-run', 'Preview patches without applying')
  .action(async (app, options) => {
    const { patchApplication } = require('./commands/patch');
    await patchApplication(app, options);
  });

program
  .command('status [app]')
  .description('Check migration status of application(s)')
  .action(async (app) => {
    const { checkStatus } = require('./commands/status');
    await checkStatus(app);
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

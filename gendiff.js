#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(`Comparing files: ${filepath1} vs ${filepath2}`);
  })
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.help();
}
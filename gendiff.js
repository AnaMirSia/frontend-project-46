#!/usr/bin/env node
const parseFile = require('./fileParser');
const { Command } = require('commander');
const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);
  console.log('File 1:', data1);
  console.log('File 2:', data2);
  })
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.help();
}
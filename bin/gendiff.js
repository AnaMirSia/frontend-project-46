#!/usr/bin/env node
import {parseJSON, genDiff} from '../Parse/fileParser.js'
import {Command }from 'commander'
const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
  const data1 = parseJSON(filepath1);
  const data2 = parseJSON(filepath2);
  const diff = genDiff(data1, data2);
  console.log(diff);
  })
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.help();
}
#!/usr/bin/env node
import { genDiff } from '../src/genDiff.js'
import { Command } from 'commander'
import parse from '../src/fileParser.js'
const program = new Command()

program
  .name('gendiff')
  .version('1.0.0', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const data1 = parse(filepath1)
    const data2 = parse(filepath2)
    const diff = genDiff(data1, data2)
    console.log(diff)
  })
program.parse(process.argv)

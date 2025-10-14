import { genDiff } from '../src/genDiff.js'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import parse from '../src/fileParser.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = (file) => path.join(__dirname, '..', '__fixtures__', file)
const readFile = (file) => fs.readFileSync(getFixturePath(file), 'utf-8')

// eslint-disable-next-line no-undef
test('genDiff correctly compares two identical JSON objects', () => {
  const expected = readFile('result.txt')
  const file1 = parse(getFixturePath('file1.json'))
  const file2 = parse(getFixturePath('file2.json'))
  expect(genDiff(file1, file2)).toEqual(expected)
})
// eslint-disable-next-line no-undef
test('genDiff correctly compares two identical YML objects', () => {
  const expected = readFile('result.txt')
  const file1 = parse(getFixturePath('file1.yml'))
  const file2 = parse(getFixturePath('file2.yml'))
  expect(genDiff(file1, file2)).toEqual(expected)
})

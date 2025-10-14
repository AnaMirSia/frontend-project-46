import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

export default function parse(filepath) {
  const fullPath = path.resolve(process.cwd(), '__fixtures__', filepath)
  const content = fs.readFileSync(fullPath, 'utf-8')
  const ext = path.extname(fullPath)
  if (ext === '.json') {
    return JSON.parse(content)
  }
  if (ext === '.yaml' || ext === '.yml') {
    return yaml.load(content)
  }
  throw Error('unknown format')
}

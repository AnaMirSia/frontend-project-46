const fs = require('fs');
const path = require('path');

const parseFile = (filePath) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  const content = fs.readFileSync(fullPath, 'utf-8');
  return JSON.parse(content);
};

module.exports = parseFile
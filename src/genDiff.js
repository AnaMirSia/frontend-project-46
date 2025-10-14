const genDiff = (config1, config2) => {
  const combinedKeys = new Set([...Object.keys(config1), ...Object.keys(config2)])
  const sortedArray = Array.from(combinedKeys).sort()
  const sortedSet = new Set(sortedArray)
  const result = {}
  sortedSet.forEach((key) => {
    if (config1[key] === config2[key]) {
      result[key] = config1[key]
    }
    else if (!(key in config1)) {
      result[`+ ${key}`] = config2[key]
    }
    else if (!(key in config2)) {
      result[`- ${key}`] = config1[key]
    }
    else {
      result[`- ${key}`] = config1[key]
      result[`+ ${key}`] = config2[key]
    }
  })
  return result
}

export { genDiff }

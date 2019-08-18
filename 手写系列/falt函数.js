function flatten(arr, result = []) {
  for (let item of arr) {
    if (Array.isArray(item)) {
      flatten(item, result)
    }
    else {
      result.push(item)
    }
  }
  return result
}

function flat(arr) {
  return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flat(b) : b), [])
}

console.log(flatten([[6, [1, 2], 4, 5], 3]))


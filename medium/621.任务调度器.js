/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let hashMap = {}
  for (let i = 0; i < tasks.length; i++) {
    if (!hashMap[tasks[i]]) {
      hashMap[tasks[i]] = [0, 0]
    }
    hashMap[tasks[i]][0]++
  }
  let count = tasks.length
  let res = 0
  while (count > 0) {
    let max = null
    for (let key in hashMap) {
      if (hashMap[key][1] == 0 && hashMap[key][0] > 0) {
        if (!max || hashMap[key][0] > max[0]) {
          max = hashMap[key]
        }
      } else if (hashMap[key][0] > 0 && hashMap[key][1] > 0) {
        hashMap[key][1]--
      }
    }
    if (max) {
      max[0]--
      max[1] = n
      count--
    }
    res++
  }
  return res
}
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2))

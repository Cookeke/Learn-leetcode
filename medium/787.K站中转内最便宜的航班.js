/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, K) {
  let dp = new Array(n).fill(Infinity)
  dp[src] = 0
  for (let i = 0; i < K + 1; i++) {
    const arr = [].concat(dp)
    for (let i = 0; i < flights.length; i++) {
      let iDest = flights[i][1]
      let iSrc = flights[i][0]
      let iCost = flights[i][2]
      arr[iDest] = Math.min(arr[iDest], dp[iSrc] + iCost)
    }
    dp = arr.concat([])
  }
  return dp[dst] === Infinity ? -1 : dp[dst]
};
console.log(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1))

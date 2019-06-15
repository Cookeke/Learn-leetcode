/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0]
  const result = []
  for (let i = 0; i < prices.length; i++) {
    min = prices[i] < min ? prices[i] : min
    result[i] = prices[i] - min
  }
  const res = result.sort((a, b) => a - b).pop()
  return res > 0 ? res : 0
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
console.log(maxProfit([1, 2, 4, 7, 11]))

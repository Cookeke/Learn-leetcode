/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0
  const count = (a, b) => a >= b ? 0 : b - a
  for (let i = 1; i < prices.length; i++) {
    result += count(prices[i - 1], prices[i])
  }
  return result
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([1, 2, 3, 4, 5]))
console.log(maxProfit([7, 6, 4, 3, 1]))

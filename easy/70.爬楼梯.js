/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // const dp = (n) => {
  //   if (n === 1) return 1
  //   if (n === 2) return 2
  //   return dp(n - 1) + dp(n - 2)
  // }
  // return dp(n)

  const arr = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
};
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(44))

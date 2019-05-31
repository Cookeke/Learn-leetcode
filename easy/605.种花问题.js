/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0
  for (let i = 0, len = flowerbed.length; i < len; i++) {
    if (flowerbed[i] === 0) {
      if (i === 0) {
        if (len === 1) {
          count += Number(flowerbed[0] === 0)
        } else if (flowerbed[1] === 0) {
          count++
          i++
        }
      } else if (i === len - 1 && flowerbed[len - 2] === 0) {
        count++
      } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        count++
        i++
      }
    }
  }
  return count >= n
}
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1))
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2))
console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2))
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2))
console.log(canPlaceFlowers([0], 1))
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 2))
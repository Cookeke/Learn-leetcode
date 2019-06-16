/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  return (x ^ y).toString(2).split('').filter(Number).length
  // let binaryx = x.toString(2)
  // let binaryy = y.toString(2)
  // const length = Math.max(binaryx.length, binaryy.length)
  // binaryx = Array(length - binaryx.length).fill('0').concat(binaryx.split(''))
  // binaryy = Array(length - binaryy.length).fill('0').concat(binaryy.split(''))
  // let count = 0
  // for (let i = 0; i < length; i++) {
  //   binaryx[i] !== binaryy[i] && count++
  // }
  // return count
};
console.log(hammingDistance(1, 4))

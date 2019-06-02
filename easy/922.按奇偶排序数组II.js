/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  if (A.length > 20000) return []
  // let odd = []
  // let even = []
  // A.forEach(item => {
  //   if (item % 2 === 1) {
  //     odd.push(item)
  //   } else {
  //     even.push(item)
  //   }
  // })
  // let arr = []
  // even.forEach((item, index) => {
  //   arr.push(item, odd[index])
  // })
  // return arr
  let odd = 1, even = 0, r = []
  A.forEach(item => {
    if (item % 2 === 1) {
      r[odd] = item
      odd += 2
    } else {
      r[even] = item
      even += 2
    }
  })
  return r
};
console.log(sortArrayByParityII([4, 2, 5, 7]))
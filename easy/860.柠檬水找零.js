/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  const pocket = { five: 0, ten: 0};
  for (let i = 0; i < bills.length; i++) {
    switch (bills[i]) {
      case 5:
        pocket.five += 1
        break
      case 10:
        if (pocket.five > 0) {
          pocket.five--
          pocket.ten++
          break
        } else {
          return false
        }
      case 20:
        if (pocket.five > 0 && pocket.ten > 0) {
          pocket.five--
          pocket.ten--
        } else if (pocket.five > 2) {
          pocket.five -= 3
        } else {
          return false
        }
    }
  }
  return true
};
console.log(lemonadeChange([5, 5, 5, 10, 20]))
console.log(lemonadeChange([5, 5, 10]))
console.log(lemonadeChange([10, 10]))
console.log(lemonadeChange([5, 5, 10, 10, 20]))

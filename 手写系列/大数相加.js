const a = '123456789';
const b = '11111111111111111111111111';

function add(a, b) {
  var temp = 0
  var res = ''
  a = a.split('').map(Number)
  b = b.split('').map(Number)
  while (a.length || b.length || temp) {
    temp += a.pop() + b.pop()
    res = (temp % 10) + '' + res
    temp = Number(temp > 9)
  }
  return res
}

console.log(add(a, b));
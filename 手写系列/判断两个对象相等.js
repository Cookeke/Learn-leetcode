function equals(x, y) {
  var f1 = x instanceof Object;
  var f2 = y instanceof Object;
  if (!f1 || !f2) {
    return x === y
  }
  if (Object.keys(x).length !== Object.keys(y).length) {
    return false
  }
  for (var p in x) {
    var a = x[p] instanceof Object;
    var b = y[p] instanceof Object;
    if (a && b) {
      equals(x[p], y[p])
    } else if (x[p] != y[p]) {
      return false;
    }
  }
  return true;
}
console.log(equals(
  { a: 1, b: 2 },
  { a: 1, b: { c: 4 } }
))
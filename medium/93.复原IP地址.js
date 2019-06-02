/**
 * @param sing} s
 * @return sing[]}
 */
var restoreIpAddresses = function (s) {
  let r = []
  let search = (cur, sub) => {
    if (sub.length > 12) return
    if (cur.length === 4 && cur.join('') === s) {
      r.push(cur.join('.'))
    } else {
      for (let i = 0, len = Math.min(3, sub.length), tmp; i < len; i++) {
        tmp = sub.substr(0, i + 1)
        if (tmp - 256 < 0) {
          search(cur.concat([tmp * 1]), sub.substr(i + 1))
        }
      }
    }
  }
  search([], s)
  return r
};
console.log(restoreIpAddresses("25525511135"))
console.log(restoreIpAddresses("010010"))

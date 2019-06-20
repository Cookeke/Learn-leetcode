function match(s, pattern) {
  let reg = new RegExp("^" + pattern + "$")
  return reg.test(s)
}
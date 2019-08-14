// call
const arr = []
Function.prototype.myCall = function (o) {
  // 创建临时对象用来储存call的第一个函数
  const o = o || window
  // 供法则 给临时对象添加需要call的方法
  o.fn = this
  // 获取后面的参数 参数为平铺模式
  const args = [...arguments].slice(1)
  // 因为下一步要删除临时对象中需要继承的方法 所以临时存储结果到内存中
  const res = o.fn(...args)
  // 删除临时对象上的方法
  delete o.fn
  return res
}
Array.prototype.push.myCall(arr, '123', '234')

// apply
const arr2 = [1, 2, 3, 4]
Function.prototype.myApply = function (o) {
  // 创建临时对象用来储存apply的第一个函数
  const o = o || window
  // 供法则 给临时对象添加需要apply的方法
  o.fn = this
  // 获取后面的参数 参数为聚合模式
  const args = [...arguments][1]
  // 判断args是否有参数
  const res = args ? o.fn(...args) : o.fn()
  // 删除临时对象上的方法
  delete o.fn
  return res
}
Array.prototype.pop.myApply(arr2)
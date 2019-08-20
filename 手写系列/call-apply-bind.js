// call
const arr = []
Function.prototype.myCall = function (context) {
  const context = context || window
  context.fn = this
  const args = [...arguments].slice(1)
  const result = context.fn(...args)
  delete context.fn
  return result
}
Array.prototype.push.myCall(arr, '123', '234')

// apply
const arr2 = [1, 2, 3, 4]
Function.prototype.myApply = function (context) {
  const context = context || window
  context.fn = this
  const args = [...arguments][1]
  const res = args ? context.fn(...args) : context.fn()
  delete context.fn
  return res
}
Array.prototype.pop.myApply(arr2)

Function.prototype.myBind = function(context) {
  const that = this;
  // 保留之前的参数，为了下面的参数拼接
  const args = [...arguments].slice(1);
  return function F() {
    // 如果被new创建实例，不会被改变上下文！
    if (this instanceof F) {
      return new that(...args, ...arguments);
    }
    // args.concat(...arguments): 拼接之前和现在的参数
    // 注意：arguments是个类Array的Object, 用解构运算符..., 直接拿值拼接
    return that.apply(context, args.concat(...arguments));
  };
};
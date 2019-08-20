// 防抖函数
const debounce = (fn, delay = 1000) => {
  let timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}
// 按钮提交场景：防止多次提交按钮，只执行最后提交的一次
// 服务端验证场景：表单验证需要服务端配合，只执行一段连续的输入事件的最后一次，还有搜索联想词功能类似


// 节流函数
const throttle = (fn, delay = 1000) => {
  let flag = true;
  return function () {
    if (!flag) return
    flag = false
    setTimeout(() => {
      fn.apply(this, arguments)
      flag = true
    }, delay)
  };
};

// 拖拽场景：固定时间内只执行一次，防止超高频次触发位置变动
// 缩放场景：监控浏览器resize
// 动画场景：避免短时间内多次触发动画引起性能问题
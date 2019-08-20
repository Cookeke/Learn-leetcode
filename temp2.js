const obj = {
  value: 1,
  count() {
    return this.value--
  }
}
console.log(
  obj.count() === obj.count() + 1
)
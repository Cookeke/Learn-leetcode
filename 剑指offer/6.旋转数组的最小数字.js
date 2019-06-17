function minNumberInRotateArray(rotateArray) {
  if (rotateArray.length < 1) return 0
  return Math.min(...rotateArray)
}
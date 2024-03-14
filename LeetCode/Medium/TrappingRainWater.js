// Trapping Rain Water

var trap = function (height) {
  const right = []
  const left = []
  const left2 = []
  const minArray = []
  const resultArray = []
  let result = 0
  let rightMax = height[0]
  let leftMax = height[height.length - 1]
  for (let i = 0; i < height.length; i++) {
    if (height[i] >= rightMax) {
      right.push(height[i])
      rightMax = height[i]
    } else {
      right.push(rightMax)
    }
  }

  for (let i = height.length - 1; i >= 0; i--) {
    if (height[i] >= leftMax) {
      left.push(height[i])
      leftMax = height[i]
    } else {
      left.push(leftMax)
    }
  }

  for (let i = height.length - 1; i >= 0; i--) {
    const valueAtIndex = left[i]
    left2.push(valueAtIndex)
  }

  for (let i = 0; i < height.length; i++) {
    if (left2[i] >= right[i]) {
      minArray.push(right[i])
    } else {
      minArray.push(left2[i])
    }
  }

  for (let i = 0; i < height.length; i++) {
    let min = minArray[i] - height[i]
    resultArray.push(min)
  }

  for (let i = 0; i < resultArray.length; i++) {
    result = result + resultArray[i]
  }

  return result
}

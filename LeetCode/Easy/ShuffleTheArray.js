// Shuffle the Array

var shuffle = function (nums, n) {
  const len = nums.length
  const result = []
  let i = 0
  let j = n
  while (j < len) {
    result.push(nums[i])
    result.push(nums[j])
    i++
    j++
  }
  return result
}

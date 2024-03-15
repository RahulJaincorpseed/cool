// Kadane's Algorithm

class Solution {
  //Function to find the sum of contiguous subarray with maximum sum.
  maxSubarraySum(arr, N) {
    // code here
    let sum = 0
    let maxSum = Number.NEGATIVE_INFINITY
    for (let i = 0; i < N; i++) {
      sum = sum + arr[i]
      if (maxSum < sum) {
        maxSum = sum
      }
      if (sum < 0) {
        sum = 0
      }
    }
    return maxSum
  }
}

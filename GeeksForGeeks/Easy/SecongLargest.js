// Second Largest

class Solution {
  print2largest(arr, n) {
    //code here
    let second = 0
    let max = arr[0]
    for (let i = 0; i < n; i++) {
      if (arr[i] > max) {
        max = arr[i]
      }
    }

    for (let i = 0; i < n; i++) {
      if (arr[i] === max) {
        continue
      }
      if (second < arr[i]) {
        second = arr[i]
      }
    }

    if (second === 0) {
      return -1
    }

    return second
  }
}

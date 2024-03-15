// Find Transition Point

class Solution {
  transitionPoint(arr, n) {
    //code here

    let left = 0
    let right = n - 1
    let mid = parseInt((left + right) / 2)

    if (arr[0] === 1) {
      return 0
    }

    if (arr[n - 1] === 0) {
      return -1
    }

    while (left <= right) {
      if (arr[mid] === 1 && arr[mid - 1] === 0 && arr[mid + 1] === 1) {
        return mid
      } else if (arr[mid] === 0) {
        left = mid + 1
      } else {
        right = mid - 1
      }
      mid = parseInt((left + right) / 2)
    }
    return -1
  }
}

// Searching a number

// Program of Searching a Number

class Solution {
  search(arr, n, k) {
    // code here
    // let len = arr.length;
    for (let i = 0; i < n; i++) {
      if (arr[i] === k) {
        return i + 1
      }
    }
    return -1
  }
}

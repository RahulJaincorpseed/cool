// Cyclically rotate an array by one
// Program of Cyclic Rotate By One

class Solution {
  rotate(arr, n) {
    //code here
    let last = arr.pop()
    arr.unshift(last)

    return arr
  }
}

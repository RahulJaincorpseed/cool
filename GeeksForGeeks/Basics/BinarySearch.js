// Program of Binary Search 

class Solution {
    binarysearch(arr, n, k) {
        // code here
        let left = 0
        let right = n - 1
        let mid = parseInt((left + right) / 2)

      while (left <= right) {
        if (arr[mid] === k) {
          return mid;
        }
    
        if (arr[mid] > k) {
          right = mid - 1
        } else {
          left = mid + 1
        }
    
        mid = parseInt((left + right) / 2)
      }
    
      return -1;
        }
}

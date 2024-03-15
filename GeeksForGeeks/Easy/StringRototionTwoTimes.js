// Check if string is rotated by two places

class Solution {
  //Function to check if a string can be obtained by rotating
  //another string by exactly 2 places.
  isRotated(str1, str2) {
    // code here\
    let len2
    let len3

    if (str1.length !== str2.length) {
      return 0
    }

    for (let i = 0; i < str1.length; i++) {
      len2 = parseInt((str2.length - 2 + i) % str2.length)
      len3 = parseInt((2 + i) % str2.length)
      if (str1.charAt(i) === str2.charAt(len2)) {
        continue
      } else if (str1.charAt(i) === str2.charAt(len3)) {
        continue
      } else {
        return 0
      }
    }

    return 1
  }
}

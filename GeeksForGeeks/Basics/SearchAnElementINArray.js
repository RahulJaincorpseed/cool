// Search an Element in an array

// Program of Search an Element in an Array

class Solution {
    search(arr, N, X) {
        // write your code here
        for(let i=0; i<N;i++){
            if(arr[i] === X){
                return i;
            }
        }
        return -1;
    }
}
// Program of Largest Element in an Array

class Solution {
    largest(arr, n) {
        // write your code here
        let max = arr[0];
        let len = arr.length;
        
        if(arr.length === 1){
            return max;
        }
        
        for(let i=0;i<len; i++){
            if(arr[i] > max){
                max = arr[i]
            }
        }
        
        return max;
        
    }
}
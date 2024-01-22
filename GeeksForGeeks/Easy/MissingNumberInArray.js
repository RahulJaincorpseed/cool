
// Program of Missing Number in an Array

class Solution{
    missingNumber(array,n){
        //code here
        let sum = 0;
        let newSum = parseInt((n*(n+1))/2);
        let result;
        for(let i=0;i<n-1;i++){
            sum = sum + array[i];
        }
        result = newSum - sum;
        return result
    }
}
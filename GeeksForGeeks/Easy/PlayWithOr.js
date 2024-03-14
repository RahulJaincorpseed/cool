// Play With OR

class Solution{
    game_with_number(arr,n){
        //code here
        for(let i=0;i<n-1;i++){
            arr[i] = arr[i] | arr[i+1];
        }
        return arr
    }
}
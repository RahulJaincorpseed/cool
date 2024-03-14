// Find minimum and maximum element in an array

// Program of find Min and Max Element in an Array

class Solution{
    getMinMax(arr,n){
        //code here
        let min = arr[0];
        let max = arr[0];
        let len = arr.length;
        for(let i=0;i<len;i++){
            if(arr[i] < min){
                min = arr[i];
            }
          if(arr[i] > max){
                max = arr[i]; 
            }
            
        }
        
        
        return [min, max]
        
    }
}

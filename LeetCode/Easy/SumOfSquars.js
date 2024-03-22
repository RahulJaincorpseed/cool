// Sum Of Squars

var sumOfSquares = function(nums) {
    let len = nums.length;
    let result = 0;
    for(let i=0;i<len;i++){
        if((len%(i+1))===0){
            result += nums[i]**2;
        }
    }
    return result;
};
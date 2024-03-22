// 268. Missing Number

var missingNumber = function(nums) {
    let len = nums.length;
    let sum = 0;
    let total = parseInt(len*(len+1)/2)
    if(!(nums.includes(0))){
        return 0
    }
    for(let i=0;i<len;i++){
        sum += nums[i];
    }
    
    return total - sum

};
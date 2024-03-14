// Running Sum of 1d Array

var runningSum = function(nums) {
    let sum = 0;
    let result = [];
    if(nums.length === 1){
        return nums;
    }
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
        result.push(sum);
    }
    return result;
};
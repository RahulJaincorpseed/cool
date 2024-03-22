// Left and Right Sum Differences

var leftRightDifference = function(nums) {
    const len = nums.length;
    const leftArr = [];
    const rightArr = [];
    let leftSum = 0;
    let rightSum = 0;
    leftArr.push(0);
    let result = 0;
    let resultArr = [];

    for(let i=0; i<len -1;i++){
         leftSum += nums[i];
        leftArr.push(leftSum)
    }  
    for(let i=len-1; i>0;i--){
        rightSum += nums[i]; 
        rightArr.push(rightSum)
    }  
    rightArr.reverse()
    rightArr.push(0)

    for(let i=0;i<len;i++){
        result = Math.abs(leftArr[i] - rightArr[i]);
        resultArr.push(result)
    }

    return resultArr
    
    
}; 
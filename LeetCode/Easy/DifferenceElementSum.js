// Difference Between Element Sum and Digit Sum

var differenceOfSum = function (nums) {
    const data = nums.join('+');
    let charSum = 0;
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        if (data.charAt(i) === '+') {
            continue;
        }
        else {
            charSum += Number(data.charAt(i))
        }
    }
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
    }

    return Math.abs(charSum - sum)

}

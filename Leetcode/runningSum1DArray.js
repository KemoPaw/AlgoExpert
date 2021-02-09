//https://leetcode.com/problems/running-sum-of-1d-array/submissions/

var runningSum = function(nums) {
    let sult = [nums[0]];
    
    for (let i = 1; i < nums.length; i++){
        let temp = sult.slice(-1)[0]  + nums[i];
        sult.push(temp);
    }
    return sult;
    
};
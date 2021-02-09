//https://leetcode.com/problems/degree-of-an-array/submissions/
var findShortestSubArray = function(nums) {
    
    let countObj = {}; //Object that keeps track of freq. of each ele in nums
    let allNums = []; //Array to inter. through the countObj with
    
    for (let i = 0; i < nums.length; i ++){
        if(countObj[nums[i]] === undefined){
            countObj[nums[i]] = 1;
            allNums.push(nums[i]);
        }
        else{
            countObj[nums[i]] += 1;
        } 
    }
    
    let mostCommonNum = [];
    let commonCount = 0;
    
    //grab the most common nums, and replace the mostCommonNum array if we find a   higher commonCount amount
    
    for(let j = 0; j < allNums.length; j ++){
        if(countObj[allNums[j]] > commonCount){
            commonCount =  countObj[allNums[j]];
            mostCommonNum = [allNums[j]];
        } else if (countObj[allNums[j]] === commonCount){
            mostCommonNum.push(allNums[j]);
        }
    }
    
    //we now know WHICH nums are the most common
    
    // console.log(mostCommonNum)
    
    let degreeNum = nums.length;
    
    for (let k = 0; k < mostCommonNum.length; k++){
            let firstIdx = nums.indexOf(mostCommonNum[k]);
            // console.log("Hello")
            let lastIdx = nums.lastIndexOf(mostCommonNum[k]);
            // console.log(firstIdx, lastIdx)
            let tempDegreeNum = lastIdx - firstIdx;
        if(tempDegreeNum < degreeNum){
            degreeNum = tempDegreeNum;
        }
    }
    

    // console.log(degreeNum);
    return degreeNum + 1;
    
};
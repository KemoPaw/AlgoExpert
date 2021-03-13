var thirdMax = function(nums) {
    
    let numSet = [...new Set(nums)];
    
    // console.log(numSet)
    let sorted = numSet.sort((a,b) => b -a);
    
    if(sorted.length < 3) return sorted[0];
    
    // console.log(sorted);
    
    return sorted[2];
};
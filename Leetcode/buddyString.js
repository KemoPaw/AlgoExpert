var buddyStrings = function(a, b) {
    //go through string "a", check to see if the letters match using a for loop
    //if the letters do NOT match, check ot see if the instance does exist in a substring of the other string at the current index to the last index
    //switch letters of the indices and keep going
    //if you find another non-match return false
    //else you go through the rest of the string and return true
    
    if(!a || !b || b.length !== a.length ) return false;
    
    if(a === b){
        
        var currCount = {};
        
        for(let i = 0; i < a.length; i++){
            if(currCount[a[i]] === undefined){
                currCount[a[i]] = 0;
            }
            currCount[a[i]] += 1;
        }
        
        // if(Object.values(currCount).sort((a,b) => b - a)[0] > 1) return true;

        var currCountValues = Object.values(currCount);
        
        for(let j = 0; j < currCountValues.length; j ++){
            if(currCountValues[j] > 1) return true;
        }
        return false;
        
    }
    
    
    var firstOccur = -1;
    var secOccur = -1;
    
    
    for(let i = 0; i < a.length; i ++){
        if(a[i] !== b[i]){
            if(firstOccur === -1){
                firstOccur = i;
            }
            else if(secOccur === -1){
                secOccur = i;
            }
            else{
                return false;
            }
        }
    }
    
    return (secOccur !== -1 && a[secOccur] === b[firstOccur] && a[firstOccur] === b[secOccur]) ? true: false;
    
};

//time complexity is n * logn  due to .sort on line 21;
//
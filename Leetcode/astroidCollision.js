// Input:
// asteroids = [1, 2, 3,-3,4,-2] 
// Output = [1, 2, 4] 

// Pos = [1, 2, 3, 4] //moving right
// Neg = [-3, -2] //moving left

// [1, 2 ,4];

// [-1, -4, 2, 7, 8, -2, -5, 7, 2, -4];
// [-1, -4, 2, 7, 8, 7, -4];
// [-1, -4, 2, 7, 8, 7] === final result;

// Pseudo coding: 
// Make a for loop in the beginning to extract all “negative” ints on the left side if they are there.
// Return rest of input arr without them
// And upon final return just [] + [] (add them);
// Take in the original Array for loop // for (let i = 1) let result = arr[0]
// If they are negative && result[i - 1] < 0;
// Push element to the result;
// If they are positive && result[i - 1] > 0;
// Push that element to the end of result;

// If they are positive && result[i - 1] < 0;
// Let leftEle = result[i -1];
// Let rightEle = result[i];
// If (Math.abs(leftEle) < Math.abs(rightEle))
// Result[i - 1] = rightEle;
// else() // remove that leftEle from a possibility of being checked again;

function astroidCrash(arr){
    let leftResult = [];
    let result = [];
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] < 0){
            leftResult.push(arr[i])
        }
        else{
            result = arr.slice(i);
            break;
        }
    }
    let finalResult = (result.length > 0) ?  [result[0]] : [];
    
    let button = true;
    while(button){
        button = false;
        for(let j = 1; j < result.length; j ++){
            let leftNum = result[j -1];
            let rightNum = result[j];
            if(result[j] < 0 && leftNum < 0){
                finalResult.push(result[j]);
            }
            else if (result[j] > 0 && leftNum > 0){
                finalResult.push(result[j]);
            }
        }
    }
    return leftResult.concat(result);

}

console.log(astroidCrash([-1, -4, 2, 7, 8, -2, -5, 7, 2, -4]));

///**

var asteroidCollision = function(asteroids) {
    let leftResult = [];
    let rightArr = [];
    
    for(let i = 0; i < asteroids.length; i ++){
        if(asteroids[i] < 0){
            leftResult.push(asteroids[i])
        }
        else{
            rightArr = asteroids.slice(i);
            break;
            }
    }
    
    // console.log(leftResult);
    // console.log(rightArr);
    
    let button = true;
    let rightResult = [rightArr[0]];
    let rightArrCopy = rightArr;
    // console.log(rightResult);
    
    if(rightArr[0] > rightArr[1] && Math.abs(rightArr[0]) === Math.abs(rightArr[1]))    {
       return leftResult; 
    }
    
    while(button){
        button = false;
        rightArr = rightArrCopy;
        for(let i = 1; i < rightArr.length; i ++){
            let prevNum = rightArr[i - 1];
            let currNum = rightArr[i];
            if(prevNum > 0 && currNum > 0){
                rightResult.push(rightArr[i]);
            }
            else if(prevNum < 0 && currNum < 0){
                rightResult.push(rightArr[i]);
            }
            else if (Math.abs(currNum) < Math.abs(prevNum)){
                rightArrCopy.splice(i, 1);
                button = true;
            }
            else if (Math.abs(currNum) > Math.abs(prevNum)){
                rightArrCopy.splice(i + 1, 1);
                button = true;
            }
            else if (Math.abs(currNum) === Math.abs(prevNum)){
                rightArrCopy[i] = 0;
                rightArrCopy[i - 1] = 0;
                button = true;
            }
        }
    }
    // console.log(leftResult);
    // console.log(rightResult);
    // console.log(rightArrCopy);
    return leftResult.concat(rightArrCopy)
    
};

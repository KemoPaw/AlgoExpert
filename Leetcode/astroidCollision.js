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
        for(let j = 1; j < result.length; j ++){
            let leftNum = result[i -1];
            let rightNum = result[i];
            if(result[i] < 0 && leftNum < 0){

            }
        }
    }
    return leftResult.concat(result);

}

console.log(astroidCrash([-1, -4, 2, 7, 8, -2, -5, 7, 2, -4]));

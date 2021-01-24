//Solution 1: This is the most common sollution but the time complexity is n exponenet 2.

function twoNumberSum(array, targetSum) {
  // Write your code here.
	let result = [];
	
	for (let i = 0; i < array.length - 1; i ++){
		for(let ii = i + 1; ii < array.length; ii ++){
			if(array[i] + array[ii] === targetSum){
					result.push(array[i], array[ii]);
			}

		}
		
	}
	return result;
}

//Solution 2:  This is the common sollution but with the time complexity is n.

function twoNumberSum(array, targetSum) {
  // Write your code here.
	let newObj = {};
	
	for(let i = 0; i < array.length; i++){
		let compNum = targetSum - array[i];
		let currNum = array[i];
		if(newObj[compNum]){
				return [currNum, compNum]
		}
		newObj[currNum] = true;
	}
	return[];
}

//Solution 2:  This is the common sollution but with the time complexity is n(log N).

function twoNumberSum(array, targetSum) {
  // Write your code here.
	array.sort(function(a, b) {
		return a - b;
	}
	);
	
	let leftNum = 0; //grabs smallest number
	let rightNum = array.length - 1; //grabs largest number
	while (leftNum < rightNum){
			let currentSum = array[leftNum] + array[rightNum];
			
			if(currentSum === targetSum){
					return[array[leftNum], array[rightNum]]
			}
			else if(currentSum > targetSum){
					rightNum -= 1;
			}
			else if(currentSum < targetSum){
					leftNum += 1;
				// console.log(leftNum);
			}
	}
	return [];
}


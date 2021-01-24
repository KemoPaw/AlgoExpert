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


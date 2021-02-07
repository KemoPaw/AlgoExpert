function leastCountArray(arr){ //[3,5,5,5,2,2,7,7,7,7]

let countObj = {3: 1, 5: 3, 2: 2, 7 : 4};

	for (let i = 0; i < arr.length; i ++){
		if(countObj[arr[i]] === undefined) {
			countObj[arr[i]] = 1;
	} 
		else {
			countObj[arr[i]] += 1;
		}
}


let countObjValues = Object.values(countObj).sort((a, b) => b - a);
//[1, 3, 2, 4]; ===> [4, 3, 2, 1];

//[1, 1, 1, 1, 1, 1]
let tempCount = 0;
let count = 0;

for (let j = 0; j < countObjValues.length; j ++){ //1

	tempCount += countObjValues[j]; // tempCount = 3;
	count ++; // count = 3
	
	if(tempCount >= (arr.length / 2)){ // 3 >= 3;
		return count;
}
}

return count;

}

Function leastCountArray(arr){ //[3,5,5,5,2,2,7,7,7,7]

Let countObj = {3: 1, 5: 3, 2: 2, 7 : 4};

For (let i = 0; i < arr.length; i ++){
	if(countObj[arr[i]] === undefined) {
		countObj[arr[i]] = 1;
} 
Else {
	countObj[arr[i]] += 1;
}
}


Let countObjValues = Object.values(countObj).sort((a, b) => b - a);
//[1, 3, 2, 4]; ===> [4, 3, 2, 1];

//[1, 1, 1, 1, 1, 1]
Let tempCount = 0;
Let count = 0;

For (let j = 0; j < countObjValues.length; j ++){ //1

	tempCount += countObjValues[j]; // tempCount = 3;
Count ++; // count = 3
	
	if(tempCount >= (arr.length / 2)){ // 3 >= 3;
		Return count;
}
}

Return count;

}

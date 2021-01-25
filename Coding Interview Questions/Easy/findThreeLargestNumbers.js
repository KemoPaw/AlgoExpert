

function findThreeLargestNumbers(array) {
  // Write your code here.
	let largeThree = [array[0], array[1], array[2]]; //grab first 3 numbers of the input array;
	largeThree.sort((a, b) => a -b); //sorted from lowest -> greatest
	
	// return largeThree;
	
	for(let i = 3; i <= array.length - 1; i ++){
			if(array[i] >= largeThree[2]){ //shift from the largest number;
					largeThree[0] = largeThree[1];
					largeThree[1] = largeThree[2];
					largeThree[2] = array[i];
			}
			else if(array[i] >= largeThree[1] && array[i] < largeThree[2]){
					largeThree[0] = largeThree[1];
					largeThree[1] = array[i];
			}
			else if(array[i] >= largeThree[0]){
						largeThree[0] = array[i];
			}
		
		// largeThree.sort((a, b) => a -b);
		console.log(largeThree);
	}
	return largeThree;
}
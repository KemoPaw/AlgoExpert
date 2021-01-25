//Solution 1: This is a solution with the time complexity is n.


function bubbleSort(array) {
  // Write your code here.
	let sorted = false;
	let counter = 0;
	
	while(!sorted){
		sorted = true;
		for(let i = 0; i < array.length - 1 - counter; i ++){
				if (array[i] > array[i + 1]){
					let temp = array[i + 1];
					array[i + 1] = array[i];
					array[i] = temp;
					sorted = false;
				}
		}
		counter++;
	}
	return array;
}
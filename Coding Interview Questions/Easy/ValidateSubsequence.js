//Solution 1: This is a solution with the time complexity is n.

function isValidSubsequence(array, sequence) {
  // Write your code here.
	let count = 0;
	for(let i = 0; i < array.length; i ++){
		if(array[i] === sequence[count]){
			count += 1
		}
		if (count === sequence.length){
				return true;
		}
	}
	return false;
}

//Solution 2: This is a solution with the time complexity is n.


function isValidSubsequence(array, sequence) {
  // Write your code here.
	let arrIdx = 0;
	let seqIdx = 0;
	while(arrIdx < array.length && seqIdx < sequence.length){
			if(array[arrIdx] === sequence[seqIdx]){
				seqIdx += 1;
			}
			arrIdx += 1;
	}
	return seqIdx === sequence.length;
}
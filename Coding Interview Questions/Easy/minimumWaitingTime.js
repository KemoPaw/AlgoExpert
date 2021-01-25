

//Solution 1: This is a solution with the time complexity is (nLogn) time.

function minimumWaitingTime(queries) {
  // Write your code here.
	queries.sort((a,b) => a -b);
	let totalTime = 0;
	
	for(let i = 0; i < queries.length ; i ++){
			let lastTime = queries[i];
			let queriesLeft = queries.length - (i + 1); //lets you know how many times to multiply the "current" query by
			totalTime += lastTime * queriesLeft; 
	}
	return totalTime;
}
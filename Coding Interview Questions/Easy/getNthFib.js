//Solution 1: This is a solution with the time complexity is 2 ^ n.

function getNthFib(n) {
  // Write your code here.
	if (n === 1){return 0};
	if (n === 2){return 1};
	
	return getNthFib(n - 1) + getNthFib(n - 2);
}

//Solution 2: This is a solution with the time complexity is n.


function getNthFib(n, cache = {1:0, 2: 1 }) {
  // Write your code here.
	if (n in cache){
			return cache[n];
	}
	else{
			cache[n] = getNthFib(n -1, cache) + getNthFib(n -2, cache); //called recursion 
			return cache[n];
	}
}

//Solution 3: This is a solution with the time complexity is n.


function getNthFib(n) {
  // Write your code here.
	let prevNums = [0, 1];
	let counter = 3;
	while(counter <= n){
		let nextNum = prevNums[0] + prevNums[1];
		prevNums[0] = prevNums[1];
		prevNums[1] = nextNum;
		counter += 1;
		
	}
	return (n > 1) ? prevNums[1] : prevNums[0];
}

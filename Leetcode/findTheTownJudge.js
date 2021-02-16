// https://leetcode.com/problems/find-the-town-judge/

// Pseudo code:
// (n = Int, trust = Nested Arr); //[[3, 4]]  
// (Trust.length < n - 2 || trust.length === 0) return -1;
// Build an obj, where key = villager; value = arr of trust
// Iterate through n, and see what is “missing”;
// See if I find that value and if so, check if all values of the obj contains the “maybe town judge”;
// Return town judge;

Function findTownJud(n, arr){ 
// (n = 4, arr = [[1,3],[1,4],[2,3],[2,4],[4,3]])

	if(arr.length === 0 || array.length < n -2 ) return -1;
	
	Let trustObj = {1 : [3, 4], 2 : [3, 4], 4: [3]};
	
	for(let i = 0; arr.length; i ++){
		if(trustObj[arr[i][0]] === undefined){
			trustObj[arr[i][0]] = [arr[i][1]];
}
Else {
	trustObj[arr[i][0]].push(arr[i][1]);
}
}

//trustObj = {1 : [3, 4], 2 : [3, 4], 4: [3]};

Let suspectedJudge = [3];

for(let j = 1; j <= n; j ++){ // j = 3; n = 4;
	if(trustObj[j] === undefined){
		suspectedJudge.push(j);
}
If (suspectedJudge.length > 1) return -1;
}



[[3, 4], [3, 4], [3]]
If (Object.values(trustObj).every(arr => arr.includes(suspectedJudge[0]))){ return suspectedJudge[0]}

Return -1;
}
// https://leetcode.com/problems/shortest-distance-to-a-character/

Function shortDistance(string, c) {
Let result = string.split(“”);
Let maxDis = string.length;
 
For (let i = 0; i < string.length; i ++){
If (result[i] === c){
	Result[i] = 0;     // [13, 14, 15, 0, 1, 0, 0, 1, 2, 3, 4, 0] //maxDis = 0;
}
}
For (let i = 0; i < result.length; i ++){
	If (result[i] !== 0){
maxDis ++;
		result[i] = maxDis;
} else { //triggered when you hit a zero
maxDis = 0;
}
}
maxDis = string.length;
 
For (let i = result.length -1 ; i > -1; i--){
	If (result[i] === 0){
		maxDis = 0;
}
Else{
maxDis ++;
	//Let tempDis = MaxDis + 1; //tempDis = 3;
	If (maxDis  < result[i]){  //  1, 0, 0, 1, 2, 2, 1, 0] // maxDis = 2
		Result[i] = maxDis;
}
}
} 
 
 
Return result;
}

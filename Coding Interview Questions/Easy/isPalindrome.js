//Solution 1: This is a solution with the time complexity is n ^ 2 (because the stringCheck increases on each loop).

function isPalindrome(string) {
  // Write your code here.
	let stringCheck = "";
	let counter = string.length - 1;
	
	while(stringCheck.length < string.length){
		stringCheck+= string[counter];
		counter --;
	}
	return stringCheck === string;
}

//Solution 1: This is a solution with the time complexity is n.


function isPalindrome(string) {
  // Write your code here.
	//using pointers instead of creating a new string
	let i = 0;
	let j = string.length - 1;
	while(i < j){

		if (string[i] !== string[j]){
			return false;
		}
		i ++;
		j --;
	}
	return true;
}
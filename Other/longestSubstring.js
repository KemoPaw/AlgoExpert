function longestSubStr(str){ // "aabbghi"
	
	let currLongest = 1; // 4
	let currObj = {}; // {a: 0} // {a: 1, b : 2}
 // {b: 3, g : 4, h : 5, i : 6}

	
	for(let i = 0; i < str.length; i++){ // b 

		if(currObj[str[i]] === undefined){
			currObj[str[i]] = i;
        } //put items in currObj;
        
        else { //we found duplicate
            currLongest = Math.max(currLongest, Object.values(currObj).length)
            // currLongest = (1, 1)// (1, 2)
            i = currObj[str[i]] + 1; // i = 0 + 1; // i = 2 + 1;

            currObj = {};
        }

}

	

	return Math.max(currLongest, Object.values(currObj).length);

}

// https://leetcode.com/problems/increasing-decreasing-string/

function inDeStr(string){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    let stringObj = {};
    let result = "";

    for (let i = 0; i < string.length ; i ++){ //fill up stringALpha (N TIME)
        if (stringObj[string[i]]=== undefined) {
                
                stringObj[string[i]] = 1;
        }

        else{ // letter already in stringALpha && stringObj
            stringObj[string[i]] += 1;
        }
    }

    let stringCopy = string;
 
    while(result.length < string.length){
        //first alpha char in string, add to result, and yeet from Obj && stringCopy;
        //second
        for(let j = 0; j < alphabet.length; j ++){
            if(stringObj[alphabet[j]] >= 1){
                result += alphabet[j];
                stringObj[alphabet[j]] -= 1;
            }
        }
        
        for(let k = alphabet.length - 1; k >= 0; k --){
            if(stringObj[alphabet[k]] >= 1){
                result += alphabet[k];
                stringObj[alphabet[k]] -= 1;
            }
        }
    }
    console.log(result);

    return result;
}

inDeStr("aabbcc");

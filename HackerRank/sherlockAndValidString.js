// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem

function sherlockCheck(string){

    let charCount = {};

    for (let i = 0; i < string.length; i ++){
        if(charCount[string[i]] === undefined){
            charCount[string[i]] = 1;
        }
        else{
            charCount[string[i]] += 1;

        }
    }

    let charCountArr = Object.values(charCount).sort((a , b) => a - b);
    // console.log(charCountArr);

    if(Array.from(new Set(charCountArr)).length < 2){
        return true;
    } 

    // let count = 0;
    let newObj = {};

    for(let k = 0; k < charCountArr.length; k ++){
          if(newObj[charCountArr[k]] === undefined){
            newObj[charCountArr[k]] = 1;
        }
        else{
            newObj[charCountArr[k]] += 1;

        }
    }

    // console.log(Object.values(newObj));
    let newObjArr = Object.values(newObj).sort((a, b) => a - b);

    let switchy = false;

    for(let j = 0; j < newObjArr.length; j ++){
        if (newObjArr[j] === 1){
            return true;
        }
        else if (newObjArr[j] + 1 === newObjArr[j + 1] && switchy === false){
            switchy = true;
        }
        else if (newObjArr[j] + 1 === newObjArr[j + 1] && switchy === true){
            return false;
        }
        else{
            return false;
        }
    }

    // for(let j = 0; j < charCountArr.length; j ++){
    //     if(charCountArr[j + 1] && charCountArr[j] - charCountArr[ j + 1] === 1){
    //         count ++;
    //     }
    //     else if(charCountArr[j + 1] && charCountArr[j + 1] - charCountArr[j] === 1){
    //         count ++;

    //     }
    // }

    // return count;

}

console.log(sherlockCheck("aabb")); //yes
// console.log(sherlockCheck("aaabbeee"));
// console.log(sherlockCheck("aaaabbeee"));

console.log(sherlockCheck("abcdefghhgfedecba")); //yes

console.log(sherlockCheck("aabbccddeefghi")); //no
console.log(sherlockCheck("aabbcd")); //no

// console.log("Hello");

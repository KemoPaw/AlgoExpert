function findBestKeypad(words, keypads){
    let sult = [];

    for(let i = 0; i < keypads.length; i++){
        let tempNum = findAmnt(words, keypads[i]);
        sult.push(tempNum);
    }

    return sult;
}

function findAmnt(words, keypad){
    let count = 0;

    for(let j = 0; j < words.length; j++){
        let tempSet = new Set(words[j]);
        // console.log(tempSet);

        // if(words[j][0] === keypad[0]){
        //     tempSet.delete(words[j][0]);
        //     for(let k = 1; k < keypad.length; k ++){
        //         if(tempSet.has(keypad[k])){
        //             tempSet.delete(keypad[k]);
        //         }
        //     }
        // }
        if(!tempSet.has(keypad[0])){
            continue;
        }

        for(let k = 0; k < keypad.length; k++){
            if(tempSet.has(keypad[k])){
                    tempSet.delete(keypad[k]);
            }

        }
        if(tempSet.size === 0){
            count += 1;
        }
    }
    return count;
}

console.log(findBestKeypad(["APPLE", "PLEAS", "PLEASE"], ["APLES", "PLAE", "XAPLE"])); //[3, 1, 0];
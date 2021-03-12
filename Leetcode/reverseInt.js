
var reverse = function(x) {
    //check if number is negative
    //remove zeros if there are any at the end
    //reverse the number, then add a negative sign if needed
    //return result if the result is within the 32-bit int range
    
    let numberNeg = false;
    let currBer = x.toString();
    
    if(currBer[0] === "-") {
        numberNeg = true;
        currBer = currBer.slice(1);
    }
    
    let foundValidInt = true;
    let newBer = "";
    
    for(let i = currBer.length - 1; i >= 0; i--){
        if(currBer[i] !== "0" &&  foundValidInt){ //"remove" the zero
            foundValidInt = false;
            newBer = newBer + currBer[i];
        } 
        else if(currBer[i] === "0" &&  foundValidInt){
            // newBer.shift(currBer[i]);
        }
        else{
            newBer = newBer + currBer[i];
        }
    }
    
//     console.log(currBer);
//     console.log(newBer);
    
    if(numberNeg) newBer = "-" + newBer;
    // console.log(newBer);
    
    // console.log(typeof parseInt(newBer));
    
    
    
   if (parseInt(newBer, 10) > 2147483647 || parseInt(newBer, 10) < -2147483647) return 0;
    
    return parseInt(newBer, 10);
    
};
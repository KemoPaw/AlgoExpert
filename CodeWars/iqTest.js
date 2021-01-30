function iqTest(numbers){
  // ...
  
  //create obj where the even/odd is key && value is the index withing the "numbers" array
  let numObj = {};
  let numArr = numbers.split(" ");
//   console.log(numArr);
  
  for(let i = 0; i < numArr.length; i ++){
      if(numArr[i] % 2 === 0 && numObj["even"] === undefined){ //even number
         numObj["even"] = [i + 1];
      }
    else if (numArr[i] % 2 === 0){
         numObj["even"].push(i + 1);
        
    }
    else if (numArr[i] % 2 === 1 && numObj["odd"] === undefined){
        numObj["odd"] = [i + 1];
    }
    else{
        numObj["odd"].push(i + 1);
    }
  }
  
//   console.log(numObj);
//  let keys = Object.keys(numObj);
  let ber = (Object.values(numObj["even"]).length === 1) ? "even" : "odd";
  let numStr = numObj[ber].toString();
  
  return Number(numStr);
}
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

//other person's solution 
function iqTest(numbers){
  numbers = numbers.split(' ')
  
  var evens = []
  var odds = []
  
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] & 1) {
      odds.push(i + 1)
    } else {
      evens.push(i + 1)
    }
  }
  
  return evens.length === 1 ? evens[0] : odds[0]
}

//other person's solution 
function iqTest(numbers){
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});
  
  var odd = numbers.filter(function(el){ return el % 2 === 1});
  var even = numbers.filter(function(el){ return el % 2 === 0});
  
  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}


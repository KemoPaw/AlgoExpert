function encode(string) {
  let vowelObj = {a: 1, e: 2, i: 3, o: 4, u: 5};
  let encodedString = "";
  
  for(let i = 0; i < string.length; i ++){
    if(vowelObj[string[i]] !== undefined){ //letter is in the word
        encodedString += vowelObj[string[i]];
    }
    else{
       encodedString += string[i];
    }
  }
  
  return encodedString;
}

function decode(string) {
    let vowelObj = {1: "a", 2: "e", 3: "i", 4: "o", 5: "u"};
  let decodedString = "";
  
  for(let i = 0; i < string.length; i ++){
    if(vowelObj[string[i]] !== undefined){ //letter is in the word
        decodedString += vowelObj[string[i]];
    }
    else{
       decodedString += string[i];
    }
  }
  
  return decodedString;
}
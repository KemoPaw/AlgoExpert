function duplicateEncode(word){
    // ...
  let newString = word.toLowerCase();
  let stringCount= {};
  
  let result = "";
  
  for (let i = 0; i < newString.length; i++){
      if (stringCount[newString[i]] === undefined){
          stringCount[newString[i]] = 1;
      }
    else {
        stringCount[newString[i]] += 1;
    }
  }
  
  for (let i = 0; i < newString.length; i++){
      if(stringCount[newString[i]] > 1){
          result += ")"
      }
    else {
        result += "("
    }
  }
  return result;
  
}
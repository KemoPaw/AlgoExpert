function stringTransformer(str) {
  // Your code here
  
  let words = str.split(" ");
  
  for(let i = 0; i < words.length; i ++){
    words[i] = changeCase(words[i]);
  }
  
  return words.reverse().join(" ")
}

function changeCase(string){
  let newStr = "";
  
  for(let i = 0; i < string.length; i++){
    if(string[i] === string[i].toUpperCase()){
      newStr += string[i].toLowerCase();
    }
    else{ 
      newStr += string[i].toUpperCase()
    }
  }
  return newStr;
}
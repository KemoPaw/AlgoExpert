function alphabetPosition(text) {
  
  let lowerText = text.toLowerCase();
  
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  
  let result = "";
  
  for (let i = 0; i < lowerText.length; i ++){
      if (alpha.indexOf(lowerText[i]) !== -1){
          result += (alpha.indexOf(lowerText[i]) +1 )+ " ";
      }
  }
  
  return result.slice(0, -1) ;
}
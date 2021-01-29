function duplicateCount(text){
  //...

  let lowerText = text.toLowerCase();
  
  let countObj = {};
  
  for(let i = 0; i < lowerText.length; i ++){
      if(countObj[lowerText[i]] === undefined){
          countObj[lowerText[i]] = 1;  
      }
    else{
      countObj[lowerText[i]] += 1;
    }
  }
  
//   return countObj;
    
  return Object.values(countObj).filter(num => num >= 2).length;
}
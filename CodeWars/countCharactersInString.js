function count (string) {  
  // The function code should be here
  
  let result = {};
  
  if (string.length === 0)  return result;
  
  
  for(let i = 0; i < string.length; i ++){
      if(result[string[i]]=== undefined) result[string[i]] = 1;
      else{
          result[string[i]] += 1;
      }
  }
  return result;
  
}
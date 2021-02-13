function isPangram(string){
  //...
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let sult = "";
  
  for (let i = 0; i < string.length; i ++){
    let lowerLetter = string[i].toLowerCase();
      if(sult.includes(lowerLetter) === false && alpha.includes(lowerLetter)){
            sult+= lowerLetter;
        }
  }
//   console.log(sult);
  
  sult = sult.split('').sort().join('');
  
  return sult === alpha
}
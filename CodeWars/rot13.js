function rot13(message){
  //your code here
  let lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
  let upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  let sult = "";
  
  for(let i = 0; i < message.length; i ++){
      if(lowerAlpha.indexOf(message[i]) !== -1 ){ //lower alpha exists here
        let ogIdx = lowerAlpha.indexOf(message[i]);
        let newIdx = (ogIdx + 13) % lowerAlpha.length;
        sult += lowerAlpha[newIdx];
      }
      else if(upperAlpha.indexOf(message[i]) !== -1 ){ //lower alpha exists here
        let ogIdx = upperAlpha.indexOf(message[i]);
        let newIdx = (ogIdx + 13) % upperAlpha.length;
        sult += upperAlpha[newIdx];
      }
      else{
          sult+= message[i];
      }
  }
  
  return sult;
}
//return the total number of smiling faces in the array
function countSmileys(arr) {
  
  let smileCount = 0;
  
  for (let i = 0; i < arr.length; i++){
    
      let smileArrCheck = [0, 0, 0];
    
      if(arr[i][0] === ":" || arr[i][0] === ";" ){
          smileArrCheck[0] = 1;
      }
      if((arr[i][1] === "-" || arr[i][1] === "~") && (arr[i][2] === ")" || arr[i][2] === "D") ){
            smileArrCheck[1] = 1;
            smileArrCheck[2] = 1;
          
        }
      if(arr[i][1] === ")" || arr[i][1] === "D" ){
            smileArrCheck[2] = 1;
      }
    console.log(smileArrCheck);
      if(smileArrCheck[0] === 1 && smileArrCheck[1] === 1 && smileArrCheck[2] === 1){
          smileCount += 1;
      }
    if(smileArrCheck[0] === 1 && smileArrCheck[1] === 0 && smileArrCheck[2] === 1){
          smileCount += 1;
      }
  }
  
  return smileCount;
  
}
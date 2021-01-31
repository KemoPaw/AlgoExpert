//return the total number of smiling faces in the array
function countSmileys(arr) {
  
  let smileCount = 0;
  
  for (let i = 0; i < arr.length; i++){
      let smileArrCheck = [0, 0, 0]; //checks status of the smiley being made, changes element to 1 if it has a valid item
    
      if(arr[i][0] === ":" || arr[i][0] === ";" ){ //checking first element
          smileArrCheck[0] = 1;
      }
      if((arr[i][1] === "-" || arr[i][1] === "~") && (arr[i][2] === ")" || arr[i][2] === "D") ){ //checking 2nd element
            smileArrCheck[1] = 1;
            smileArrCheck[2] = 1;
          
        }
      if(arr[i][1] === ")" || arr[i][1] === "D" ){ //checking 3rd element
            smileArrCheck[2] = 1;
      }
    console.log(smileArrCheck);
      if(smileArrCheck[0] === 1 && smileArrCheck[1] === 1 && smileArrCheck[2] === 1){ //only increase count if the smileArrCheck is constructed correctly
          smileCount += 1;
      }
    if(smileArrCheck[0] === 1 && smileArrCheck[1] === 0 && smileArrCheck[2] === 1){ //only increase count if the smileArrCheck is constructed correctly
          smileCount += 1;
      }
  }
  
  return smileCount;
  
}

//brute force solution

function countSmileys(arr) {
  let smileys = 0;
  let validSmileys = [":D", ";D", ":)", ";)", ":-D", ";-D", ":-)", ";-)", ":~D", ";~D", ":~)", ";~)"];
  for (let i = 0; i < arr.length; i++) {
    if (validSmileys.includes(arr[i])) {
      smileys++;
    }
  }
  return smileys;
}
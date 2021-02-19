function balance(left,right){
  //coding and coding....
  // "!" === 2 pts, "?" === 3 pts;
  
  let leftScore = 0;
  let rightScore = 0;
  
  for(let i = 0; i < left.length; i++){
    if(left[i] === "!"){
      leftScore += 2;
    } else if(left[i] === "?"){
      leftScore += 3;
    }
  }
  
   for(let j = 0; j < right.length; j++){
    if(right[j] === "!"){
      rightScore += 2;
    } else if(right[j] === "?"){
      rightScore += 3;
    }
  }
  
  return (leftScore > rightScore) ? "Left": (rightScore === leftScore) ? "Balance" : "Right";
  
  
}
function high(x){
  
  let sult =[ "", 0];
  
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  
  let words = x.split(" ");
  
  for(let i = 0; i < words.length; i++){
    let total = 0;
    for(let j = 0; j < words[i].length; j++){
        let temp = alpha.indexOf(words[i][j]) + 1;
        total += temp;
    }
    if(total > sult[1]){
      sult[0] = words[i];
      sult[1] = total;
    }
  }
  
  return sult[0];

}
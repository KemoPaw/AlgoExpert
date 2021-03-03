function solution(number){
  if (number < 0) return 0;
  
  let resultSum = 0;
  
  while(number > 1){
  number -= 1;
    if(number % 3 === 0){
//       console.log(number);
      resultSum += number;
    }
    else if(number % 5 === 0){
//       console.log(number);
      resultSum += number;
    }
    
  
  } //9, 6, 5, 3
  
  return resultSum;
  
}
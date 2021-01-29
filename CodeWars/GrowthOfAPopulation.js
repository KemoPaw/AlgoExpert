function nbYear(p0, percent, aug, p) {
    // your code
  
  let count = 0;
  let currPop = p0;
  
  while (currPop < p){
      let tempPop = (currPop * (percent * 0.01)) + aug;
      currPop += tempPop;
      count ++;
  }
  
  return count;
  
}
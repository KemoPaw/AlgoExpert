function highestRank(arr){
//Your Code logic should written here
  let numObj = {};
  let allNums = [];
  
  for (let i = 0; i < arr.length; i ++){
      if(numObj[arr[i]] === undefined){
          numObj[arr[i]] = 1;
         allNums.push(arr[i]);
      }
    else{
           numObj[arr[i]] += 1;
    }
  }
  let maxNum = 0;
  let otherNum = 0;
  let maxTimes = 0;
//   console.log(numObj);
//   console.log(allNums)
  for(let j = 0; j < allNums.length; j ++){

    if(numObj[allNums[j]] > maxTimes){
          maxTimes = numObj[allNums[j]];
          maxNum = allNums[j];
      }
    if (numObj[allNums[j]] === maxTimes){
        otherNum = allNums[j];
    }
  }
//   console.log(maxNum);
//   console.log(otherNum)
  return (maxNum > otherNum) ? maxNum : otherNum;
}


function deleteNth(arr,n){
  // ...
  let count = {};
  let sult =[];
  
  for(let i = 0; i < arr.length; i ++){
      if(count[arr[i]] === undefined){
          count[arr[i]] = 1;
          sult.push(arr[i]);
      }
      else if (count[arr[i]] < n){
          count[arr[i]] += 1;
          sult.push(arr[i]);
      } 
  }
  return sult;
}
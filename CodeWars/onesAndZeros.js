const binaryArrayToNumber = arr => {
  // your code
  
  let stringInt = arr.join("");
//   console.log(stringInt);
  
  return parseInt(stringInt, 2);
};


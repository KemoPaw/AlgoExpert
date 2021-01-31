const binaryArrayToNumber = arr => {
  // your code
  
  let stringInt = arr.join("");
//   console.log(stringInt);
  
  return parseInt(stringInt, 2);
};

// other solution

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
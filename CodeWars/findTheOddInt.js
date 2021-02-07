function findOdd(A) {
  //happy coding!
  let numObj = {};
  let allNums = [];
  for (let i = 0; i < A.length; i ++){
      if(numObj[A[i]] === undefined){
          numObj[A[i]] = 1
          allNums.push(A[i]);
      }
    else{
        numObj[A[i]] += 1
    }
  }
  
//   console.log(allNums)
  
  for( let j = 0; j < allNums.length; j ++){
//     console.log(numObj[allNums[j]] );
      if(numObj[allNums[j]] % 2 === 1){
          return allNums[j];
      }
  }
}

//other solution

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}

//look into reduce()

function findOdd(A) {
  return A.reduce(function(c,v){return c^v;},0);
}
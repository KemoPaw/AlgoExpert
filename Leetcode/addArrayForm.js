// //https://leetcode.com/problems/add-to-array-form-of-integer/solution/

// var addToArrayForm = function(A, K) {
    
//     let arrNumString = ""; 
//     console.log(A);
//     console.log(K);
	
// 	for (let i = 0; i < A.length; i++){ 
// 		arrNumString += A[i]; 
//     }
//     console.log(arrNumString);



//     //arrNumString should be a string of the inputted array as one whole number

//     // let arrInt = parseInt(arrNumString, 10) + K; 
//     let arrInt = BigInt(parseInt(arrNumString)); 
//     let resultSum = arrInt + BigInt(K);

    
//         // console.log(arrInt);
//         // console.log(typeof arrInt);
//         // console.log(typeof K);
//         // console.log(K)

//         // console.log(arrInt + K);

//         // console.log(12630717197566440063 + K)
    
//         // console.log(resultSum);
        

//     let resultString = BigInt(resultSum.toString(); 
        
//     return resultString.split("");
// };

var addToArrayForm = function(A, K) {
    var str = "";
    var arr = [];
    for (var i = 0; i < A.length ; i++) {
        str += A[i];
    }
    var num = BigInt(str) + BigInt(K);
    arr.push(num);
    var arr = arr.toString().split('');
    console.log(arr);
    return arr;
    
};


addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3],516);

console.log("-------------------");

// console.log(12 + 9);

// console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3],516));


// https://www.hackerrank.com/challenges/candies/problem

function candies(n, arr) {
   let grades = arr;
    let candies = new Array(grades.length);
    //initialize to 0
    candies.fill(0); //[0,0,0,0,1,0,0,0,0,1]
    //construct a sorted array of student's grades
    let unsortedGrades = [...grades];
    grades.sort((a, b) => a - b); //[1, 1, 2, 2, 2, 4, 6, 7, 8, 9]
    console.log(unsortedGrades);
    console.log(grades);
    for(let i = 0; i < grades.length; i++)//sortedGrades[i]: 1
        {
        let next_value_index = 0;
        while((grades[i] !== unsortedGrades[next_value_index]) || (candies[next_value_index] !== 0))
            {
                next_value_index++;
            }
        //assign a value in candies according to values already in candies
        let extra_candies = 0;
        //is the current grade larger than the grades next to it? Act accordingly
        if(unsortedGrades[next_value_index -1] && unsortedGrades[next_value_index] > unsortedGrades[next_value_index -1])//
            {
                extra_candies = candies[next_value_index-1];
            }
        if(unsortedGrades[next_value_index + 1] && unsortedGrades[next_value_index] > unsortedGrades[next_value_index + 1])//
            {
                extra_candies = Math.max(extra_candies, candies[next_value_index+1]);
            }
        candies[next_value_index] = extra_candies + 1;//
        } 
  console.log(candies)
  return candies.reduce((a,b) => a+b, 0);
//   return candies.sum();
}

candies(10, [2, 4, 2, 6, 1, 7, 8, 9, 2, 1]);
function queueTime(customers, n) { // n is # of checkout tils
  //TODO
  //make obj, with key as 1-n, and value being the customers being added to N queue
  // from there get object values, sum them and return the highest one.


  if (customers.length === 0){ //tests to see if there are even customers to begin with.
      return 0;
  }


  let objQueue = {};
//   let totalTime = 0;
  
  for(let i = 1; i <= n; i ++){
      objQueue[i] = [];
  }
  
  for(let j = 0; j < customers.length; j ++){
      let temp = j % n + 1;
      objQueue[temp].push(customers[j]);
  }
  
  let maxTime = 0;
  for (let k = 1; k <= n; k++){
      let tempTime = objQueue[k].reduce((a, b) => a + b, 0);
      if(tempTime > maxTime){
          maxTime = tempTime;
      }
  }
  
  return maxTime;

}

//working solution;

function queueTime(customers, n) { // n is # of checkout tils
  
  let emptyQueue = new Array(n).fill(0);
  
  for(let i = 0; i < customers.length; i ++){
      let tempIdx = emptyQueue.indexOf(Math.min(...emptyQueue)); //finds thr array with the smallest "queue" time;
      emptyQueue[tempIdx] += customers[i];
  }
  
  return Math.max(...emptyQueue); //returns array with the largest queue time
}
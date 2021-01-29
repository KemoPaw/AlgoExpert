function tickets(peopleInLine){
  
  let moneyObj = {25: 1, 50: 1, 100: 1};
  
  for (let i = 0; i < peopleInLine.length ; i ++){
    let needChange = true;
      if (peopleInLine[i] === 25){ //no need to give change
          moneyObj[peopleInLine[i]] += 1;
          needChange = false;
      }
      else{
          moneyObj[peopleInLine[i]] += 1;
      }
      if (needChange) { //need to give change
          let tempChange = peopleInLine[i] - 25;
          if(moneyObj[25] > 2 && tempChange === 50){ //give exact change
              moneyObj[25] -= 2;
          }
         else if(moneyObj[50] > 1 && tempChange === 50){ //give exact change
              moneyObj[50] -= 1;
          }
          else if(moneyObj[25] > 1 && tempChange === 25){ //give exact change
              moneyObj[25] -= 1;
          }
          else if(moneyObj[50] > 1 && moneyObj[25] > 1 && tempChange === 75){ //give exact change
              moneyObj[25] -= 1;
              moneyObj[50] -= 1;
          }
          else if(moneyObj[25] > 3 && tempChange === 75){ //give exact change
              moneyObj[25] -= 3;
          }
          else{
              return "NO"
          }
    } 
  }
  
  return "YES";


  // someone else's solution which I enjoy with the tuneries

  //function Clerk(name) {
//   this.name = name;
  
//   this.money = {
//     25 : 0,
//     50 : 0,
//     100: 0 
//   };
  
//   this.sell = function(element, index, array) {
//     this.money[element]++;

//     switch (element) {
//       case 25:
//         return true;
//       case 50:
//         this.money[25]--;
//         break;
//       case 100:
//         this.money[50] ? this.money[50]-- : this.money[25] -= 2;
//         this.money[25]--;
//         break;
//     }
//     return this.money[25] >= 0;
//   };
// }

// function tickets(peopleInLine){
//   var vasya = new Clerk("Vasya");
//   return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
// }
// }
function meeting(s) {
    // your code
  let allNames = s.split(";"); //arr
  
  let allNamesUpper = [];
  
  for(let i = 0; i < allNames.length; i++){
    let tempNameSplit = allNames[i].split(":");
//     console.log(tempNameSplit[0]);
//     console.log(typeof tempNameSplit[0]);
    
//     console.log(tempNameSplit[1]);
//     console.log(typeof tempNameSplit[1]);
    
    
    let tempName = "(" + tempNameSplit[1].toUpperCase() + ", "+ tempNameSplit[0].toUpperCase() + ")";
    allNamesUpper.push(tempName);
  }
  
  return allNamesUpper.sort().join("");
  
}
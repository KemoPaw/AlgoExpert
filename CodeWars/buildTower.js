function towerBuilder(nFloors) {
  // build here
  
  let sult = [];
  for (var i = 0; i < nFloors; i++) {
        sult.push(" ".repeat(nFloors - i - 1)
        + "*".repeat((i * 2)+ 1)
        + " ".repeat(nFloors - i - 1))
  }
  
  return sult;
}

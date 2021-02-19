function kebabize(str) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  
    let newStr =  str.split('').map((character) => {
        if (character === character.toUpperCase() && alpha.indexOf(character.toLowerCase()) !== -1) {
//           console.log(alpha.indexOf(character));
//           console.log(character);
            return '-' + character.toLowerCase();
          
        } else if(alpha.indexOf(character) !== -1){
//           console.log(character);
//           console.log(alpha.indexOf(character));
            return character;
        }
      else{
        return "";
      }
    })
    .join('');
  
  return (newStr[0] === "-") ? newStr.slice(1) : newStr;
}
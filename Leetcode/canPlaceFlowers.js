var canPlaceFlowers = function(flowerbed, n) {
    //0 === empty;
    //1 === !empty;
    //flowers have to put planted in every OTHER plot //be aware of the "1"'s'
    //check "left" && "right" for === 0; then decrease n;
    
    //return true if n <= 0;
    //else return false;
    
    for(let i = 0; i < flowerbed.length; i ++){
    
        let tempLeft = (flowerbed[i -1] === undefined) ? 0 : flowerbed[i -1];
        let tempRight = (flowerbed[i + 1] === undefined) ? 0 : flowerbed[i + 1];
   
        
        if(tempLeft === 0 && tempRight === 0 && flowerbed[i] === 0){
            flowerbed[i] = 1;
            n = n -1;
        }
    };
    
    // console.log(flowerbed);
    
    return (n <= 0) ? true : false;
    
};
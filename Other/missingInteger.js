function solution(A) {
    let sortedArr = A.sort((a, b) => a - b).filter(num => num > 0);
    // console.log(sortedArr);
    let sult = 1;
    
    
    for (let i = 0; i < sortedArr.length; i ++){
        if(sult === sortedArr[i]){
            sult +=1;
        }
        // sult += 1;
    }
    
    return sult;
}
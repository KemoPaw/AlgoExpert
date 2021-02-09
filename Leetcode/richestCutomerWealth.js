//https://leetcode.com/problems/richest-customer-wealth/submissions/
var maximumWealth = function(accounts) {
    let sult = 0;
    
    for (let i = 0; i < accounts.length; i ++){
        let tempSum = accounts[i].reduce(function(a, b){
            return a + b;
        }, 0);
        if(tempSum >= sult){
            sult = tempSum;
        }
    }
    return sult;
};
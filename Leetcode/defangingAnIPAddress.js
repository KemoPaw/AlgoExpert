//https://leetcode.com/problems/defanging-an-ip-address/submissions/

var defangIPaddr = function(address) {
    let sult = "";
    
    for(let i = 0; i < address.length; i ++){
        if(address[i] === "."){
            sult+= "[.]";
        }
        else{
            sult += address[i];
        }
    }
    return sult;
};
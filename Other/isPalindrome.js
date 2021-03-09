function isPalindrome(str){
    //return true || false

    //remove spaces
    //convert all characters to lowercase incase there are upper-case letters in the word
    //compare input string to reversed string and return True/False

    let newStr = "";

    for(let i = 0; i < str.length; i++){
        if(str[i] !== " "){
            newStr += str[i].toLowerCase();
        }
    }

    let revStr = newStr.split("").reverse().join("");

    return newStr === revStr;

}
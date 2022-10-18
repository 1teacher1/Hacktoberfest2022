/*
        Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct or not.
        return either true or false
 */

function isBalanced(str){
    // write your code here ...
    let arr = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] == '[' || str[i] == '(' || str[i] == '{' ) {     
            arr.push(str[i]);
        }
        else if (arr.length != 0 && str[i] === '}' && arr[arr.length - 1] === "{") {
            arr.pop()
        }
        else if (arr.length != 0 && str[i] === ')' && arr[arr.length - 1] === "(") {
            arr.pop()
        }
        else if (arr.length != 0 && str[i] === ']' && arr[arr.length - 1] === "[") {
            arr.pop()
        } 
        else {
            return false;
        }
    }
    return arr.length ==0 ;
    
}

console.log(isBalanced('[()]{}{[()()]()}')) // true
console.log(isBalanced('[(])')) // false
console.log(isBalanced('[({}])')) // false
console.log(isBalanced('[]{}()')) // true
console.log(isBalanced('[(){()}{}]')) // true
console.log(isBalanced('[[[')) // true
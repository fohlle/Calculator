function add(num1,num2){
    return num1 + num2;
}
function subtract(num1,num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1 * num2;
}
function divide(num1,num2){
    return num1 / num2;
}

function operate(string,num1,num2){
    if(string === "+"){
        return add(num1,num2);
    }else if(string === "-"){
        return subtract(num1,num2);
    }else if(string === "*"){
        return multiply(num1,num2);
    }else if(string === "/"){
        return divide(num1,num2);
    }else{
        return "Sry no valid operator";
    }
}

console.log(operate("+",4,14));
console.log(operate("-",4,14));
console.log(operate("*",4,4));
console.log(operate("/",14,2));
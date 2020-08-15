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
function number(){

}

const btnNum = [...document.querySelectorAll(".num")];
const btnOp = [...document.querySelectorAll(".operator")];
const btnClear = document.querySelector(".clear");
const btnEqual = document.querySelector(".equal");

const display = document.querySelector("#display");
const para = document.createElement("p");

let data = "";
let numbers = "";
let operator = "";
let array = [];
let arrayTwo = [];
let sum = 0;
let text = "";


btnNum.forEach(n => {
    n.addEventListener("click", (e) => {
        let hi = e.target.textContent;
        array.push(hi);
        if(sum === 0){
            text = arrayTwo + " " + operator + " " + array.join("");
        }else{
            text = sum + " " + operator + " " + array.join("");
        }
        appendPara(text);
    });
});

btnOp.forEach(n => {
    n.addEventListener("click", (e) => {
        operator = e.target.textContent;
        text += operator;
        appendPara(text);
        arrayTwo = array.join("");
        array = [];
        
    })
})

btnClear.addEventListener("click", () => {
    clear();
    appendPara(array);
});

btnEqual.addEventListener("click", () => {
    if(sum === 0){
        sum = operate(operator,+array,+arrayTwo);
    }else{
        sum = operate(operator,sum,+array)

    }
    text = sum;
    appendPara(text);
})

/*
// numbers //
btnNum.forEach(butts => {
    butts.addEventListener("click" , event => {
        data += event.target.textContent;
        let text = numbers + " " + operator + " " + data;
        appendPara(text)
    });
});
// clearing //
btnClear.addEventListener("click", () => {
    clear();
    sum = 0;
    appendPara(data);
})
// operators //
btnOp.forEach(butts => {
    butts.addEventListener("click", (event) => {
        operator = event.target.textContent;
        if(sum === 0){
            display.appendChild(para).textContent += operator;
        }else{
            display.appendChild(para).textContent = sum + " " + operator;
        }
        array.push(data);
        numbers = data;
        data = "";
    });
});
// equals//
btnEqual.addEventListener("click", () => {
    if(sum === 0){
        sum = operate(operator,+numbers,+data);
    }else{
        sum = operate(operator,sum,+data);
    }
    display.appendChild(para).textContent = sum;
    clear();
});
*/
function appendPara(string){
    display.appendChild(para).textContent = string;
}
function clear(){
    data = "";
    numbers = "";
    array = [];
    operator = "";
    arrayTwo = [];
    sum = 0;
    text = "";
}
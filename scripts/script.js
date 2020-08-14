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

const btn = [...document.querySelectorAll("#container button")];
const display = document.querySelector("#display");
const para = document.createElement("p");

btn.forEach(butts => {
    butts.addEventListener("click" , event => {
        let data = [...event.target.textContent];
        if(event.target.textContent === "clear"){
            data = [];
            para.textContent = data;
        }else{
        para.textContent += data + " ";
        }
        display.appendChild(para);
       
       console.log(event.target.textContent);
       console.log(data)
    });
});
console.log(btn);
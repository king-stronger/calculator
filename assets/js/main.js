let result;
let float=false;
let display = ""; 
let operator = "";
let firstNumber = "";
let secondNumber = "";

const delButton = document.querySelector(".del");
const floatButton = document.querySelector(".float");
const resetButton = document.querySelector(".reset");
const displayBox = document.querySelector(".display");
const resultButton = document.querySelector(".equal");
const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operators");

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if(firstNumber && !secondNumber){
            operator = button.getAttribute("data-value");
        } else if(firstNumber && secondNumber) {
            operate(operator, firstNumber, secondNumber);
            firstNumber = `${result}`, secondNumber = "";
            operator = button.getAttribute("data-value");
        }else {
            reset();
        }

        displayContent();
    });
});

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if(operator){
            secondNumber += button.getAttribute("data-value");
        } else {
            firstNumber += button.getAttribute("data-value");
        }

        displayContent();
    })
});

resultButton.addEventListener("click", () => {
    operate(operator, firstNumber, secondNumber);
    displayContent(result);
});

delButton.addEventListener("click", () => {
    if(operator){
        secondNumber = del(secondNumber);
    } else {
        firstNumber = del(firstNumber);
    }

    displayContent();
});

resetButton.addEventListener("click", () => {
    reset();
});

floatButton.addEventListener("click", () => {
    if(!operator && !firstNumber.includes(".")){
        firstNumber += floatButton.getAttribute("data-value");
        float = true;
    } else if(operator && !secondNumber.includes(".")){
        secondNumber += floatButton.getAttribute("data-value");
        float = true;
    }

    return displayContent();
});


function add (a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b == "0"){
        alert("You can't divide a number by 0")
        return reset();
    }
    return a / b;
}

function operate(symbol, firstValue, secondValue){
    if(!firstValue || !secondValue){
        alert("You need to provide two numbers");
        return reset();
    }

    firstValue = parseFloat(firstValue);
    secondValue = parseFloat(secondValue);

    switch(symbol){
        case "+":
            result = add(firstValue, secondValue);
            break
        case "-":
            result = substract(firstValue, secondValue);
            break;
        case "*":
            result = multiply(firstValue, secondValue);
            break;
        case "/":
            result = divide(firstValue, secondValue);
            break;
        default:
            break;
    }

    if(!float){
        result = parseInt(result);
    } else {
        result = Math.round(result * 100) / 100;
    }
}

function displayContent(content){
    if(content){
        displayBox.textContent = content;
        return;
    }

    display = `${firstNumber} ${operator} ${secondNumber}`;

    displayBox.textContent = display.trim();
}

function del(number){
    let length = number.length;
    return number.slice(0, length - 1);
}


function reset(){
    display = "";
    operator = "";
    result = null;
    float = false;
    firstNumber = "";
    secondNumber = ""; 
    displayBox.textContent = "";
}
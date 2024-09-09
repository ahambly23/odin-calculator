const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const add = document.getElementById("plus");
const subtract = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const decimal = document.getElementById("decimal");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");
const display = document.getElementById("display");

let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';
let shouldResetDisplay = false;
let shouldClearDisplay = false;

display.innerText = "0";

const addSum = (a, b) => a + b;
const subtractSum = (a, b) => a - b;
const multiplySum = (a, b) => a * b;
const divideSum = (a, b) => b === 0 ? "Error" : a / b;

const roundToMaxLength = (num, maxLength) => {
    let numStr = num.toString();
    if (numStr.length <= maxLength) {
        return numStr;
    }
    if (numStr.includes('.')) {
        const integerPartLength = numStr.split('.')[0].length;
        const maxDecimalPlaces = maxLength - integerPartLength - 1;
        num = parseFloat(num).toFixed(maxDecimalPlaces);
    }
    return num.toString().slice(0, maxLength);
}

const operate = (operator, num1, num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operator === '+') result = addSum(num1, num2);
    if (operator === '-') result = subtractSum(num1, num2);
    if (operator === '*') result = multiplySum(num1, num2);
    if (operator === '/') result = divideSum(num1, num2);

    result = roundToMaxLength(result, 13);
    return result;
}

const handleNumber = (number) => {
    if (shouldResetDisplay || shouldClearDisplay) {
        display.innerText = "";
        shouldResetDisplay = false;
        shouldClearDisplay = false;
    }
    if (display.innerText === "0") {
        display.innerText = "";
    }
    if (display.innerText.length < 13) {
        display.innerText += number;
    }
}

one.addEventListener("click", () => handleNumber("1"));
two.addEventListener("click", () => handleNumber("2"));
three.addEventListener("click", () => handleNumber("3"));
four.addEventListener("click", () => handleNumber("4"));
five.addEventListener("click", () => handleNumber("5"));
six.addEventListener("click", () => handleNumber("6"));
seven.addEventListener("click", () => handleNumber("7"));
eight.addEventListener("click", () => handleNumber("8"));
nine.addEventListener("click", () => handleNumber("9"));
zero.addEventListener("click", () => handleNumber("0"));

backspace.addEventListener("click", () => {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === "") {
        display.innerText = "0";
    }
    if (display.innerText === result.toString()) {
        display.innerText = "0";
        firstNumber = "";
        secondNumber = "";
        operator = "";
        result = "";
        shouldClearDisplay = false;
        shouldResetDisplay = false;
    }
})

decimal.addEventListener("click", () => {
    if (!display.innerText.includes(".")) {
        display.innerText += ".";
    }
});

const handleOperator = (op) => {
    if (firstNumber === '') {
        firstNumber = display.innerText;
    } else if (operator) {
        secondNumber = display.innerText;
        result = operate(operator, firstNumber, secondNumber);
        display.innerText = result;
        firstNumber = result;
    }
    operator = op;
    shouldResetDisplay = true;
}

add.addEventListener("click", () => handleOperator("+"));
subtract.addEventListener("click", () => handleOperator("-"));
multiply.addEventListener("click", () => handleOperator("*"));
divide.addEventListener("click", () => handleOperator("/"));

equals.addEventListener("click", () => {
    if (firstNumber && operator) {
        secondNumber = display.innerText;
        result = operate(operator, firstNumber, secondNumber);
        display.innerText = result;
        firstNumber = result;
        operator = '';
        shouldClearDisplay = true;
    } else {
        display.innerText = "0";
        firstNumber = "";
        secondNumber = "";
        operator = "";
        result = "";
        shouldClearDisplay = false;
        shouldResetDisplay = false;
    }
});

clear.addEventListener("click", () => {
    display.innerText = "0";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
    shouldClearDisplay = false;
    shouldResetDisplay = false;
})
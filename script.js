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

const addSum = (a, b) => a + b;
const subtractSum = (a, b) => a - b;
const multiplySum = (a, b) => a * b;
const divideSum = (a, b) => b === 0 ? "Error" : a / b;

const operate = (operator, num1, num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operator === '+') return addSum(num1, num2);
    if (operator === '-') return subtractSum(num1, num2);
    if (operator === '*') return multiplySum(num1, num2);
    if (operator === '/') return divideSum(num1, num2);
}

const handleNumber = (number) => {
    if (shouldResetDisplay) {
        display.innerText = "";
        shouldResetDisplay = false;
    }
    display.innerText += number;
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
})

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
    secondNumber = display.innerText;
    result = operate(operator, firstNumber, secondNumber);
    display.innerText = result;
})

clear.addEventListener("click", () => {
    display.innerText = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
})

// Add decimal point event
    // Loop through display.innerText
        // IF display.innerText[x] === "." disable the button
        // ELSE display.innerText += "."

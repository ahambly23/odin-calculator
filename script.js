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

const addSum = (a, b) => {
    return a + b;
}

const subtractSum = (a, b) => {
    return a - b;
}

const multiplySum = (a, b) => {
    return a * b;
}

const divideSum = (a, b) => {
    if (b === 0) {
        return display.innerText = "Error";
    } else {
        return a / b;
    }
}

const operate = (operator, num1, num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operator === '+') {
        return addSum(num1, num2);        
    } else if (operator === '-') {
        return subtractSum(num1, num2);
    } else if (operator === '*') {
        return multiplySum(num1, num2);
    } else if (operator === '/') {
        return divideSum(num1, num2);
    }
}

one.addEventListener("click", () => {
    display.innerText += "1";
})
two.addEventListener("click", () => {
    display.innerText += "2";
})
three.addEventListener("click", () => {
    display.innerText += "3";
})
four.addEventListener("click", () => {
    display.innerText += "4";
})
five.addEventListener("click", () => {
    display.innerText += "5";
})
six.addEventListener("click", () => {
    display.innerText += "6";
})
seven.addEventListener("click", () => {
    display.innerText += "7";
})
eight.addEventListener("click", () => {
    display.innerText += "8";
})
nine.addEventListener("click", () => {
    display.innerText += "9";
})
zero.addEventListener("click", () => {
    display.innerText += "0";
})
backspace.addEventListener("click", () => {
    display.innerText = display.innerText.slice(0, -1);
})

// If an operator is clicked whilst firstNumber is already full, assign to secondNumber

add.addEventListener("click", () => {
    firstNumber = display.innerText;
    operator = "+";
    display.innerText = "";
})
subtract.addEventListener("click", () => {
    firstNumber = display.innerText;
    operator = "-";
    display.innerText = "";
})
multiply.addEventListener("click", () => {
    firstNumber = display.innerText;
    operator = "*";
    display.innerText = "";
})
divide.addEventListener("click", () => {
    firstNumber = display.innerText;
    operator = "/";
    display.innerText = "";
})
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

// when a user clicks a number, it should be added to an empty array, then join the array into a string and do the calculations
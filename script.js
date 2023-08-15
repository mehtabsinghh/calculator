function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Your calculation functions (add, subtract, multiply, divide) here...

// Get the display element
const displayElement = document.querySelector('.display');

// Get all number buttons
const numberButtons = document.querySelectorAll('.number');

// Get operation buttons
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');

let currentInput = '';
let firstOperand = '';
let operator = '';

function updateDisplay() {
    displayElement.textContent = currentInput;
}

// Event listener for number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        updateDisplay();
    });
});

// Event listener for operation buttons
addButton.addEventListener('click', () => {
    if (currentInput !== '') {
        firstOperand = currentInput;
        operator = 'add';
        currentInput = '';
    }
});

subtractButton.addEventListener('click', () => {
    if (currentInput !== '') {
        firstOperand = currentInput;
        operator = 'subtract';
        currentInput = '';
    }
});

multiplyButton.addEventListener('click', () => {
    if (currentInput !== '') {
        firstOperand = currentInput;
        operator = 'multiply';
        currentInput = '';
    }
});

divideButton.addEventListener('click', () => {
    if (currentInput !== '') {
        firstOperand = currentInput;
        operator = 'divide';
        currentInput = '';
    }
});

// Event listener for equals button
equalsButton.addEventListener('click', () => {
    if (currentInput !== '' && firstOperand !== '' && operator !== '') {
        const secondOperand = currentInput;
        const result = operate(parseFloat(firstOperand), parseFloat(secondOperand), operator);
        currentInput = result.toString();
        firstOperand = '';
        operator = '';
        updateDisplay();
    }
});

// Event listener for clear button
clearButton.addEventListener('click', () => {
    currentInput = '';
    firstOperand = '';
    operator = '';
    updateDisplay();
});

// Function to perform the operation
function operate(a, b, operation) {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            if (b !== 0) {
                return divide(a, b);
            } else {
                displayElement.textContent = "Error: Cannot divide by zero!";
                return NaN;
            }
        default:
            return NaN; // Invalid operation
    }
}

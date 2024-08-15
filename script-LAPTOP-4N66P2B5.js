const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.id === 'clear') {
            currentInput = '';
            operator = '';
            previousInput = '';
            display.textContent = '';
        } else if (button.classList.contains('operator')) {
            if (currentInput === '' && operator !== '') {
                operator = value;
            } else {
                previousInput = currentInput;
                currentInput = '';
                operator = value;
            }
        } else if (button.classList.contains('equals')) {
            if (currentInput !== '' && previousInput !== '') {
                const result = calculate(previousInput, operator, currentInput);
                display.textContent = result;
                currentInput = result;
                previousInput = '';
                operator = '';
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

function calculate(a, operator, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Error';
        default:
            return '';
    }
}

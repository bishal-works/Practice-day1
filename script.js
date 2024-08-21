let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    if (currentInput === '' && number === '0') return;
    if (currentInput.includes('.') && number === '.') return;
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '') return;
    currentInput += ' ' + operator + ' ';
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.trim();
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
    }
    display.innerText = currentInput || '0';
}

function calculate() {
    try {
        currentInput = eval(currentInput.replace(/x/g, '*'));
        display.innerText = currentInput;
    } catch {
        display.innerText = 'Error';
    }
}

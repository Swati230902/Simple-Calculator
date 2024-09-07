const calculationDisplay = document.getElementById('calculation');
const resultDisplay = document.getElementById('result');
let currentCalculation = '';

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        const value = this.value;

        if (value === '=') {
            calculateResult();
        } else if (value === 'C') {
            clearCalculation();
        } else if (value === '←') {
            handleBackspace();
        } else {
            appendToCalculation(value);
        }
    });
});

function appendToCalculation(value) {
    currentCalculation += value;
    calculationDisplay.value = currentCalculation;
}

function calculateResult() {
    try {
        const result = eval(currentCalculation); // Use eval for basic math
        resultDisplay.value = result;
    } catch {
        resultDisplay.value = 'Error';
    }
}

function clearCalculation() {
    currentCalculation = '';
    calculationDisplay.value = '';
    resultDisplay.value = '';
}

function handleBackspace() {
    // Remove the last character from the current calculation
    currentCalculation = currentCalculation.slice(0, -1);
    calculationDisplay.value = currentCalculation;
}


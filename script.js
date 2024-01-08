// // calculator class
// class Calculator {
//     constructor(prevOperandText, currentOperandText) {
//         this.prevOperandText = prevOperandText;
//         this.currentOperandText = currentOperandText;
//         this.clear();
//     }

//     clear() {
//         this.currentOperand = '';
//         this.previousOperand = '';
//         this.operation = undefined;
//     }

//     delete() {
//         this.currentOperand = this.currentOperand.toString().slice(0, -1); 
//     }

//     appendNum(number) {
//         if (number === '.' && this.currentOperand.includes('.')) {
//             return;
//         }
//         this.currentOperand = this.currentOperand.toString() + number.toString(); // Use += to append the number
//         this.updateDisplay(); 
//     }

//     chooseOperation(operation) {
//         if (this.currentOperand === '') {
//             return;
//         }
//         if (this.previousOperand !== '') {
//             this.compute();
//         }
    
//         this.operation = operation;
//         this.previousOperand = this.currentOperand;
//         this.currentOperand = '';
//     }

//     compute() {
//         let computation;
        
//         const prev = parseFloat(this.previousOperand);
//         const current = parseFloat(this.currentOperand);
    
//         console.log('Prev:', prev);
//         console.log('Current:', current);
//         console.log('Operation:', this.operation);
    
//         if (isNaN(prev) || isNaN(current)) {
//             console.log('Invalid operands');
//             return;
//         }
    
//         switch (this.operation) {
//             case '+':
//                 computation = prev + current;
//                 break;
//             case '-':
//                 computation = prev - current;
//                 break;
//             case '×':
//                 computation = prev * current;
//                 break;
//             case '÷':
//                 computation = prev / current;
//                 break;
//             case '%':
//                 computation = prev * 0.01;
//             default:
//                 console.log('Invalid operation');
//                 return;
//         }
    
//         this.currentOperand = computation.toString();
//         this.operation = undefined;
//         this.previousOperand = '';
//     }

//     updateDisplay() {
//         this.currentOperandText.innerText = this.currentOperand;
//         this.prevOperandText.innerText = this.previousOperand;
//     }
// }

// // defining constants
// const dataOperation = document.querySelectorAll('[data-operation]');
// const dataNumber = document.querySelectorAll('[data-number]');
// const dataAllClear = document.querySelector('[data-all-clear]');
// const dataDelete = document.querySelector('[data-delete]');
// const dataOff = document.querySelector('[data-off]');
// const dataEquals = document.querySelector('[data-equals]');
// const prevOperandText = document.querySelector('[data-previous]');
// const currentOperandText = document.querySelector('[data-current]');

// // calculator instance
// const calculator = new Calculator(prevOperandText, currentOperandText);

// dataNumber.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.appendNum(button.innerText);
//         calculator.updateDisplay();
//     });
// });

// dataOperation.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.appendNum(button.innerText);
//         calculator.updateDisplay();
//     });
// });

// dataEquals.addEventListener('click', () => {
//     calculator.compute();
//     calculator.updateDisplay();
// });

// dataAllClear.addEventListener('click', () => {
//     calculator.clear();
//     calculator.updateDisplay();
// });

// dataOff.addEventListener('click', () => {
//     calculator.clear();
//     calculator.updateDisplay();
// });


// dataDelete.addEventListener('click', () => {
//     calculator.delete();
//     calculator.updateDisplay();
// });
let currentOperand = '';
let prevOperand = '';
let currentOperation = null;
let resetScreenBool = false;

const numberSelectors = document.querySelectorAll('[data-number]');
const operationSelectors = document.querySelectorAll('[data-operation]');
const equalSelector = document.getElementById('=');
const allClearSelector = document.getElementById('AC');
const deleteSelector = document.getElementById('DEL');
const offSelector = document.getElementById('OFF');
const prevOperandNumber = document.getElementById('previous-operand');
const currentOperandNumber = document.getElementById('current-operand');

numberSelectors.forEach((button) => {
    button.addEventListener('click', () => appendNum(button.textContent));
    console.log('button pressed');
});

operationSelectors.forEach((button) => {
    button.addEventListener('click', () => operate(button.textContent));
});

function resetScreen() {
    currentOperandNumber.textContent = '';
    resetScreenBool = false;
}

function appendNum(number) {
    if (currentOperandNumber.textContent === '0' || resetScreenBool) {
        resetScreen();
    }
    currentOperandNumber.textContent += number;
}

// function operationSet() {

// }

function clear() {
    prevOperandNumber.textContent = '';
    currentOperandNumber.textContent = '0';
    currentOperand = '';
    prevOperand = '';
    currentOperation = null;
}

function deleteNumber() {
    currentOperandNumber.textContent = currentOperandNumber.textContent.toString.slice(0,-1);
}

function point() {
    if (resetScreenBool) {
        resetScreen();
    }
    if (currentOperandNumber.textContent === '') {
        currentOperandNumber.textContent = '0';
    }
    if (currentOperandNumber.textContent.includes('.')) {
        return currentOperand.textContent += '.';
    }
}




// operator functions
function add(num1,num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// function percentage(num1, num2) {
//     if ()
//     return num1*0.01;
// }

function operate(num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);

    switch(operator) {
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2);
        case '×':
            return multiply(num1,num2);
        case '÷':
            return divide(num1,num2); 
    }
}



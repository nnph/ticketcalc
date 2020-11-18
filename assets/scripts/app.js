﻿const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
     const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription);
}

function writeToLog(opIdentifier, prevResult, opNumber, newResult){
    const logEntry = {
        operation: opIdentifier,
        prevResult: prevResult,
        number: opNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult += enteredNumber;
    createAndWriteLog('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult)
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult -= enteredNumber;
createAndWriteLog('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult *= enteredNumber;
    createAndWriteLog('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult /= enteredNumber;
    createAndWriteLog('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)
} 

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
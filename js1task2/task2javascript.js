// This program performs basic calculator operations on two numbers provided by the user through prompts.


function exercise1() {
    promptnum1 = parseFloat(prompt("Enter the first number:"));
    promptnum2 = parseFloat(prompt("Enter the second number:"));

    function add(a, b) {

        let promptSum = promptnum1 + promptnum2;
        console.log("Sum of", promptnum1, "and", promptnum2, "is:", promptSum);
        return a + b;
    }
    add(promptnum1, promptnum2);
}

function exercise2() {
    promptnum1 = parseFloat(prompt("Enter the first number:"));
    promptnum2 = parseFloat(prompt("Enter the second number:"));

    function subtract(a, b) {
        let promptDifference = promptnum2 - promptnum1;
        console.log("Difference of", promptnum2, "and", promptnum1, "is:", promptDifference);
        return a - b;
    }
    subtract(promptnum2, promptnum1);
}

function exercise3() {
    promptnum1 = parseFloat(prompt("Enter the first number:"));
    promptnum2 = parseFloat(prompt("Enter the second number:"));
    function multiply(a, b) {
        let promptProduct = promptnum1 * promptnum2;
        console.log("Product of", promptnum1, "and", promptnum2, "is:", promptProduct);
        return a * b;
    }
    multiply(promptnum1, promptnum2);
}

function exercise4() {
    promptnum1 = parseFloat(prompt("Enter the first number:"));
    promptnum2 = parseFloat(prompt("Enter the second number:"));
    function divide(a, b) {
        let promptQuotient = promptnum2 / promptnum1;
        console.log("Quotient of", promptnum2, "divided by", promptnum1, "is:", promptQuotient);
        return a / b;
    }
    divide(promptnum2, promptnum1);
}

function exercise5() {
    promptnum1 = parseFloat(prompt("Enter the first number:"));
    promptnum2 = parseFloat(prompt("Enter the second number:"));
    function Remainder(a, b) {
        let promptRemainder = promptnum2 % promptnum1;
        console.log("Remainder of", promptnum2, "divided by", promptnum1, "is:", promptRemainder);
        return a % b;
    }
    Remainder(promptnum2, promptnum1);
}
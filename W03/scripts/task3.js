/* Lesson 3 */

// Function declaration - add
function add(number1, number2) {
    return number1 + number2;
}

// Function declaration - subtract
function subtract(number1, number2) {
    return number1 - number2;
}

// Function declaration - multiply
const multiply = (number1, number2) => number1 * number2;

// Function declaration - divide
const divide = function(number1, number2) {
    return number1 / number2;
};

// Function declaration - addNumbers
function addNumbers() {
    const addend1 = parseInt(document.getElementById("addend1").value);
    const addend2 = parseInt(document.getElementById("addend2").value);
    const sumElement = document.getElementById("sum");
    sumElement.value = add(addend1, addend2);
}

// Function declaration - subtractNumbers
function subtractNumbers() {
    const minuend = parseInt(document.getElementById("minuend").value);
    const subtrahend = parseInt(document.getElementById("subtrahend").value);
    const differenceElement = document.getElementById("difference");
    differenceElement.value = subtract(minuend, subtrahend);
}

// Function declaration - multiplyNumbers
function multiplyNumbers() {
    const factor1 = parseInt(document.getElementById("factor1").value);
    const factor2 = parseInt(document.getElementById("factor2").value);
    const productElement = document.getElementById("product");
    productElement.value = multiply(factor1, factor2);
}

// Function declaration - divideNumbers
function divideNumbers() {
    const dividend = parseInt(document.getElementById("dividend").value);
    const divisor = parseInt(document.getElementById("divisor").value);
    const quotientElement = document.getElementById("quotient");
    quotientElement.value = divide(dividend, divisor);
}

// Add event listeners
document.getElementById("addNumbers").addEventListener("click", addNumbers);
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

// Get current year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

// Assign current year to HTML element
document.getElementById("year").innerText = currentYear;

// Array variable
const numbersArray = Array.from({ length: 25 }, (_, i) => i + 1);

// Assign array to HTML element
document.getElementById("array").innerText = numbersArray.join(", ");

// Filter odd numbers
const oddNumbers = numbersArray.filter((number) => number % 2 !== 0);
document.getElementById("odds").innerText = oddNumbers.join(", ");

// Filter even numbers
const evenNumbers = numbersArray.filter((number) => number % 2 === 0);
document.getElementById("evens").innerText = evenNumbers.join(", ");

// Reduce array to sum of elements
const sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.getElementById("sumOfArray").innerText = sumOfArray;

// Map array to multiply each element by 2
const multipliedArray = numbersArray.map((number) => number * 2);
document.getElementById("multiplied").innerText = multipliedArray.join(", ");

// Sum of array elements after multiplying each element by 2
const sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number, 0);
document.getElementById("sumOfMultiplied").innerText = sumOfMultiplied;

/**
 * JavaScript Practice — Functions (30 Questions)
 * Style: ES6+, readability-first, const by default, strict equality.
 */

// ============================================================
// PART 1: Basic Functions (1–10)
// ============================================================
// 1. Prints a fixed greeting.
function greet() {
    console.log("Hello, Welcome to JavaScript!");
}
greet();

// 2. Prints the given name.
function showName(name) {
    console.log(name);
}
showName("Ada");

// 3. Returns the sum of two numbers. O(1) time, O(1) space.
function add(a, b) {
    return a + b;
}
console.log("add(2, 3) =", add(2, 3));

// 4. Returns the difference of two numbers.
function subtract(a, b) {
    return a - b;
}
console.log("subtract(5, 2) =", subtract(5, 2));

// 5. Returns the product of two numbers.
function multiply(a, b) {
    return a * b;
}
console.log("multiply(4, 3) =", multiply(4, 3));

// 6. Returns the quotient; guards against division by zero.
function divide(a, b) {
    if (b === 0) {
        console.warn("Division by zero is not allowed.");
        return null;
    }
    return a / b;
}
console.log("divide(10, 2) =", divide(10, 2));
console.log("divide(10, 0) =", divide(10, 0)); // edge case: division by zero

// 7. Returns the square of a number.
function square(number) {
    return number * number;
}
console.log("square(5) =", square(5));

// 8. Returns the cube of a number.
function cube(number) {
    return number * number * number;
}
console.log("cube(3) =", cube(3));

// 9. Returns true if the number is even.
function isEven(number) {
    return number % 2 === 0;
}
console.log("isEven(4) =", isEven(4));

// 10. Returns true if the number is odd.
function isOdd(number) {
  return number % 2 !== 0;
}
console.log("isOdd(4) =", isOdd(4));

// ============================================================
// PART 2: Functions with Conditions (11–15)
// ============================================================

// 11. Returns the larger of two numbers.
function findLargest(a, b) {
  return a >= b ? a : b;
}
console.log("findLargest(3, 7) =", findLargest(3, 7));

// 12. Returns the largest of three numbers.
function findLargestOfThree(a, b, c) {
  return Math.max(a, b, c);
}
console.log("findLargestOfThree(3, 7, 5) =", findLargestOfThree(3, 7, 5));

// 13. Returns whether a number is positive, negative, or zero.
function isPositive(number) {
  if (number > 0) return "Positive";
  if (number < 0) return "Negative";
  return "Zero";
}
console.log("isPositive(-5) =", isPositive(-5));
console.log("isPositive(0) =", isPositive(0)); // edge case: zero

// 14. Returns true if the given year is a leap year.
// Rule: divisible by 4, but not by 100 unless also divisible by 400.
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log("isLeapYear(2000) =", isLeapYear(2000)); // true (div by 400)
console.log("isLeapYear(1900) =", isLeapYear(1900)); // false (div by 100, not 400)
console.log("isLeapYear(2024) =", isLeapYear(2024)); // true (div by 4, not 100)

// 15. Returns a letter grade based on marks.
function calculateGrade(marks) {
  if (marks >= 90) return "A";
  if (marks >= 80) return "B";
  if (marks >= 70) return "C";
  if (marks >= 60) return "D";
  return "F";
}
console.log("calculateGrade(95) =", calculateGrade(95));
console.log("calculateGrade(55) =", calculateGrade(55));

// ============================================================
// PART 3: Functions with Loops (16–20)
// ============================================================
// 16. Iterative factorial. O(n) time, O(1) space.
function factorial(number) {
    if (number < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    let result = 1;
    for (let i = 2; i <= number; i += 1) {
        result *= i;
    }
    return result;
}
console.log("factorial(5) =", factorial(5));
console.log("factorial(0) =", factorial(0)); // edge case: 0! = 1

// 17. Sum of numbers from 1 to N. O(n) time, O(1) space.
// (Closed-form n*(n+1)/2 is O(1), but a loop is used here since the
// section is explicitly about loops.)
function sumToN(number) {
    let sum = 0;
    for (let i = 1; i <= number; i += 1) {
        sum += i;
    }
    return sum;
}
console.log("sumToN(10) =", sumToN(10));

// 18. Reverses the digits of a number. Handles negative numbers.
function reverseNumber(number) {
    const isNegative = number < 0;
    const digits = Math.abs(number).toString().split("").reverse().join("");
    const reversed = Number(digits);
    return isNegative ? -reversed : reversed;
}
console.log("reverseNumber(1234) =", reverseNumber(1234));
console.log("reverseNumber(-580) =", reverseNumber(-580)); // edge case: negative

// 19. Counts the number of digits in a number (ignores sign).
function countDigits(number) {
    return Math.abs(number).toString().length;
}
console.log("countDigits(98765) =", countDigits(98765));

// 20. Prints the multiplication table (1 to 10) of a number.
function multiplicationTable(number) {
  for (let i = 1; i <= 10; i += 1) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}
multiplicationTable(6);

// ============================================================
// PART 4: Arrow Functions (21–24)
// ============================================================

// 21. add() rewritten as an arrow function.
const addArrow = (a, b) => a + b;
console.log("addArrow(2, 3) =", addArrow(2, 3));

// 22. square() rewritten as an arrow function.
const squareArrow = (number) => number * number;
console.log("squareArrow(6) =", squareArrow(6));

// 23. Checks whether a number is even.
const isEvenArrow = (number) => number % 2 === 0;
console.log("isEvenArrow(7) =", isEvenArrow(7));

// 24. Converts Celsius to Fahrenheit.
const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
console.log("celsiusToFahrenheit(100) =", celsiusToFahrenheit(100));

// ============================================================
// PART 5: Function Expressions (25–26)
// ============================================================

// 25. Area of a rectangle.
const calculateRectangleArea = function (width, height) {
  return width * height;
};
console.log("calculateRectangleArea(4, 5) =", calculateRectangleArea(4, 5));

// 26. Area of a circle.
const calculateCircleArea = function (radius) {
  return Math.PI * radius * radius;
};
console.log("calculateCircleArea(3) =", calculateCircleArea(3));

// ============================================================
// PART 6: Default Parameters (27)
// ============================================================

// 27. Greets a name, defaulting to "Guest" if none is provided.
function greetWithDefault(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greetWithDefault("Sam");
greetWithDefault(); // edge case: no argument passed, defaults to "Guest"


// ============================================================
// PART 7: Rest Parameters (28)
// ============================================================

// 28. Sums any number of arguments. O(n) time, O(1) extra space.
function sumAll(...numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}
console.log("sumAll(1, 2, 3, 4) =", sumAll(1, 2, 3, 4));
console.log("sumAll() =", sumAll()); // edge case: no arguments, sums to 0

// ============================================================
// PART 8: Callback Functions (29)
// ============================================================

// Individual operation functions, each usable as a standalone callback.
const addOperation = (a, b) => a + b;
const subtractOperation = (a, b) => a - b;
const multiplyOperation = (a, b) => a * b;
const divideOperation = (a, b) => (b === 0 ? null : a / b);

// calculate() delegates the actual math to whichever operation is passed in.
function calculate(a, b, operation) {
  return operation(a, b);
}
console.log("calculate(6, 3, addOperation) =", calculate(6, 3, addOperation));
console.log("calculate(6, 3, subtractOperation) =", calculate(6, 3, subtractOperation));
console.log("calculate(6, 3, multiplyOperation) =", calculate(6, 3, multiplyOperation));
console.log("calculate(6, 3, divideOperation) =", calculate(6, 3, divideOperation));
console.log("calculate(6, 0, divideOperation) =", calculate(6, 0, divideOperation)); // edge case

// ============================================================
// PART 9: Recursion (30)
// ============================================================

// 30. Recursive factorial. O(n) time, O(n) space (call stack depth).
function factorialRecursive(number) {
  if (number < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * factorialRecursive(number - 1);
}
console.log("factorialRecursive(5) =", factorialRecursive(5));

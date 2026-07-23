/**
 * JavaScript Basics — 30 Practice Questions
 * ------------------------------------------
 * Run this file in a BROWSER console (uses `prompt()` for user input).
 *
 * If you're running this in Node.js instead, replace every `prompt("...")`
 * call with a synchronous input method, e.g. using the "readline-sync" package:
 *   const readlineSync = require("readline-sync");
 *   const value = readlineSync.question("Enter something: ");
 */

// ============================================================
// 1. Declare `name` with let and print it
// ============================================================
let name = "Kallol";
console.log("1) name:", name);

// ============================================================
// 2. Declare a constant PI
// ============================================================
const PI = 3.14159;
console.log("2) PI:", PI);

// ============================================================
// 3. Personal info variables
// ============================================================
const age = 20;
const height = 175; // in cm
const isStudent = true;
const favoriteColor = "blue";
console.log(
  "3) age:",
  age,
  "| height:",
  height,
  "| isStudent:",
  isStudent,
  "| favoriteColor:",
  favoriteColor,
);

// ============================================================
// 4. One variable per primitive data type
// ============================================================
const stringExample = "Hello, JavaScript!";
const numberExample = 42;
const booleanExample = true;
const undefinedExample = undefined;
const nullExample = null;
const bigIntExample = 123456789012345678901234567890n;
const symbolExample = Symbol("id");

console.log("4) String:", stringExample);
console.log("4) Number:", numberExample);
console.log("4) Boolean:", booleanExample);
console.log("4) Undefined:", undefinedExample);
console.log("4) Null:", nullExample);
console.log("4) BigInt:", bigIntExample);
console.log("4) Symbol:", symbolExample.toString());

// ============================================================
// 5. typeof checks
// ============================================================
console.log("5) typeof 'Hello':", typeof "Hello");
console.log("5) typeof 25:", typeof 25);
console.log("5) typeof true:", typeof true);
console.log("5) typeof undefined:", typeof undefined);
console.log("5) typeof null:", typeof null); // Note: "object" — a well-known JS quirk
console.log("5) typeof 123n:", typeof 123n);
console.log("5) typeof Symbol('id'):", typeof Symbol("id"));

// ============================================================
// 6. Greet the user by name
// ============================================================
const userName = prompt("Enter your name:");
console.log(`6) Hello, ${userName}!`);

// ============================================================
// 7. Print the user's age
// ============================================================
const userAge = prompt("Enter your age:");
console.log(`7) You are ${userAge} years old.`);

// ============================================================
// 8. Sum of two numbers from the user
// ============================================================
const firstNumber = Number(prompt("Enter the first number:"));
const secondNumber = Number(prompt("Enter the second number:"));
console.log(`8) Sum: ${firstNumber + secondNumber}`);

// ============================================================
// 9. Product of two decimal numbers from the user
// ============================================================
const firstDecimal = parseFloat(prompt("Enter the first decimal number:"));
const secondDecimal = parseFloat(prompt("Enter the second decimal number:"));
console.log(`9) Product: ${firstDecimal * secondDecimal}`);

// ============================================================
// 10. Full name from first and last name
// ============================================================
const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");
const fullName = `${firstName} ${lastName}`;
console.log(`10) Full name: ${fullName}`);

// ============================================================
// 11. Arithmetic operators on two numbers
// ============================================================
const numA = 15;
const numB = 4;
console.log("11) Sum:", numA + numB);
console.log("11) Difference:", numA - numB);
console.log("11) Product:", numA * numB);
console.log("11) Quotient:", numA / numB);
console.log("11) Remainder:", numA % numB);

// ============================================================
// 12 & 13. Rectangle area and perimeter
// ============================================================
const rectangleWidth = 8;
const rectangleHeight = 5;
const rectangleArea = rectangleWidth * rectangleHeight;
const rectanglePerimeter = 2 * (rectangleWidth + rectangleHeight);
console.log("12) Rectangle area:", rectangleArea);
console.log("13) Rectangle perimeter:", rectanglePerimeter);

// ============================================================
// 14. Circle area
// ============================================================
const circleRadius = 7;
const circleArea = PI * circleRadius ** 2;
console.log("14) Circle area:", circleArea.toFixed(2));

// ============================================================
// 15. Celsius to Fahrenheit
// ============================================================
const celsius = 25;
const fahrenheit = celsius * (9 / 5) + 32;
console.log("15) Fahrenheit:", fahrenheit);

// ============================================================
// 16. Assignment operators
// ============================================================
let x = 10;
console.log("16) Initial x:", x);

x += 5; // x = x + 5
console.log("16) After += 5:", x);

x -= 3; // x = x - 3
console.log("16) After -= 3:", x);

x *= 2; // x = x * 2
console.log("16) After *= 2:", x);

x /= 4; // x = x / 4
console.log("16) After /= 4:", x);

x %= 3; // x = x % 3
console.log("16) After %= 3:", x);

// ============================================================
// 17. Comparison operators
// ============================================================
const compareA = 10;
const compareB = "10";

console.log("17) compareA > compareB:", compareA > compareB);
console.log("17) compareA < compareB:", compareA < compareB);
console.log("17) compareA >= compareB:", compareA >= compareB);
console.log("17) compareA <= compareB:", compareA <= compareB);
console.log("17) compareA == compareB:", compareA == compareB); // loose: true (type coercion)
console.log("17) compareA === compareB:", compareA === compareB); // strict: false (different types)
console.log("17) compareA != compareB:", compareA != compareB);
console.log("17) compareA !== compareB:", compareA !== compareB);

// ============================================================
// 18. Logical operators
// ============================================================
const isLoggedIn = true;
const hasPermission = false;

console.log("18) AND (&&):", isLoggedIn && hasPermission);
console.log("18) OR (||):", isLoggedIn || hasPermission);
console.log("18) NOT (!):", !isLoggedIn);

// ============================================================
// 19. String basics
// ============================================================
const greetingMessage = "Hello, World!";
console.log("19) Length:", greetingMessage.length);
console.log("19) First character:", greetingMessage[0]);
console.log("19) Last character:", greetingMessage[greetingMessage.length - 1]);

// ============================================================
// 20. Concatenation without template literals
// ============================================================
const wordOne = "Java";
const wordTwo = "Script";
const concatenatedPlus = wordOne + wordTwo;
console.log("20) Concatenated (+ operator):", concatenatedPlus);

// ============================================================
// 21. Concatenation with template literals
// ============================================================
const concatenatedTemplate = `${wordOne}${wordTwo}`;
console.log("21) Concatenated (template literal):", concatenatedTemplate);

// ============================================================
// 22. String to Number
// ============================================================
const numericString = "25";
const convertedNumber = Number(numericString);
console.log(
  "22) Converted value:",
  convertedNumber,
  "| type:",
  typeof convertedNumber,
);

// ============================================================
// 23. Number to String
// ============================================================
const originalNumber = 100;
const convertedString = String(originalNumber);
console.log(
  "23) Converted value:",
  convertedString,
  "| type:",
  typeof convertedString,
);

// ============================================================
// 24. Convert values to Boolean
// ============================================================
console.log("24) Boolean(0):", Boolean(0));
console.log("24) Boolean(1):", Boolean(1));
console.log('24) Boolean(""):', Boolean(""));
console.log('24) Boolean("Hello"):', Boolean("Hello"));
console.log("24) Boolean(null):", Boolean(null));
console.log("24) Boolean(undefined):", Boolean(undefined));

// ============================================================
// 25. Math object
// ============================================================
const mathSampleNumber = 16.7;
console.log("25) Square root:", Math.sqrt(mathSampleNumber));
console.log("25) Power of 2:", mathSampleNumber ** 2);
console.log("25) Rounded:", Math.round(mathSampleNumber));
console.log("25) Floor:", Math.floor(mathSampleNumber));
console.log("25) Ceiling:", Math.ceil(mathSampleNumber));

// Random integer between 1 and 10 (inclusive)
const randomNumberBetween1And10 = Math.floor(Math.random() * 10) + 1;
console.log("25) Random (1-10):", randomNumberBetween1And10);

// ============================================================
// 26. Constants
// ============================================================
const COUNTRY = "India";
const BIRTH_YEAR = 2005;
const MAXIMUM_SCORE = 100;
console.log(
  "26) Country:",
  COUNTRY,
  "| Birth Year:",
  BIRTH_YEAR,
  "| Max Score:",
  MAXIMUM_SCORE,
);

// ============================================================
// 27. Template literal sentence
// ============================================================
const personName = "Kallol";
const personAge = 20;
const personCity = "Kolkata";
console.log(
  `27) ${personName} is ${personAge} years old and lives in ${personCity}.`,
);

// ============================================================
// 28. Swap two variables without a third variable
// ============================================================
let swapA = 5;
let swapB = 10;
console.log("28) Before swap:", swapA, swapB);

[swapA, swapB] = [swapB, swapA]; // array destructuring swap

console.log("28) After swap:", swapA, swapB);

// ============================================================
// 29. Total and average marks
// ============================================================
const subjectMarks = [85, 90, 78, 92, 88]; // 5 subjects
const totalMarks = subjectMarks.reduce((sum, mark) => sum + mark, 0);
const averageMarks = totalMarks / subjectMarks.length;
console.log("29) Total marks:", totalMarks);
console.log("29) Average marks:", averageMarks.toFixed(2));

// ============================================================
// 30. Student Information Card
// ============================================================
const studentName = "Kallol";
const studentAge = 20;
const studentCourse = "JavaScript";
const studentCity = "Kolkata";

const studentInfoCard = `
===== Student Information =====
Name   : ${studentName}
Age    : ${studentAge}
Course : ${studentCourse}
City   : ${studentCity}
==============================
`;
console.log("30)", studentInfoCard);

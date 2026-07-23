/**
 * JavaScript Practice — Conditions & Loops (30 Questions)
 * ---------------------------------------------------------
 * Each answer is written as a small, pure, named function so it can be:
 *   - reused
 *   - tested independently with console.log/console.assert
 *   - called with real user input via prompt() in a browser, if desired
 *
 * A small helper (`getNumberFromUser`) avoids repeating the
 * "prompt + parse + validate" pattern across every question (DRY).
 *
 * Run this file in a browser console. To use prompt()-driven input,
 * uncomment the calls in the "Interactive demo" section at the bottom.
 */

// ------------------------------------------------------------
// Shared helper (used only by the optional interactive section)
// ------------------------------------------------------------
function getNumberFromUser(message) {
  return Number(prompt(message));
}

// ==============================================================
// PART 1: BASIC CONDITIONS (1–10)
// ==============================================================

// 1. Positive, negative, or zero
// Once you return inside an if, the function exits immediately — the code below never runs. So writing else is redundant. This is a common pattern called "guard clauses".
function checkNumberSign(number) {
  if (number > 0) return "positive"; // function exits here if true
  if (number < 0) return "negative"; // only reached if the above was false
  return "zero"; // only reached if both above were false
}
console.log("1)", checkNumberSign(5)); // "positive"
console.log("1)", checkNumberSign(-3)); // "negative"
console.log("1)", checkNumberSign(0)); // "zero" (edge case)

// 2. Even or odd
function checkEvenOrOdd(number) {
  return number % 2 === 0 ? "even" : "odd";
}
console.log("2)", checkEvenOrOdd(4)); // "even"
console.log("2)", checkEvenOrOdd(7)); // "odd"
console.log("2)", checkEvenOrOdd(0)); // "even" (edge case)

// 3. Voting eligibility
function isEligibleToVote(age) {
  return age >= 18;
}
console.log("3)", isEligibleToVote(20)); // true
console.log("3)", isEligibleToVote(17)); // false
console.log("3)", isEligibleToVote(18)); // true (boundary edge case)

// 4. Larger of two numbers
function findLarger(firstNumber, secondNumber) {
  return firstNumber >= secondNumber ? firstNumber : secondNumber;
}
console.log("4)", findLarger(10, 20)); // 20
console.log("4)", findLarger(5, 5)); // 5 (equal values edge case)

// 5. Largest of three numbers
function findLargestOfThree(a, b, c) {
  return Math.max(a, b, c);
}
console.log("5)", findLargestOfThree(3, 9, 6)); // 9
console.log("5)", findLargestOfThree(-1, -5, -2)); // -1 (all negative edge case)

// 6. Leap year check
function isLeapYear(year) {
  // Divisible by 4 AND (not divisible by 100 OR divisible by 400)
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log("6)", isLeapYear(2024)); // true
console.log("6)", isLeapYear(1900)); // false (divisible by 100 but not 400 — classic edge case)
console.log("6)", isLeapYear(2000)); // true (divisible by 400)

// 7. Vowel or consonant
function classifyCharacter(character) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  return vowels.has(character.toLowerCase()) ? "vowel" : "consonant";
}
console.log("7)", classifyCharacter("A")); // "vowel" (case-insensitive edge case)
console.log("7)", classifyCharacter("z")); // "consonant"

// 8. Divisible by both 3 and 5
function isDivisibleBy3And5(number) {
  return number % 3 === 0 && number % 5 === 0;
}
console.log("8)", isDivisibleBy3And5(15)); // true
console.log("8)", isDivisibleBy3And5(9)); // false

// 9. Grade from marks
function getGrade(marks) {
  if (marks >= 90) return "A";
  if (marks >= 80) return "B";
  if (marks >= 70) return "C";
  if (marks >= 60) return "D";
  return "F";
}
console.log("9)", getGrade(95)); // "A"
console.log("9)", getGrade(60)); // "D" (lower boundary edge case)
console.log("9)", getGrade(59)); // "F" (just below boundary)

// 10. Month name from number
function getMonthName(monthNumber) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (monthNumber < 1 || monthNumber > 12) return "Invalid month";
  return monthNames[monthNumber - 1];
}
console.log("10)", getMonthName(1)); // "January"
console.log("10)", getMonthName(12)); // "December"
console.log("10)", getMonthName(13)); // "Invalid month" (out-of-range edge case)

// ==============================================================
// PART 2: SWITCH STATEMENT (11–15)
// ==============================================================

// 11. Simple calculator
function calculate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      if (secondNumber === 0) return "Error: Division by zero";
      return firstNumber / secondNumber;
    default:
      return "Error: Unsupported operator";
  }
}
console.log("11)", calculate(10, 5, "+")); // 15
console.log("11)", calculate(10, 0, "/")); // "Error: Division by zero" (edge case)
console.log("11)", calculate(10, 5, "^")); // "Error: Unsupported operator"

// 12. Day name from number
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day";
  }
}
console.log("12)", getDayName(1)); // "Monday"
console.log("12)", getDayName(8)); // "Invalid day" (edge case)

// 13. Traffic light action
function getTrafficLightAction(color) {
  switch (color.toLowerCase()) {
    case "red":
      return "Stop";
    case "yellow":
      return "Slow down";
    case "green":
      return "Go";
    default:
      return "Invalid color";
  }
}
console.log("13)", getTrafficLightAction("Red")); // "Stop"
console.log("13)", getTrafficLightAction("purple")); // "Invalid color" (edge case)

// 14. Browser welcome message
function getBrowserWelcomeMessage(browserName) {
  switch (browserName.toLowerCase()) {
    case "chrome":
      return "Welcome to Google Chrome!";
    case "firefox":
      return "Welcome to Mozilla Firefox!";
    case "edge":
      return "Welcome to Microsoft Edge!";
    case "safari":
      return "Welcome to Apple Safari!";
    default:
      return "Unknown browser.";
  }
}
console.log("14)", getBrowserWelcomeMessage("Chrome")); // "Welcome to Google Chrome!"
console.log("14)", getBrowserWelcomeMessage("Opera")); // "Unknown browser." (edge case)

// 15. Fruit color
function getFruitColor(fruitName) {
  switch (fruitName.toLowerCase()) {
    case "banana":
      return "Yellow";
    case "apple":
      return "Red";
    case "grape":
      return "Purple";
    case "orange":
      return "Orange";
    default:
      return "Unknown fruit";
  }
}
console.log("15)", getFruitColor("Apple")); // "Red"
console.log("15)", getFruitColor("Mango")); // "Unknown fruit" (edge case)

// ==============================================================
// PART 3: TERNARY OPERATOR (16–18)
// ==============================================================

// 16. Even or odd (ternary)
const evenOrOddTernary = (number) => (number % 2 === 0 ? "even" : "odd");
console.log("16)", evenOrOddTernary(6)); // "even"
console.log("16)", evenOrOddTernary(3)); // "odd"

// 17. Voting eligibility (ternary)
const voteEligibilityTernary = (age) =>
  age >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log("17)", voteEligibilityTernary(18)); // "Eligible to vote" (boundary edge case)

// 18. Larger of two numbers (ternary)
const largerNumberTernary = (a, b) => (a >= b ? a : b);
console.log("18)", largerNumberTernary(7, 12)); // 12

// ==============================================================
// PART 4: FOR LOOP (19–24)
// ==============================================================
// Note: all loop-based functions below run in O(n) time and O(1) extra
// space, where n is the size of the range/input being processed.

// 19. Print numbers from 1 to 10
function printNumbersAscending() {
  for (let i = 1; i <= 10; i += 1) {
    console.log(i);
  }
}
console.log("19) printNumbersAscending():");
printNumbersAscending();

// 20. Print numbers from 10 to 1
function printNumbersDescending() {
  for (let i = 10; i >= 1; i -= 1) {
    console.log(i);
  }
}
console.log("20) printNumbersDescending():");
printNumbersDescending();

// 21. Print all even numbers from 1 to 100
function printEvenNumbersUpTo(limit) {
  for (let i = 2; i <= limit; i += 2) {
    console.log(i);
  }
}
console.log("21) printEvenNumbersUpTo(100): (see console for full output)");
printEvenNumbersUpTo(100);

// 22. Print all odd numbers from 1 to 100
function printOddNumbersUpTo(limit) {
  for (let i = 1; i <= limit; i += 2) {
    console.log(i);
  }
}
console.log("22) printOddNumbersUpTo(100): (see console for full output)");
printOddNumbersUpTo(100);

// 23. Sum of numbers from 1 to N
function sumFromOneToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 1) {
    sum += i;
  }
  return sum;
}
console.log("23)", sumFromOneToN(10)); // 55
console.log("23)", sumFromOneToN(0)); // 0 (edge case: loop never runs)

// 24. Multiplication table of a given number
function printMultiplicationTable(number, upTo = 10) {
  for (let i = 1; i <= upTo; i += 1) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}
console.log("24) printMultiplicationTable(5):");
printMultiplicationTable(5);

// ==============================================================
// PART 5: WHILE LOOP (25–27)
// ==============================================================

// 25. Print numbers from 1 to N using while
function printNumbersUpToNWhileLoop(n) {
  let current = 1;
  while (current <= n) {
    console.log(current);
    current += 1;
  }
}
console.log("25) printNumbersUpToNWhileLoop(5):");
printNumbersUpToNWhileLoop(5);

// 26. Factorial using while loop
function calculateFactorial(n) {
  if (n < 0) return "Error: Factorial is undefined for negative numbers";
  let result = 1;
  let counter = n;
  while (counter > 1) {
    result *= counter;
    counter -= 1;
  }
  return result;
}
console.log("26)", calculateFactorial(5)); // 120
console.log("26)", calculateFactorial(0)); // 1 (edge case: 0! = 1)
console.log("26)", calculateFactorial(-3)); // "Error: ..." (edge case)

// 27. Reverse the digits of a number using while
function reverseDigits(number) {
  const isNegative = number < 0;
  let remainingDigits = Math.abs(number);
  let reversedNumber = 0;

  while (remainingDigits > 0) {
    const lastDigit = remainingDigits % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    remainingDigits = Math.floor(remainingDigits / 10);
  }

  return isNegative ? -reversedNumber : reversedNumber;
}
console.log("27)", reverseDigits(1234)); // 4321
console.log("27)", reverseDigits(-120)); // -21 (negative + trailing-zero edge case)
console.log("27)", reverseDigits(0)); // 0 (edge case: loop never runs)

// ==============================================================
// PART 6: NESTED LOOPS (28–30)
// ==============================================================

// 28. Ascending star pattern
function printAscendingStarPattern(rows) {
  for (let row = 1; row <= rows; row += 1) {
    console.log("*".repeat(row));
  }
}
console.log("28) printAscendingStarPattern(5):");
printAscendingStarPattern(5);

// 29. Descending star pattern
function printDescendingStarPattern(rows) {
  for (let row = rows; row >= 1; row -= 1) {
    console.log("*".repeat(row));
  }
}
console.log("29) printDescendingStarPattern(5):");
printDescendingStarPattern(5);

// 30. Multiplication table grid (1 to 10) using nested loops
function printMultiplicationTableGrid(upTo = 10) {
  for (let row = 1; row <= upTo; row += 1) {
    let rowOutput = "";
    for (let col = 1; col <= upTo; col += 1) {
      rowOutput += `${row * col}\t`;
    }
    console.log(rowOutput);
  }
}
console.log("30) printMultiplicationTableGrid():");
printMultiplicationTableGrid();

// ==============================================================
// Interactive demo (optional — requires a browser environment)
// ==============================================================
// Uncomment to try with real prompt() input:
//
// const userNumber = getNumberFromUser("Enter a number:");
// console.log(checkNumberSign(userNumber));
//
// const userAge = getNumberFromUser("Enter your age:");
// console.log(voteEligibilityTernary(userAge));

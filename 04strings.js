/**
 * JavaScript Practice — Strings (30 Questions)
 * Style: ES6+, readability-first, const by default, strict equality.
 */

// ============================================================
// PART 1: String Basics (1–5)
// ============================================================

// 1. A string containing a full name, printed directly.
const fullName = "Ada Lovelace";
console.log(fullName);
// Output: Ada Lovelace

// 2. Length, first character, and last character of a string.
function describeString(str) {
  console.log("Length:", str.length);
  console.log("First character:", str[0]);
  console.log("Last character:", str[str.length - 1]);
}
describeString("JavaScript");
// Output:
// Length: 10
// First character: J
// Last character: t

// 3. Greets a user by name.
// (In a browser this would use `prompt('Enter your name:')`;
// here the name is passed in directly since Node has no prompt().)
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}
greetUser("Sam");
// Output: Hello, Sam!

// 4. Prints every character of a string using a loop.
function printEachCharacter(str) {
  for (let i = 0; i < str.length; i += 1) {
    console.log(str[i]);
  }
}
printEachCharacter("Hi!");
// Output:
// H
// i
// !

// 5. Counts characters without using .length.
function countCharacters(str) {
  let count = 0;
  // eslint-disable-next-line no-unused-vars
  for (const character of str) {
    count += 1;
  }
  return count;
}
console.log(countCharacters("JavaScript"));
// Output: 10

// ============================================================
// PART 2: String Case Methods (6–8)
// ============================================================

// 6. Converts a string to uppercase.
function toUpperCase(str) {
  return str.toUpperCase();
}
console.log(toUpperCase("hello world"));
// Output: HELLO WORLD

// 7. Converts a string to lowercase.
function toLowerCase(str) {
  return str.toLowerCase();
}
console.log(toLowerCase("HELLO WORLD"));
// Output: hello world

// 8. Capitalizes the first letter of a string.
function capitalizeFirstLetter(str) {
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter("javascript"));
// Output: Javascript

// ============================================================
// PART 3: Searching in Strings (9–12)
// ============================================================

// 9. Checks whether a string contains a specific word.
function containsWord(str, word) {
  return str.includes(word);
}
console.log(containsWord("I love JavaScript programming.", "JavaScript"));
// Output: true

// 10. Finds the first occurrence index of a character.
function findFirstOccurrence(str, char) {
  return str.indexOf(char);
}
console.log(findFirstOccurrence("javascript", "a"));
// Output: 1

// 11. Finds the last occurrence index of a character.
function findLastOccurrence(str, char) {
  return str.lastIndexOf(char);
}
console.log(findLastOccurrence("javascript", "a"));
// Output: 3

// 12. Counts how many times a character appears in a string.
function countCharacterOccurrences(str, char) {
  let count = 0;
  for (const currentChar of str) {
    if (currentChar === char) {
      count += 1;
    }
  }
  return count;
}
console.log(countCharacterOccurrences("javascript", "a"));
// Output: 2

// ============================================================
// PART 4: Extracting Strings (13–15)
// ============================================================

// 13. Extracts the first five characters of a string.
function firstFiveCharacters(str) {
  return str.slice(0, 5);
}
console.log(firstFiveCharacters("JavaScript"));
// Output: JavaS

// 14. Extracts the last five characters of a string.
function lastFiveCharacters(str) {
  return str.slice(-5);
}
console.log(lastFiveCharacters("JavaScript"));
// Output: cript

// 15. Extracts a specific word from the middle of a sentence.
function extractWordAt(sentence, wordIndex) {
  const words = sentence.split(" ");
  return words[wordIndex];
}
console.log(extractWordAt("I love JavaScript programming.", 2));
// Output: JavaScript

// ============================================================
// PART 5: Replacing Strings (16–18)
// ============================================================

// 16. Replaces the first occurrence of one word with another.
function replaceWord(str, target, replacement) {
  return str.replace(target, replacement);
}
console.log(replaceWord("I like Java.", "Java", "JavaScript"));
// Output: I like JavaScript.

// 17. Replaces all occurrences of a word in a sentence.
function replaceAllOccurrences(str, target, replacement) {
  return str.replaceAll(target, replacement);
}
console.log(
  replaceAllOccurrences("Java is great. Java is popular.", "Java", "JS"),
);
// Output: JS is great. JS is popular.

// 18. Removes all spaces from a string.
function removeAllSpaces(str) {
  return str.replaceAll(" ", "");
}
console.log(removeAllSpaces("I love JavaScript"));
// Output: IloveJavaScript

// ============================================================
// PART 6: Splitting & Joining (19–21)
// ============================================================

// 19. Splits a sentence into an array of words.
function splitIntoWords(sentence) {
  return sentence.split(" ");
}
console.log(splitIntoWords("I love JavaScript programming"));
// Output: [ 'I', 'love', 'JavaScript', 'programming' ]

// 20. Counts how many words are in a sentence.
function countWords(sentence) {
  return sentence.trim().split(/\s+/).length;
}
console.log(countWords("I love JavaScript programming"));
// Output: 4

// 21. Joins an array of words into a single sentence.
function joinWords(words) {
  return words.join(" ");
}
console.log(joinWords(["I", "love", "JavaScript"]));
// Output: I love JavaScript

// ============================================================
// PART 7: Comparing Strings (22–23)
// ============================================================

// 22. Checks whether two strings are exactly equal.
function areStringsEqual(str1, str2) {
  return str1 === str2;
}
console.log(areStringsEqual("hello", "hello"));
// Output: true
console.log(areStringsEqual("hello", "Hello"));
// Output: false

// 23. Compares two strings ignoring letter case.
function areStringsEqualIgnoreCase(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringsEqualIgnoreCase("Hello", "hello"));
// Output: true

// ============================================================
// PART 8: String Validation (24–26)
// ============================================================

// 24. Checks whether a string starts with a given word.
function startsWithWord(str, word) {
  return str.startsWith(word);
}
console.log(startsWithWord("JavaScript is fun", "JavaScript"));
// Output: true

// 25. Checks whether a string ends with a given word.
function endsWithWord(str, word) {
  return str.endsWith(word);
}
console.log(endsWithWord("JavaScript is fun", "fun"));
// Output: true

// 26. Checks whether a string is empty or only whitespace.
function isBlank(str) {
  return str.trim().length === 0;
}
console.log(isBlank("   "));
// Output: true
console.log(isBlank("hi"));
// Output: false

// ============================================================
// PART 9: String Manipulation Challenges (27–29)
// ============================================================

// 27. Reverses a string without using .reverse(). O(n) time, O(n) space.
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("hello"));
// Output: olleh

// 28. Checks whether a string is a palindrome (case-insensitive).
function isPalindrome(str) {
  const normalized = str.toLowerCase();
  const reversed = reverseString(normalized);
  return normalized === reversed;
}
console.log(isPalindrome("madam"));
// Output: true
console.log(isPalindrome("racecar"));
// Output: true
console.log(isPalindrome("hello"));
// Output: false

// 29. Counts uppercase, lowercase, digit, and special characters.
function analyzeCharacterTypes(str) {
  const counts = {
    uppercase: 0,
    lowercase: 0,
    digits: 0,
    specialCharacters: 0,
  };

  for (const char of str) {
    if (/[A-Z]/.test(char)) {
      counts.uppercase += 1;
    } else if (/[a-z]/.test(char)) {
      counts.lowercase += 1;
    } else if (/[0-9]/.test(char)) {
      counts.digits += 1;
    } else if (char !== " ") {
      counts.specialCharacters += 1;
    }
  }

  return counts;
}
console.log(analyzeCharacterTypes("Hello World123!"));
// Output: { uppercase: 2, lowercase: 8, digits: 3, specialCharacters: 1 }

// ============================================================
// PART 10: Mini Challenge (30)
// ============================================================

// 30. Password Strength Checker.
// Weak: fails one or more basic rules.
// Medium: meets all basic rules but is shorter than 12 characters.
// Strong: meets all basic rules and is 12+ characters long.
function checkPasswordStrength(password) {
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSpecialCharacter = /[^A-Za-z0-9]/.test(password);

  const meetsAllBasicRules =
    hasMinLength &&
    hasUppercase &&
    hasLowercase &&
    hasDigit &&
    hasSpecialCharacter;

  if (!meetsAllBasicRules) {
    return "Weak";
  }
  return password.length >= 12 ? "Strong" : "Medium";
}
console.log(checkPasswordStrength("abc"));
// Output: Weak
console.log(checkPasswordStrength("Abcdef1!"));
// Output: Medium
console.log(checkPasswordStrength("Abcdefghij1!"));
// Output: Strong



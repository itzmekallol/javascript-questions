/**
 * JavaScript Practice — Arrays (50 Questions)
 * Style: ES6+, readability-first, const by default, strict equality.
 */

// ============================================================
// PART 1: Array Basics (1–8)
// ============================================================

// 1. An array of five numbers, printed in full.
const numbers = [10, 25, 3, 47, 18];
console.log(numbers);
// Output: [ 10, 25, 3, 47, 18 ]

// 2. First element of an array.
function getFirstElement(arr) {
  return arr[0];
}
console.log(getFirstElement(numbers));
// Output: 10

// 3. Last element of an array.
function getLastElement(arr) {
  return arr[arr.length - 1];
}
console.log(getLastElement(numbers));
// Output: 18

// 4. Length of an array.
function getArrayLength(arr) {
  return arr.length;
}
console.log(getArrayLength(numbers));
// Output: 5

// 5. Loop through an array and print each element.
function printAllElements(arr) {
  for (const element of arr) {
    console.log(element);
  }
}
printAllElements(numbers);
// Output:
// 10
// 25
// 3
// 47
// 18

// 6. Sum of all numbers in an array. O(n) time, O(1) space.
function sumArray(arr) {
  return arr.reduce((total, current) => total + current, 0);
}
console.log(sumArray(numbers));
// Output: 103

// 7. Average of all numbers in an array.
function averageArray(arr) {
  if (arr.length === 0) return 0;
  return sumArray(arr) / arr.length;
}
console.log(averageArray(numbers));
// Output: 20.6

// 8. Largest element in an array.
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax(numbers));
// Output: 47

// ============================================================
// PART 2: Array CRUD Operations (9–16)
// ============================================================

// 9. Add an element to the end (mutates and returns the array).
function addToEnd(arr, value) {
  arr.push(value);
  return arr;
}
console.log(addToEnd([1, 2, 3], 4));
// Output: [ 1, 2, 3, 4 ]

// 10. Add an element to the beginning.
function addToBeginning(arr, value) {
  arr.unshift(value);
  return arr;
}
console.log(addToBeginning([2, 3, 4], 1));
// Output: [ 1, 2, 3, 4 ]

// 11. Remove the last element.
function removeLast(arr) {
  arr.pop();
  return arr;
}
console.log(removeLast([1, 2, 3, 4]));
// Output: [ 1, 2, 3 ]

// 12. Remove the first element.
function removeFirst(arr) {
  arr.shift();
  return arr;
}
console.log(removeFirst([1, 2, 3, 4]));
// Output: [ 2, 3, 4 ]

// 13. Insert an element at a specific index.
function insertAtIndex(arr, index, value) {
  arr.splice(index, 0, value);
  return arr;
}
console.log(insertAtIndex([1, 2, 4, 5], 2, 3));
// Output: [ 1, 2, 3, 4, 5 ]

// 14. Remove an element from a specific index.
function removeAtIndex(arr, index) {
  arr.splice(index, 1);
  return arr;
}
console.log(removeAtIndex([1, 2, 3, 4, 5], 2));
// Output: [ 1, 2, 4, 5 ]

// 15. Replace an element at a specific index.
function replaceAtIndex(arr, index, value) {
  arr[index] = value;
  return arr;
}
console.log(replaceAtIndex([1, 2, 99, 4], 2, 3));
// Output: [ 1, 2, 3, 4 ]

// 16. Clear all elements from an array.
function clearArray(arr) {
  arr.length = 0;
  return arr;
}
console.log(clearArray([1, 2, 3]));
// Output: []

// ============================================================
// PART 3: Searching (17–22)
// ============================================================

// 17. Check whether an array contains a given value.
function containsValue(arr, value) {
  return arr.includes(value);
}
console.log(containsValue([1, 2, 3], 2));
// Output: true

// 18. Find the index of a given value.
function findIndexOfValue(arr, value) {
  return arr.indexOf(value);
}
console.log(findIndexOfValue([10, 20, 30], 20));
// Output: 1

// 19. Find the last occurrence index of a value.
function findLastIndexOfValue(arr, value) {
  return arr.lastIndexOf(value);
}
console.log(findLastIndexOfValue([1, 2, 3, 2, 1], 2));
// Output: 3

// 20. Count how many times a value appears in an array.
function countOccurrences(arr, value) {
  return arr.filter((element) => element === value).length;
}
console.log(countOccurrences([1, 2, 2, 3, 2], 2));
// Output: 3

// 21. Find the smallest number in an array.
function findMin(arr) {
  return Math.min(...arr);
}
console.log(findMin([5, 3, 8, 1, 9]));
// Output: 1

// 22. Find the second largest number in an array.
// Sorting is O(n log n) — simple and readable for typical input sizes.
// (A single-pass O(n) scan is possible but adds complexity for little gain here.)
function findSecondLargest(arr) {
  const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
  return uniqueSorted[1];
}
console.log(findSecondLargest([5, 3, 8, 1, 9]));
// Output: 8

// ============================================================
// PART 4: Array Methods (23–30)
// ============================================================

// 23. Reverse an array without using .reverse(). O(n) time, O(n) space.
function reverseArrayManually(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log(reverseArrayManually([1, 2, 3, 4]));
// Output: [ 4, 3, 2, 1 ]

// 24. Reverse an array using .reverse() (does not mutate the input).
function reverseArray(arr) {
  return [...arr].reverse();
}
console.log(reverseArray([1, 2, 3, 4]));
// Output: [ 4, 3, 2, 1 ]

// 25. Sort an array in ascending order (does not mutate the input).
function sortAscending(arr) {
  return [...arr].sort((a, b) => a - b);
}
console.log(sortAscending([5, 2, 8, 1]));
// Output: [ 1, 2, 5, 8 ]

// 26. Sort an array in descending order.
function sortDescending(arr) {
  return [...arr].sort((a, b) => b - a);
}
console.log(sortDescending([5, 2, 8, 1]));
// Output: [ 8, 5, 2, 1 ]

// 27. Create a copy of an array (shallow copy).
function copyArray(arr) {
  return [...arr];
}
console.log(copyArray([1, 2, 3]));
// Output: [ 1, 2, 3 ]

// 28. Merge two arrays into one.
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2], [3, 4]));
// Output: [ 1, 2, 3, 4 ]

// 29. Extract a portion of an array.
function extractPortion(arr, startIndex, endIndex) {
  return arr.slice(startIndex, endIndex);
}
console.log(extractPortion([1, 2, 3, 4, 5], 1, 4));
// Output: [ 2, 3, 4 ]

// 30. Remove duplicate values from an array.
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 1, 4]));
// Output: [ 1, 2, 3, 4 ]

// ============================================================
// PART 5: Higher-Order Methods (31–38)
// ============================================================

// 31. Double every number using .map().
function doubleAll(arr) {
  return arr.map((number) => number * 2);
}
console.log(doubleAll([1, 2, 3]));
// Output: [ 2, 4, 6 ]

// 32. Convert an array of names to uppercase using .map().
function toUppercaseNames(names) {
  return names.map((name) => name.toUpperCase());
}
console.log(toUppercaseNames(["alice", "bob"]));
// Output: [ 'ALICE', 'BOB' ]

// 33. Get all even numbers using .filter().
function getEvenNumbers(arr) {
  return arr.filter((number) => number % 2 === 0);
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
// Output: [ 2, 4, 6 ]

// 34. Get all numbers greater than 50 using .filter().
function getNumbersGreaterThan50(arr) {
  return arr.filter((number) => number > 50);
}
console.log(getNumbersGreaterThan50([10, 60, 45, 90, 30]));
// Output: [ 60, 90 ]

// 35. Get the first number greater than 100 using .find().
function findFirstGreaterThan100(arr) {
  return arr.find((number) => number > 100);
}
console.log(findFirstGreaterThan100([50, 80, 150, 200]));
// Output: 150

// 36. Locate the first negative number using .findIndex().
function findFirstNegativeIndex(arr) {
  return arr.findIndex((number) => number < 0);
}
console.log(findFirstNegativeIndex([5, 3, -2, 8, -7]));
// Output: 2

// 37. Check if any number is even using .some().
function hasEvenNumber(arr) {
  return arr.some((number) => number % 2 === 0);
}
console.log(hasEvenNumber([1, 3, 5, 8]));
// Output: true

// 38. Check if all numbers are positive using .every().
function areAllPositive(arr) {
  return arr.every((number) => number > 0);
}
console.log(areAllPositive([1, 2, 3]));
// Output: true
console.log(areAllPositive([1, -2, 3]));
// Output: false

// ============================================================
// PART 6: Reduce (39–42)
// ============================================================

// 39. Sum of all numbers using .reduce().
function sumWithReduce(arr) {
  return arr.reduce((total, current) => total + current, 0);
}
console.log(sumWithReduce([1, 2, 3, 4]));
// Output: 10

// 40. Product of all numbers using .reduce().
function productWithReduce(arr) {
  return arr.reduce((product, current) => product * current, 1);
}
console.log(productWithReduce([1, 2, 3, 4]));
// Output: 24

// 41. Find the largest number using .reduce().
function maxWithReduce(arr) {
  return arr.reduce((largest, current) =>
    current > largest ? current : largest,
  );
}
console.log(maxWithReduce([5, 3, 8, 1, 9]));
// Output: 9

// 42. Count occurrences of each value in an array using .reduce().
function countAllOccurrences(arr) {
  return arr.reduce((counts, value) => {
    counts[value] = (counts[value] || 0) + 1;
    return counts;
  }, {});
}
console.log(countAllOccurrences(["a", "b", "a", "c", "b", "a"]));
// Output: { a: 3, b: 2, c: 1 }

// ============================================================
// PART 7: Arrays of Objects (43–46)
// ============================================================

const students = [
  { name: "Alice", marks: 80 },
  { name: "Bob", marks: 55 },
  { name: "Charlie", marks: 95 },
  { name: "David", marks: 65 },
];

// 43. Print the names of all students.
function getStudentNames(studentList) {
  return studentList.map((student) => student.name);
}
console.log(getStudentNames(students));
// Output: [ 'Alice', 'Bob', 'Charlie', 'David' ]

// 44. Find the student with the highest marks.
function getTopStudent(studentList) {
  return studentList.reduce((topStudent, currentStudent) =>
    currentStudent.marks > topStudent.marks ? currentStudent : topStudent,
  );
}
console.log(getTopStudent(students));
// Output: { name: 'Charlie', marks: 95 }

// 45. Get all students whose marks are >= 60.
function getPassingStudents(studentList) {
  return studentList.filter((student) => student.marks >= 60);
}
console.log(getPassingStudents(students));
// Output: [ { name: 'Alice', marks: 80 }, { name: 'Charlie', marks: 95 }, { name: 'David', marks: 65 } ]

// 46. Calculate the average marks of all students.
function getAverageMarks(studentList) {
  const totalMarks = studentList.reduce(
    (sum, student) => sum + student.marks,
    0,
  );
  return totalMarks / studentList.length;
}
console.log(getAverageMarks(students));
// Output: 73.75

// ============================================================
// PART 8: Nested Arrays (47–48)
// ============================================================

const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// 47. Print every element from a two-dimensional array.
function printMatrixElements(twoDimensionalArray) {
  for (const row of twoDimensionalArray) {
    for (const value of row) {
      console.log(value);
    }
  }
}
printMatrixElements(matrix);
// Output:
// 1
// 2
// 3
// 4
// 5
// 6

// 48. Sum of all numbers in a two-dimensional array.
function sumMatrix(twoDimensionalArray) {
  return twoDimensionalArray
    .flat()
    .reduce((total, current) => total + current, 0);
}
console.log(sumMatrix(matrix));
// Output: 21

// ============================================================
// PART 9: Real-World Challenges (49–50)
// ============================================================

// 49. Shopping Cart, implemented as a small factory function so each
// cart instance has its own private, encapsulated array of items.
function createShoppingCart() {
  const items = [];

  return {
    addItem(item) {
      items.push(item);
    },
    removeItem(item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
      }
    },
    viewItems() {
      return [...items];
    },
    countItems() {
      return items.length;
    },
    searchItem(item) {
      return items.includes(item);
    },
    clearCart() {
      items.length = 0;
    },
  };
}

const cart = createShoppingCart();
cart.addItem("Apples");
cart.addItem("Bread");
cart.addItem("Milk");
console.log(cart.viewItems());
// Output: [ 'Apples', 'Bread', 'Milk' ]
console.log(cart.countItems());
// Output: 3
console.log(cart.searchItem("Bread"));
// Output: true
cart.removeItem("Bread");
console.log(cart.viewItems());
// Output: [ 'Apples', 'Milk' ]
cart.clearCart();
console.log(cart.viewItems());
// Output: []

// 50. Student Management System, following the same encapsulated pattern.
function createStudentManagementSystem() {
  let studentRecords = [];

  return {
    addStudent(name, marks) {
      studentRecords.push({ name, marks });
    },
    deleteStudent(name) {
      studentRecords = studentRecords.filter(
        (student) => student.name !== name,
      );
    },
    updateStudent(name, newMarks) {
      const student = studentRecords.find((current) => current.name === name);
      if (student) {
        student.marks = newMarks;
      }
    },
    searchStudent(name) {
      return studentRecords.find((student) => student.name === name);
    },
    displayAllStudents() {
      return [...studentRecords];
    },
    sortByMarks() {
      return [...studentRecords].sort((a, b) => b.marks - a.marks);
    },
    getHighestScorer() {
      return studentRecords.reduce((topStudent, currentStudent) =>
        currentStudent.marks > topStudent.marks ? currentStudent : topStudent,
      );
    },
    getAverageMarks() {
      const totalMarks = studentRecords.reduce(
        (sum, student) => sum + student.marks,
        0,
      );
      return totalMarks / studentRecords.length;
    },
  };
}

const school = createStudentManagementSystem();
school.addStudent("Alice", 80);
school.addStudent("Bob", 55);
school.addStudent("Charlie", 95);
console.log(school.displayAllStudents());
// Output: [ { name: 'Alice', marks: 80 }, { name: 'Bob', marks: 55 }, { name: 'Charlie', marks: 95 } ]
school.updateStudent("Bob", 70);
console.log(school.searchStudent("Bob"));
// Output: { name: 'Bob', marks: 70 }
console.log(school.sortByMarks());
// Output: [ { name: 'Charlie', marks: 95 }, { name: 'Alice', marks: 80 }, { name: 'Bob', marks: 70 } ]
console.log(school.getHighestScorer());
// Output: { name: 'Charlie', marks: 95 }
console.log(school.getAverageMarks());
// Output: 81.66666666666667
school.deleteStudent("Bob");
console.log(school.displayAllStudents());
// Output: [ { name: 'Alice', marks: 80 }, { name: 'Charlie', marks: 95 } ]

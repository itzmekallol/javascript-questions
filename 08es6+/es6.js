/**
 * JavaScript Practice — ES6+ (30 Questions)
 * ---------------------------------------------------------
 * Covers Q1–22 and Q25–30. Questions 23–24 (Modules) require real,
 * separate files to demonstrate honestly — see the accompanying
 * `es6-modules-demo/` folder for those two.
 *
 * Comments explain WHAT each piece of logic does and WHY, as requested.
 */

// ==============================================================
// PART 1: LET & CONST (1–3)
// ==============================================================

// 1. let allows reassignment; const does not. Trying to reassign a const
// throws a TypeError at runtime — that's JS enforcing "this binding never changes."
let mutableCounter = 10;
mutableCounter = 20; // fine — let permits reassignment
console.log("1) let after reassignment:", mutableCounter);

const fixedValue = 100;
try {
  fixedValue = 200; // this line throws, because const bindings can't be reassigned
} catch (error) {
  console.log("1) const reassignment error:", error.message);
}
console.log("1) const stays:", fixedValue);

// 2. Block scope means a variable declared with let/const only exists inside
// the { } it was declared in — unlike var, which "leaks" out of blocks.
if (true) {
  let blockScopedValue = "I only exist inside this if-block";
  console.log("2) inside the block:", blockScopedValue);
}
// console.log(blockScopedValue); // would throw ReferenceError — it's out of scope here
console.log(
  "2) outside the block: blockScopedValue is not accessible (would throw if uncommented)",
);

// 3. Refactor: the original used var everywhere and never distinguished
// "this will change" from "this should never change." Below, count is
// reassigned inside the loop (so it uses let); MAX_ITEMS never changes
// (so it uses const) — the declaration itself now documents intent.
function oldStyleSum(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total += items[i];
  }
  return total;
}

function modernSum(items) {
  const MAX_ITEMS = items.length; // never reassigned — const communicates that
  let total = 0; // this DOES change on every loop iteration — let is correct here
  for (let i = 0; i < MAX_ITEMS; i += 1) {
    total += items[i];
  }
  return total;
}
console.log("3) oldStyleSum:", oldStyleSum([1, 2, 3]));
console.log("3) modernSum:", modernSum([1, 2, 3]));

// ==============================================================
// PART 2: TEMPLATE LITERALS (4–5)
// ==============================================================

// 4. Template literals (backticks) let us embed variables directly with
// ${...} instead of concatenating strings with +, and they support
// multi-line text without needing \n escape sequences.
function buildStudentCard(name, age, course) {
  return `
===== Student Information =====
Name   : ${name}
Age    : ${age}
Course : ${course}
================================`;
}
console.log("4)", buildStudentCard("Kallol", 20, "JavaScript"));

// 5. Same idea, applied to a multi-line invoice. The template literal keeps
// the layout readable in the source code exactly as it will print.
function buildInvoice(customerName, items) {
  // reduce() walks through each item once, building up both the line list
  // and the running total in a single pass.
  let itemLines = "";
  let total = 0;
  items.forEach((item) => {
    itemLines += `  ${item.name.padEnd(15)} x${item.quantity}  $${item.price.toFixed(2)}\n`;
    total += item.price * item.quantity;
  });

  return `
========== INVOICE ==========
Customer: ${customerName}
------------------------------
${itemLines}------------------------------
Total: $${total.toFixed(2)}
==============================`;
}
console.log(
  "5)",
  buildInvoice("Kallol", [
    { name: "Notebook", quantity: 2, price: 3.5 },
    { name: "Pen", quantity: 5, price: 1.2 },
  ]),
);

// ==============================================================
// PART 3: DESTRUCTURING (6–10)
// ==============================================================

// 6. Object destructuring pulls named properties directly into variables,
// matching by property name (not position, unlike arrays).
const person = { name: "Alice", age: 25, city: "Delhi" };
const { name, age, city } = person;
console.log("6)", name, age, city);

// 7. Array destructuring pulls elements out by POSITION. Skipping the last
// two values here just means we don't bother creating variables for them.
const numbers = [10, 20, 30, 40, 50];
const [first, second, third] = numbers;
console.log("7)", first, second, third);

// 8. Swapping via array destructuring: JS builds a temporary array [b, a]
// on the right, then destructures it back into a and b — no third
// variable needed.
let swapA = 1;
let swapB = 2;
[swapA, swapB] = [swapB, swapA];
console.log("8) after swap:", swapA, swapB);

// 9. Nested destructuring mirrors the shape of the object: to reach city and
// state, we destructure "address" as a step, then destructure its keys.
const student = {
  name: "Alice",
  address: {
    city: "Delhi",
    state: "Delhi",
  },
};
const {
  address: { city: studentCity, state: studentState },
} = student;
console.log("9)", studentCity, studentState);

// 10. Default values kick in ONLY when the property is undefined (missing
// entirely) — not when it's null or any other falsy value like 0 or "".
function printUserSettings({ theme = "light", fontSize = 14 } = {}) {
  console.log(`10) theme: ${theme}, fontSize: ${fontSize}`);
}
printUserSettings({ theme: "dark" }); // fontSize falls back to default: 14
printUserSettings({}); // both fall back to defaults
printUserSettings(); // edge case: no argument at all — the = {} above prevents a crash

// ==============================================================
// PART 4: SPREAD OPERATOR (11–14)
// ==============================================================

// 11. Spreading an array into a new [] creates a genuinely separate copy —
// modifying the copy does NOT affect the original.
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
copiedArray.push(4);
console.log("11) original:", originalArray, "| copy:", copiedArray);

// 12. Spreading two arrays into one [] concatenates them in order.
const arrayA = [1, 2];
const arrayB = [3, 4];
const mergedArray = [...arrayA, ...arrayB];
console.log("12)", mergedArray);

// 13. Same spread idea, applied to an object — creates a shallow copy.
const originalObject = { x: 1, y: 2 };
const clonedObject = { ...originalObject };
clonedObject.x = 99;
console.log("13) original:", originalObject, "| clone:", clonedObject);

// 14. When merging objects with overlapping keys, whichever spread comes
// LAST wins — its value overwrites the earlier one. Here, objectTwo's
// "b" (20) overwrites objectOne's "b" (2), because objectTwo is spread second.
const objectOne = { a: 1, b: 2 };
const objectTwo = { b: 20, c: 30 };
const mergedObject = { ...objectOne, ...objectTwo };
console.log("14) merged (later key wins):", mergedObject); // { a: 1, b: 20, c: 30 }

// ==============================================================
// PART 5: REST PARAMETERS (15–17)
// ==============================================================

// 15. `...numbers` gathers every argument passed to the function into one
// real array, regardless of how many were passed.
function sumAll(...numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}
console.log("15)", sumAll(1, 2, 3, 4)); // 10
console.log("15)", sumAll()); // 0 (edge case: no arguments)

// 16. Math.max normally takes individual arguments, not an array — spreading
// the rest-parameter array back out with ...numbers supplies them correctly.
function findLargestOf(...numbers) {
  return Math.max(...numbers);
}
console.log("16)", findLargestOf(3, 7, 2, 9, 4)); // 9

// 17. In destructuring, `...rest` must come LAST and collects everything
// that wasn't already captured by the named variables before it.
const [leader, ...remainingRunners] = ["Alice", "Bob", "Carol", "Dave"];
console.log("17) leader:", leader, "| remaining:", remainingRunners);

// ==============================================================
// PART 6: ENHANCED OBJECT LITERALS (18–19)
// ==============================================================

// 18. Shorthand property names: when a variable's name matches the key you
// want, { name } is shorthand for { name: name } — less repetition.
function createUserProfile(username, email) {
  return { username, email }; // same as { username: username, email: email }
}
console.log("18)", createUserProfile("kallol_dev", "kallol@example.com"));

// 19. Shorthand method syntax: greet() { } inside an object is shorthand for
// greet: function() { } — reads more like a class method.
const calculator = {
  value: 0,
  add(amount) {
    this.value += amount;
    return this; // returning "this" allows chaining, e.g. calculator.add(1).add(2)
  },
};
calculator.add(5).add(3);
console.log("19) calculator.value:", calculator.value);

// ==============================================================
// PART 7: OPTIONAL CHAINING & NULLISH COALESCING (20–22)
// ==============================================================

// 20. Without ?. , accessing user.address.city when "address" doesn't exist
// would throw "Cannot read properties of undefined." With ?. , JS checks
// each step and short-circuits to undefined instead of throwing.
const userWithoutAddress = { name: "Bob" };
console.log("20)", userWithoutAddress?.address?.city); // undefined, no crash

// 21. Optional chaining also works before a function call — if the method
// doesn't exist, JS skips calling it and returns undefined instead of throwing.
const userWithoutMethod = { name: "Bob" };
console.log("21)", userWithoutMethod.sendEmail?.()); // undefined, no crash

// 22. ?? only falls back when the left side is null or undefined —
// unlike ||, it does NOT treat 0, "", or false as "missing."
const settings = { volume: 0, brightness: null };
console.log("22) volume ?? default:", settings.volume ?? 50); // 0 (kept, because 0 isn't null/undefined)
console.log("22) volume || default:", settings.volume || 50); // 50 (edge case showing why ?? is safer here)
console.log("22) brightness ?? default:", settings.brightness ?? 80); // 80 (null IS treated as missing)

// ==============================================================
// PART 9: CLASSES (25–27)
// ==============================================================

// 25. A class bundles data (constructor properties) with behavior (methods).
// The constructor runs automatically whenever `new Person(...)` is called.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
}
const somePerson = new Person("Alice", 30);
console.log("25)", somePerson.introduce());

// 26. `extends` lets Student reuse everything Person already has. `super(...)`
// must be called first inside the constructor — it runs Person's constructor
// so `this.name` and `this.age` get set up before we add anything new.
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // sets up name and age via the parent class
    this.grade = grade;
  }

  study() {
    return `${this.name} is studying for grade ${this.grade}.`;
  }
}
const someStudent = new Student("Bob", 16, 10);
console.log("26)", someStudent.introduce()); // inherited from Person
console.log("26)", someStudent.study()); // defined on Student itself

// 27. get/set let you use property-style syntax (obj.celsius) while
// actually running a function behind the scenes — useful for validation
// or computed values that stay in sync.
class Temperature {
  constructor(celsius) {
    this._celsius = celsius; // underscore prefix marks it as the "internal" value
  }

  get fahrenheit() {
    return this._celsius * (9 / 5) + 32;
  }

  set fahrenheit(value) {
    // Converting back lets us keep _celsius as the single source of truth,
    // so reading .celsius later is always in sync with any .fahrenheit writes.
    this._celsius = (value - 32) * (5 / 9);
  }
}
const temp = new Temperature(25);
console.log("27) fahrenheit (getter):", temp.fahrenheit); // 77
temp.fahrenheit = 32; // uses the setter
console.log("27) celsius after setting fahrenheit:", temp._celsius); // 0

// ==============================================================
// PART 10: COMBINED ES6+ CHALLENGES (28–30)
// ==============================================================

// 28. Combines destructuring (pulling fields out of each student object),
// template literals (building the formatted string), and map() (transforming
// the whole array into an array of strings, one per student).
const students = [
  { name: "Alice", age: 20, course: "JavaScript" },
  { name: "Bob", age: 22, course: "Python" },
];
const studentProfiles = students.map(
  ({ name: studentName, age: studentAge, course }) => {
    return `${studentName} (${studentAge}) — studying ${course}`;
  },
);
console.log("28)", studentProfiles);

// 29. A small shopping cart utility. Each function returns a NEW array/object
// rather than mutating the one it was given — this keeps the cart's history
// predictable and avoids surprising side effects for the caller.
function addItemToCart(cart, newItem) {
  return [...cart, newItem]; // spread keeps all existing items, then adds the new one
}

function removeItemFromCart(cart, itemIdToRemove) {
  return cart.filter((item) => item.id !== itemIdToRemove);
}

// Rest + destructuring together: pull out "quantity" and "price" by name,
// and gather anything else (like "id" and "name") into ...itemDetails.
const calculateCartTotal = (cart) =>
  cart.reduce((total, { quantity, price }) => total + quantity * price, 0);

let shoppingCart = [];
shoppingCart = addItemToCart(shoppingCart, {
  id: 1,
  name: "Book",
  quantity: 2,
  price: 12,
});
shoppingCart = addItemToCart(shoppingCart, {
  id: 2,
  name: "Pen",
  quantity: 3,
  price: 1.5,
});
console.log("29) cart after adding items:", shoppingCart);
console.log("29) cart total:", calculateCartTotal(shoppingCart)); // (2*12) + (3*1.5) = 28.5

shoppingCart = removeItemFromCart(shoppingCart, 1);
console.log("29) cart after removing item 1:", shoppingCart);
console.log("29) new cart total:", calculateCartTotal(shoppingCart)); // 4.5

// 30. Refactor example — old style vs. modern ES6+ style, doing the same job.

// --- Old style: var, string concatenation, traditional function ---
function oldCreateGreeting(user) {
  var userName = user && user.name ? user.name : "Guest";
  var greetingMessage =
    "Hello, " +
    userName +
    "! You have " +
    (user ? user.notifications : 0) +
    " notifications.";
  return greetingMessage;
}
console.log(
  "30) old style:",
  oldCreateGreeting({ name: "Kallol", notifications: 3 }),
);
console.log("30) old style (no user):", oldCreateGreeting(undefined));

// --- Modern ES6+ style ---
// Uses: destructuring with defaults, optional chaining, nullish coalescing,
// template literals, and an arrow function.
const createGreeting = ({ name = "Guest", notifications } = {}) => {
  // ?? only falls back when notifications is null/undefined — so a real
  // value of 0 notifications is displayed correctly instead of being
  // treated as "missing" (which is exactly the bug ?? avoids).
  const notificationCount = notifications ?? 0;
  return `Hello, ${name}! You have ${notificationCount} notifications.`;
};
console.log(
  "30) modern style:",
  createGreeting({ name: "Kallol", notifications: 3 }),
);
console.log("30) modern style (no user):", createGreeting()); // edge case: default parameter handles this cleanly

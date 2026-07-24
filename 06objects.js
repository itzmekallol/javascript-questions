/**
 * JavaScript Practice — Objects (40 Questions)
 * Style: ES6+, readability-first, const by default, strict equality.
 */

// ============================================================
// PART 1: Object Basics (1–8)
// ============================================================

// 1. Create a student object and print it in full.
const student = {
  name: "Alice",
  age: 21,
  course: "Computer Science",
  city: "Kolkata",
};
console.log(student);
// Output: { name: 'Alice', age: 21, course: 'Computer Science', city: 'Kolkata' }

// 2. Print each property individually.
console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.city);
// Output:
// Alice
// 21
// Computer Science
// Kolkata

// 3. Add a new property.
student.email = "alice@example.com";
console.log(student);
// Output: { name: 'Alice', age: 21, course: 'Computer Science', city: 'Kolkata', email: 'alice@example.com' }

// 4. Update an existing property.
student.city = "Bengaluru";
console.log(student.city);
// Output: Bengaluru

// 5. Delete a property.
delete student.course;
console.log(student);
// Output: { name: 'Alice', age: 21, city: 'Bengaluru', email: 'alice@example.com' }

// 6. Check whether a property exists.
console.log("age" in student);
// Output: true
console.log(Object.hasOwn(student, "course"));
// Output: false (deleted above)

// 7. Count the total number of properties.
function countProperties(obj) {
  return Object.keys(obj).length;
}
console.log(countProperties(student));
// Output: 4

// 8. Loop through all properties and values.
function printAllProperties(obj) {
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}
printAllProperties(student);
// Output:
// name: Alice
// age: 21
// city: Bengaluru
// email: alice@example.com

// ============================================================
// PART 2: Nested Objects (9–12)
// ============================================================

// 9. Student object with a nested address object.
const studentWithAddress = {
  name: "Bob",
  address: {
    street: "12 MG Road",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411001",
  },
};
console.log(studentWithAddress.address);
// Output: { street: '12 MG Road', city: 'Pune', state: 'Maharashtra', pincode: '411001' }

// 10. Update the city inside the nested address.
studentWithAddress.address.city = "Mumbai";
console.log(studentWithAddress.address.city);
// Output: Mumbai

// 11. Add a new property inside the nested address.
studentWithAddress.address.country = "India";
console.log(studentWithAddress.address);
// Output: { street: '12 MG Road', city: 'Mumbai', state: 'Maharashtra', pincode: '411001', country: 'India' }

// 12. Delete a property from the nested object.
delete studentWithAddress.address.street;
console.log(studentWithAddress.address);
// Output: { city: 'Mumbai', state: 'Maharashtra', pincode: '411001', country: 'India' }

// ============================================================
// PART 3: Object Methods (13–16)
// ============================================================

// 13. Object with a greet() method.
const greeter = {
  name: "Sam",
  greet() {
    console.log(`Welcome, ${this.name}!`);
  },
};
greeter.greet();
// Output: Welcome, Sam!

// 14. Calculator object with basic arithmetic methods.
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    if (b === 0) {
      console.warn("Division by zero is not allowed.");
      return null;
    }
    return a / b;
  },
};
console.log(calculator.add(5, 3));
// Output: 8
console.log(calculator.subtract(5, 3));
// Output: 2
console.log(calculator.multiply(5, 3));
// Output: 15
console.log(calculator.divide(6, 0));
// Output: null

// 15. Bank account object with deposit, withdraw, and checkBalance.
const bankAccount = {
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  },
  withdraw(amount) {
    if (amount > this.balance) {
      console.warn("Insufficient balance.");
      return this.balance;
    }
    this.balance -= amount;
    return this.balance;
  },
  checkBalance() {
    return this.balance;
  },
};
console.log(bankAccount.deposit(500));
// Output: 1500
console.log(bankAccount.withdraw(2000));
// Output: 1500 (withdrawal rejected, balance unchanged)
console.log(bankAccount.checkBalance());
// Output: 1500

// 16. Shopping cart object with core cart methods.
const shoppingCart = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  removeItem(item) {
    this.items = this.items.filter((current) => current !== item);
  },
  viewItems() {
    return [...this.items];
  },
  totalItems() {
    return this.items.length;
  },
};
shoppingCart.addItem("Apples");
shoppingCart.addItem("Bread");
console.log(shoppingCart.viewItems());
// Output: [ 'Apples', 'Bread' ]
console.log(shoppingCart.totalItems());
// Output: 2
shoppingCart.removeItem("Apples");
console.log(shoppingCart.viewItems());
// Output: [ 'Bread' ]

// ============================================================
// PART 4: The `this` Keyword (17–20)
// ============================================================

// 17. Object using `this` to display its own properties.
const person = {
  name: "Nina",
  age: 28,
  displaySelf() {
    console.log(`${this.name} is ${this.age} years old.`);
  },
};
person.displaySelf();
// Output: Nina is 28 years old.

// 18. Car object with displayInfo() using `this`.
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2022,
  displayInfo() {
    console.log(`${this.year} ${this.make} ${this.model}`);
  },
};
car.displayInfo();
// Output: 2022 Toyota Corolla

// 19. Student object that calculates average marks using `this`.
const studentWithMarks = {
  name: "Charlie",
  marks: [80, 90, 70],
  getAverageMarks() {
    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  },
};
console.log(studentWithMarks.getAverageMarks());
// Output: 80

// 20. Comparing `this` in a regular method vs. an arrow function.
const thisComparison = {
  name: "Regular vs Arrow Demo",
  regularMethod() {
    // `this` refers to the object the method was called on.
    console.log("Regular method `this`:", this.name);
  },
  arrowMethod: () => {
    // Arrow functions don't have their own `this` — they inherit it
    // from the surrounding (in this case, module/top-level) scope,
    // so `this.name` is undefined here, not "Regular vs Arrow Demo".
    console.log("Arrow function `this`:", this.name);
  },
};
thisComparison.regularMethod();
// Output: Regular method `this`: Regular vs Arrow Demo
thisComparison.arrowMethod();
// Output: Arrow function `this`: undefined

// ============================================================
// PART 5: Object Destructuring (21–24)
// ============================================================

// 21. Basic destructuring into separate variables.
const destructuringSource = { name: "Alice", age: 21, city: "Kolkata" };
const {
  name: destructuredName,
  age: destructuredAge,
  city: destructuredCity,
} = destructuringSource;
console.log(destructuredName, destructuredAge, destructuredCity);
// Output: Alice 21 Kolkata

// 22. Renaming variables while destructuring.
const { name: studentName } = destructuringSource;
console.log(studentName);
// Output: Alice

// 23. Default values while destructuring.
const { country = "India" } = destructuringSource;
console.log(country);
// Output: India (property doesn't exist, so the default is used)

// 24. Destructuring a nested object.
const {
  address: { city: nestedCity, state: nestedState },
} = studentWithAddress;
console.log(nestedCity, nestedState);
// Output: Mumbai Maharashtra

// ============================================================
// PART 6: Spread & Rest (25–28)
// ============================================================

// 25. Copy an object using the spread operator (shallow copy).
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
console.log(copiedObject);
// Output: { a: 1, b: 2 }

// 26. Merge two objects into one.
const objectA = { a: 1, b: 2 };
const objectB = { b: 3, c: 4 };
const mergedObject = { ...objectA, ...objectB };
console.log(mergedObject);
// Output: { a: 1, b: 3, c: 4 } (objectB's `b` overwrites objectA's `b`)

// 27. Update one property while copying an object.
const updatedCopy = { ...originalObject, b: 99 };
console.log(updatedCopy);
// Output: { a: 1, b: 99 }
console.log(originalObject);
// Output: { a: 1, b: 2 } (original is untouched)

// 28. Rest operator while destructuring to collect remaining properties.
const fullProfile = { name: "Dave", age: 30, city: "Delhi", country: "India" };
const { name: profileName, ...remainingProfileFields } = fullProfile;
console.log(profileName);
// Output: Dave
console.log(remainingProfileFields);
// Output: { age: 30, city: 'Delhi', country: 'India' }

// ============================================================
// PART 7: Object Utility Methods (29–33)
// ============================================================

const sampleObject = { name: "Eve", age: 25, city: "Chennai" };

// 29. All property names using Object.keys().
console.log(Object.keys(sampleObject));
// Output: [ 'name', 'age', 'city' ]

// 30. All property values using Object.values().
console.log(Object.values(sampleObject));
// Output: [ 'Eve', 25, 'Chennai' ]

// 31. All key-value pairs using Object.entries().
console.log(Object.entries(sampleObject));
// Output: [ [ 'name', 'Eve' ], [ 'age', 25 ], [ 'city', 'Chennai' ] ]

// 32. Convert to an array of key-value pairs and display each pair.
function displayEachEntry(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key} -> ${value}`);
  });
}
displayEachEntry(sampleObject);
// Output:
// name -> Eve
// age -> 25
// city -> Chennai

// 33. Build a new object from an array of key-value pairs.
const entriesArray = [
  ["name", "Frank"],
  ["age", 40],
];
const objectFromEntries = Object.fromEntries(entriesArray);
console.log(objectFromEntries);
// Output: { name: 'Frank', age: 40 }

// ============================================================
// PART 8: Arrays of Objects (34–37)
// ============================================================

const studentList = [
  { name: "Alice", marks: 80 },
  { name: "Bob", marks: 55 },
  { name: "Charlie", marks: 95 },
  { name: "David", marks: 65 },
];

// 34. Print the names of all students.
function getAllStudentNames(students) {
  return students.map((currentStudent) => currentStudent.name);
}
console.log(getAllStudentNames(studentList));
// Output: [ 'Alice', 'Bob', 'Charlie', 'David' ]

// 35. Find the student with the highest marks.
function getHighestScoringStudent(students) {
  return students.reduce((topStudent, currentStudent) =>
    currentStudent.marks > topStudent.marks ? currentStudent : topStudent,
  );
}
console.log(getHighestScoringStudent(studentList));
// Output: { name: 'Charlie', marks: 95 }

// 36. Filter students who scored 60 or more.
function getStudentsAboveThreshold(students, threshold) {
  return students.filter((currentStudent) => currentStudent.marks >= threshold);
}
console.log(getStudentsAboveThreshold(studentList, 60));
// Output: [ { name: 'Alice', marks: 80 }, { name: 'Charlie', marks: 95 }, { name: 'David', marks: 65 } ]

// 37. Sort students by marks in ascending order (does not mutate the input).
function sortStudentsByMarksAscending(students) {
  return [...students].sort((a, b) => a.marks - b.marks);
}
console.log(sortStudentsByMarksAscending(studentList));
// Output: [ { name: 'Bob', marks: 55 }, { name: 'David', marks: 65 }, { name: 'Alice', marks: 80 }, { name: 'Charlie', marks: 95 } ]

// ============================================================
// PART 9: Real-World Challenges (38–40)
// ============================================================

// 38. Product Management System — each system instance keeps its own
// private, encapsulated array of product objects.
function createProductManagementSystem() {
  let products = [];

  return {
    addProduct(product) {
      products.push(product);
    },
    updateProduct(id, updatedFields) {
      products = products.map((product) =>
        product.id === id ? { ...product, ...updatedFields } : product,
      );
    },
    deleteProduct(id) {
      products = products.filter((product) => product.id !== id);
    },
    searchProduct(id) {
      return products.find((product) => product.id === id);
    },
    displayAllProducts() {
      return [...products];
    },
  };
}

const productSystem = createProductManagementSystem();
productSystem.addProduct({ id: 1, name: "Laptop", price: 55000 });
productSystem.addProduct({ id: 2, name: "Mouse", price: 500 });
console.log(productSystem.displayAllProducts());
// Output: [ { id: 1, name: 'Laptop', price: 55000 }, { id: 2, name: 'Mouse', price: 500 } ]
productSystem.updateProduct(2, { price: 450 });
console.log(productSystem.searchProduct(2));
// Output: { id: 2, name: 'Mouse', price: 450 }
productSystem.deleteProduct(1);
console.log(productSystem.displayAllProducts());
// Output: [ { id: 2, name: 'Mouse', price: 450 } ]

// 39. Contact Book, following the same encapsulated pattern.
function createContactBook() {
  let contacts = [];

  return {
    addContact(contact) {
      contacts.push(contact);
    },
    updateContact(name, updatedFields) {
      contacts = contacts.map((contact) =>
        contact.name === name ? { ...contact, ...updatedFields } : contact,
      );
    },
    deleteContact(name) {
      contacts = contacts.filter((contact) => contact.name !== name);
    },
    searchByName(name) {
      return contacts.find((contact) => contact.name === name);
    },
    displayAllContacts() {
      return [...contacts];
    },
  };
}

const contactBook = createContactBook();
contactBook.addContact({ name: "Alice", phone: "9876543210" });
contactBook.addContact({ name: "Bob", phone: "9123456780" });
console.log(contactBook.displayAllContacts());
// Output: [ { name: 'Alice', phone: '9876543210' }, { name: 'Bob', phone: '9123456780' } ]
contactBook.updateContact("Bob", { phone: "9999999999" });
console.log(contactBook.searchByName("Bob"));
// Output: { name: 'Bob', phone: '9999999999' }
contactBook.deleteContact("Alice");
console.log(contactBook.displayAllContacts());
// Output: [ { name: 'Bob', phone: '9999999999' } ]

// 40. Employee Management System, following the same encapsulated pattern.
function createEmployeeManagementSystem() {
  let employees = [];

  return {
    addEmployee(employee) {
      employees.push(employee);
    },
    updateEmployee(id, updatedFields) {
      employees = employees.map((employee) =>
        employee.id === id ? { ...employee, ...updatedFields } : employee,
      );
    },
    removeEmployee(id) {
      employees = employees.filter((employee) => employee.id !== id);
    },
    searchEmployee(id) {
      return employees.find((employee) => employee.id === id);
    },
    getAverageSalary() {
      if (employees.length === 0) return 0;
      const totalSalary = employees.reduce(
        (sum, employee) => sum + employee.salary,
        0,
      );
      return totalSalary / employees.length;
    },
    getHighestPaidEmployee() {
      return employees.reduce((topEarner, currentEmployee) =>
        currentEmployee.salary > topEarner.salary ? currentEmployee : topEarner,
      );
    },
    displayAllEmployees() {
      return [...employees];
    },
  };
}

const employeeSystem = createEmployeeManagementSystem();
employeeSystem.addEmployee({ id: 1, name: "Alice", salary: 60000 });
employeeSystem.addEmployee({ id: 2, name: "Bob", salary: 50000 });
employeeSystem.addEmployee({ id: 3, name: "Charlie", salary: 75000 });
console.log(employeeSystem.displayAllEmployees());
// Output: [ { id: 1, name: 'Alice', salary: 60000 }, { id: 2, name: 'Bob', salary: 50000 }, { id: 3, name: 'Charlie', salary: 75000 } ]
employeeSystem.updateEmployee(2, { salary: 55000 });
console.log(employeeSystem.searchEmployee(2));
// Output: { id: 2, name: 'Bob', salary: 55000 }
console.log(employeeSystem.getAverageSalary());
// Output: 63333.333333333336
console.log(employeeSystem.getHighestPaidEmployee());
// Output: { id: 3, name: 'Charlie', salary: 75000 }
employeeSystem.removeEmployee(1);
console.log(employeeSystem.displayAllEmployees());
// Output: [ { id: 2, name: 'Bob', salary: 55000 }, { id: 3, name: 'Charlie', salary: 75000 } ]

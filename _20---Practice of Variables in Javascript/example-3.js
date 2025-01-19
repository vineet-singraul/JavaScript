const country = "USA"; 
// country = "Canada"; // Error: Assignment to constant variable

const person = { name: "John", age: 30 };
person.name = "Jane"; // Allowed: Modifying object properties

console.log(person); // Output: { name: "Jane", age: 30 }

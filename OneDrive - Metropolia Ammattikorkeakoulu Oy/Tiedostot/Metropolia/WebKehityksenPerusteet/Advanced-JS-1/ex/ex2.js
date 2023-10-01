/* You are building a user information processing module for a web application.
Users' names and ages are stored as objects in an array. However, not all users
 provide both pieces of information. Your task is to create a function that
 processes the user data and provides meaningful default values if some information
  is missing.

Fill the TODOs in this code: */
// Sample user data array
const userArray = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: false },
  { age: 30 },
  { name: "Eve", age: null }
];

// Test the processUserData function with different user data
for (const user of userArray) {
  const processUserData = (user) => `Welcome, ${user.name ?? 'Guest'}! You are ${user.age || '18'} years old.`;
  // ??: null and undefined
  // ||: null, undefined and false
  console.log(processUserData(user));
}

// The correct output should be:
// Welcome, Alice! You are 25 years old.
// Welcome, Bob! You are 18 years old.
// Welcome, Guest! You are 30 years old.
// Welcome, Eve! You are 18 years old.

/* Certainly! Here's an exercise that involves using the reduce function
 to accumulate values from an array:

Exercise: Accumulating Data with reduce

Scenario: You are working on a finance application that needs to
calculate the total expenses of a user. An array called expenses contains
 expense objects, each with properties category and amount. Your task is
  to implement the function calculateTotalExpenses that uses the reduce
   function to accumulate the total expenses from the expenses array.

Use the reduce function to sum up the amount property of each expense
object.
Return the total accumulated expenses.
Modify the code below according to the TODO comments. */

// Sample expenses array
const expenses = [
  { category: "Food", amount: 50 },
  { category: "Transportation", amount: 30 },
  { category: "Entertainment", amount: 20 }
];

// TODO: Implement the calculateTotalExpenses function
function calculateTotalExpenses(expenses) {
  // TODO: Use the reduce function to calculate total expenses
  // const total = expenses.reduce((total, expense) => total + expense.amount, 0);
  let total = 0;
  for (expense of expenses) {
    total += expense.amount;
  }
  return total;
}

// Test the calculateTotalExpenses function
const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
console.log(totalExpenses);

// Output should be:
// 100

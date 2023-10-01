/* You are developing a web application for a clothing store. An array
called clothes contains clothing objects, each with properties type,
 size, and color. Your task is to implement the function getRedClothes
 that filters the clothes array using the filter function.

Use the filter function to extract clothing objects where the color
 property is "red".
Return an array containing only the red clothing objects.
Modify the code below according to the TODO comments. */

// Sample clothes array
const clothes = [
  { type: "shirt", size: "M", color: "red" },
  { type: "pants", size: "L", color: "blue" },
  { type: "dress", size: "S", color: "red" }
];

// TODO: Implement the getRedClothes function
function getRedClothes(clothes) {
  // TODO: Use the filter function to get red clothing objects
  const newArray = clothes.filter((vaate) => vaate.color === "red");
  return newArray;
}

// Test the getRedClothes function
const redClothes = getRedClothes(clothes);
console.log(redClothes);

// Output should be:
// [ { type: 'shirt', size: 'M', color: 'red' },
//   { type: 'dress', size: 'S', color: 'red' } ]

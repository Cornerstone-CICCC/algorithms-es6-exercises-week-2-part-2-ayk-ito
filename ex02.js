// Find Exercise
// Instructions: Create an array of at least five numbers. Write code to find the first element that is greater than 10.

const numbers = [1, 11, 2, 12, 5];
const found = numbers.find((element) => {
  return element > 10;
});
console.log(found);

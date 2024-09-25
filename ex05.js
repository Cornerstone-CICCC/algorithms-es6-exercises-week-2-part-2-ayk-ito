// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.

const numbers = [101, 12, 21, 1, 56];
const even = (element) => {
  return element % 2 === 0;
};
console.log(numbers.some(even));

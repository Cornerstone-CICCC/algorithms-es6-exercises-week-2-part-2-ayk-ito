// Every Exercise
// Instructions: Create an array of at least five numbers. Write code to check if every number in the array is positive.

const numbers = [101, 12, 21, -1, 56];
const value = numbers.every((element) => {
  if (element > 0) {
    return true;
  }
});
console.log(value);

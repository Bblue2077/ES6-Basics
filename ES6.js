// Create two arrays of numbers called numbers1 and numbers2
let numbers1 = [1, 3, 5, 7, 9];
let numbers2 = [2, 4, 6, 8, 10];

// Spread operator arrays called numbers that combines numbers1 and numbers2
const numbers = [...numbers1, ...numbers2];

// Define an arrow function called square that accepts a number as an argument and returns the square of the number
const square = (num) => num * num;

// Use the map method to create a new array called squares that contains the squares of the numbers in the numbers array
const squares = numbers.map(square);

// Define an arrow function called isEven that accepts a number as an argument and returns true if the number is even, otherwise false
const isEven = (num) => num % 2 === 0;

// Use the filter method to create a new array called evenSquares that contains only the even squares from the squares array
const evenSquares = squares.filter(isEven);

// Use destructuring assignment to extract the first and second elements of the evenSquares array into constants firstEvenSquare and secondEvenSquare
const [firstEvenSquare, secondEvenSquare] = evenSquares;

// Use a template literal to log the original numbers array, the squares array, the evenSquares array, and the extracted even squares
console.log(`Original numbers: ${numbers}`);
console.log(`Squares: ${squares}`);
console.log(`Even squares: ${evenSquares}`);
console.log(`First even square: ${firstEvenSquare}`);
console.log(`Second even square: ${secondEvenSquare}`);
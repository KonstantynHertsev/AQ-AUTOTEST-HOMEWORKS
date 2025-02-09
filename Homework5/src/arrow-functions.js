const calcSum = arr => arr.reduce((sum, num) => sum + num, 0);

const numbers = [3, 3, 4, 5, 10];
console.log(calcSum(numbers));


const combineArrays = (strings, numbers) => strings.map((str, i) => `${str}: ${numbers[i]}`);

const stringsArray = ["apple", "banana", "cherry"];
const numbersArray = [1, 2, 3];

console.log(combineArrays(stringsArray, numbersArray));
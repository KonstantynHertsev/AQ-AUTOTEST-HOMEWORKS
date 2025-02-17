export const calcSum = (arr: number[]): number => arr.reduce((sum, num) => sum + num, 0);

const numbers: number[] = [3, 3, 4, 5, 10];
console.log(calcSum(numbers));

const combineArrays = (strings: string[], numbers: number[]): string[] =>
    strings.map((str, i) => `${str}: ${numbers[i]}`);

const stringsArray: string[] = ["apple", "banana", "cherry"];
const numbersArray: number[] = [1, 2, 3];

console.log(combineArrays(stringsArray, numbersArray));

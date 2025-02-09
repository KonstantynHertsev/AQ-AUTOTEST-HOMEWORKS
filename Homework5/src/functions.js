function calcSum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

const numbers = [3, 3, 4, 5, 10];
console.log(calcSum(numbers));


function combineArrays(strings, numbers) {
    let result = [];
    for (let i = 0; i < strings.length; i++) {
        result.push(strings[i] + ": " + numbers[i]);
    }
    return result;
}

const stringsArray = ["apple", "banana", "cherry"];
const numbersArray = [1, 2, 3];

console.log(combineArrays(stringsArray, numbersArray));

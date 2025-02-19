function calcSum(arr: number[]): number {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}

const numbers: number[] = [3, 3, 4, 5, 10];
console.log(calcSum(numbers));

function combineArrays(strings: string[], numbers: number[]): string[] {
    const result: string[] = [];
    for (let i = 0; i < strings.length; i++) {
        result.push(`${strings[i]}: ${numbers[i]}`);
    }
    return result;
}

const stringsArray: string[] = ["apple", "banana", "cherry"];
const numbersArray: number[] = [1, 2, 3];

console.log(combineArrays(stringsArray, numbersArray));



const stringArray = ['Robert', 'Mark', 'Jon'];
const numberArray = [1, 2, 3, 4];
const booleanArray = [false, false, true, true];
const anyArray = [100, 'Diana', null, true];


const filteredStringArray = stringArray.filter ((el) => typeof el === 'string');
console.log(filteredStringArray);

const filteredNumbArray = numberArray.filter ((el) => typeof el === 'number');
console.log(filteredNumbArray);

const filteredBooleanArray = booleanArray.filter ((el) => typeof el === 'boolean');
console.log(filteredBooleanArray);

const filteredString1Array = anyArray.filter ((el) => typeof el === 'string');
console.log( filteredString1Array);

const foundsStringArray = stringArray.find ((el) => typeof el === 'string');
console.log(foundsStringArray);

const foundsNumberArray = numberArray.find ((el) => typeof el === 'number');
console.log(foundsNumberArray);

const foundsBooleanArray = booleanArray.find ((el => typeof el === 'boolean'));
console.log(foundsBooleanArray);

const foundsNumber1Array = anyArray.find ((el) => typeof el === 'number');
console.log(foundsNumber1Array);

const sortStringArray = stringArray.sort ((a,b) => b - a);
console.log(sortStringArray);

const sortNumberArray = numberArray.sort ((a,b) => b - a);
console.log(sortNumberArray);

const sortBooleanArray = booleanArray.sort ((a,b) => b - a);
console.log(sortBooleanArray);

const sortNumbersArray = anyArray.sort ((a,b) => b - a);
console.log(sortNumbersArray);

const sortStringArray1 = stringArray.sort();
console.log(sortStringArray1);

const sortNumberArray1 = numberArray.sort();
console.log(sortNumberArray1);

const sortBooleanArray1 = booleanArray.sort();
console.log(sortBooleanArray1);

const sortAny1Array = anyArray.sort();
console.log(sortAny1Array);

const concatStringArray = stringArray.concat('Boris');
console.log(concatStringArray);

const concatNumberArray = numberArray.concat(5);
console.log(concatNumberArray);

const concatBooleanArray = booleanArray.concat(true);
console.log(concatBooleanArray);

const concatAny1Array = anyArray.concat(undefined);
console.log(concatAny1Array);

const includeStringArray = stringArray.includes('Mark');
console.log(includeStringArray);

const includeNumberArray = numberArray.includes(7);
console.log(includeNumberArray);

const includeBooleanArray = booleanArray.includes(true);
console.log(includeBooleanArray);

const includeAny1Array = anyArray.includes(null);
console.log(includeAny1Array);

const joinStringArray = stringArray.join ('+');
console.log (joinStringArray);

const joinNumberArray = numberArray.join('-');
console.log (joinNumberArray);

const joinBooleanArray = booleanArray.join('&');
console.log(joinBooleanArray);

const joinAny1Array = anyArray.join('/');
console.log(joinAny1Array);

const mergedStringArray = [...stringArray, ...numberArray];
console.log(mergedStringArray);

const mergeNumberArray = [...numberArray, ...stringArray];
console.log(mergeNumberArray);

const mergeBooleanArray = [...booleanArray, ...numberArray];
console.log(mergeBooleanArray);

const mergeAnyArray = [...anyArray, ...booleanArray];
console.log(mergeAnyArray);

const stringsArray = stringArray.map ((el) => {
    if (typeof el === 'string') {
        return el;
    }
});
console.log(stringsArray);


const  numbersArray = numberArray.map ((el) => {
    if (typeof el === 'number') {
        return el;
    }
});
console.log(numbersArray);

const  boolean1Array = booleanArray.map ((el) => {
    if (typeof el === 'boolean') {
        return el;
    }
});
console.log(boolean1Array);

const  any1Array = anyArray.map ((el) => {
    if (typeof el === 'boolean' ) {
        return el;
    }
});
console.log(any1Array);

stringArray.forEach ((el) => {
    if (typeof el === 'number') {
        stringArray.push(el);
    }
});
console.log (stringArray);

numberArray.forEach ((el) => {
    if (typeof el === 'string') {
        numberArray.push(el);
    }
});
console.log(numberArray);

booleanArray.forEach ((el) => {
    if (typeof el === 'number') {
        booleanArray.push(el);
    }
});
console.log(booleanArray);

anyArray.forEach ((el) => {
    if (typeof el === 'boolean') {
        anyArray.push(el);
    }
});
console.log(anyArray);


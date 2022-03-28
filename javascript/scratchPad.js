function validPalindrome(str) {
    str = str.toLowerCase();
    return (str === str.split('').reverse().join(''));
}

// console.log(validPalindrome('anna'));
// console.log(validPalindrome('james'));
// console.log(validPalindrome('ikkikki'));
// console.log(validPalindrome('lol'));
// console.log(validPalindrome('reeeeee'));

function fibonacci(num) {
    const result = [0, 1];
    for (let i = 2; i <= num; i++) {
        const num1 = result[i - 1];
        const num2 = result[i - 2];
        result.push(num1 + num2);
    }
    return result[num];
}
// console.log(fibonacci(15));


function fibRecursive(num) {
    if (num < 2) {
        return num
    }
    return fibRecursive(num - 1) + fibRecursive(num - 2)
}
// console.log(fibRecursive(15));


function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        }
        else if (i % 3 === 0) {
            console.log('Fizz');
        }
        else if (i % 5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
}

// fizzBuzz(77);

function reverseString(str) {
    return str.split('').reverse().join('');
}

//reverse loop method vv

function revString(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }
    return result
}

// console.log(reverseString('practicing javascript'))
// console.log(revString('hello i am cameron'))


function reverseInteger(num) {
    let str = String(num);
    result = Number(str.split('').reverse().join(''));
    return result;
}

// console.log(reverseInteger(12));
// console.log(reverseInteger(123));
// console.log(reverseInteger(17756));

function isDivisible(num, n) {
    if (num % n === 0) {
        return true;
    } else {
        return false;
    }
}
// console.log(isDivisible(100, 10));
// console.log(isDivisible(99, 10));
// console.log(isDivisible(100, 9));
// console.log(isDivisible(99, 9));


function printOneToTen() {
    for (i = 1; i <= 10; i++) {
        console.log(i);
    }
}
// printOneToTen();

function kmToMiles(num) {
    let number = (num / 1.609344);
    return Math.round(number * 1e2) / 1e2;
}
// console.log(kmToMiles(1));
// console.log(kmToMiles(5));
// console.log(kmToMiles(169));

let numsArr = [1, 7, 4, 9, -3, 14, 65, 21];
let secondArr = [3, 6, 11, 15];

function reverseArray(arr) {
    return arr.reverse();
}
// console.log(reverseArray(numsArr));

function arraySum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i];
    }
    return result;
}
// console.log(arraySum(numsArr));

function arraySort(arr) {  
    return arr.sort((a,b) => a - b);
}
// console.log(arraySort(numsArr));

function arraySortDesc(arr) {
    return arr.sort((a,b) => b - a);
}
// console.log(arraySortDesc(numsArr));

function filterNegatives(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
// console.log(filterNegatives(numsArr));
// console.log(arraySort(filterNegatives(numsArr)));

//use map to perform an operation on every value in an array. this does create a new array
function doubleValues(arr) {
    return arr.map(x => x * 2)
}
// console.log(doubleValues(numsArr));

//use filter to return a new array with values from the original array that meet the specified criteria
function greaterThanTen(arr) {
    return arr.filter(x => x > 10);
}
// console.log(greaterThanTen(numsArr));


let stringy = "It was a sunny day, and the children were at the park";

function noSpace(str) {
    return str.split(' ').join('');
}
// console.log(noSpace(stringy));

//uses regex, g makes it search the whole string, i makes it case insensitive
function amountOfVowels(str) {
    let vowels = str.match(/[aeiou]/gi);
    return vowels.length;
}
// console.log(amountOfVowels(stringy));

//take sentence, split the words without punctuation with regex/match
//sort the array by length
//filter the array by the longest word and any that are the same length into new array
//if the length of that array is 1, return the string, if it's more than 1, return array of strings
function longestWord(str) {
    const wordArr = str.toLowerCase().match(/[a-z0-9]+/g);
    const sorted = wordArr.sort((a, b) => b.length - a.length);
    const multipleArr = sorted.filter((word) => word.length === sorted[0].length);
    if (multipleArr.length === 1) {
        return multipleArr[0];
    } else {
        return multipleArr;
    }
}
// console.log(longestWord("It was a sunny day and the children were at the park"));

//split an array into smaller arrays with the target length
function chunkArray(arr, target) {
    const chunked = [];
    let i = 0;
    while(i < arr.length) {
        chunked.push(arr.slice(i, i + target));
        i += target;
    }
    return chunked;
}
// console.log(chunkArray(numsArr, 3));

//take array of arrays and combine them into one array
function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
// console.log(combineArrays(numsArr,secondArr));


function formatStr(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function validAnagram(str1, str2) {
    return (formatStr(str1) === formatStr(str2));
}
// console.log(validAnagram('elbow', 'below'));
// console.log(validAnagram('elbow', 'bone'));
// console.log(validAnagram('Dormitory', 'dirty room'));

function sumAllPrimes(num) {
    let total = 0;

    function isPrime(i) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                return false;
            }
        }
        return true;
    }
    
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            total += i;
        }
    }
    return total;
}

console.log(sumAllPrimes(10));
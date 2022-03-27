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


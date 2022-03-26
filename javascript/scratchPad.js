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

console.log(fibonacci(20));


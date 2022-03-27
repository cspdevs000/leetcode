function reverseInteger(num) {
    let str = String(num);
    result = Number(str.split('').reverse().join(''));
    return result;
}

console.log(reverseInteger(12));
console.log(reverseInteger(123));
console.log(reverseInteger(17756));
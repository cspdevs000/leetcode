var romanToInt = function(s) {
    let values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (values[s[i]] < values[s[i+1]]) {
            result -= values[s[i]]
        } else {
            result += values[s[i]]
        }
    }
    return result;
};

console.log(romanToInt('III'));
console.log(romanToInt('XII'));
console.log(romanToInt('XL'));
console.log(romanToInt('MDXI'));

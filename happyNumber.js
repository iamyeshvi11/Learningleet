/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
 while (n > 0) {
    digits.unshift(n % 10);
    n = Math.floor(n / 10);
}

console.log(digits); // [1, 2, 3, 4, 5]
    
};

isHappy(34)
// console.log(isHappy(34))
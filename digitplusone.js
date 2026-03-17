// var plusOne = function(digits) {
//    let plusdigit=+digits.join("") + 1;
//    let plus= plusdigit.toString().split("");

//     return plus;

// };


var plusOne = function(digits) {
    let i = digits.length - 1;

    while (i >= 0) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
        i--;
    }

    // If all digits were 9
    digits.unshift(1);
    return digits;
};


console.log(plusOne([1,2,3]))


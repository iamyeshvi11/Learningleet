/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function(s) {
       
//     let words = s.trim().split(/\s+/);

   
//     let result = "";

//     for (let i = words.length - 1; i >= 0; i--) {
//         result += words[i];

//         if (i !== 0) {
//             result += " ";
//         }
//     }

//     return result;  

// };

var reverseWords = function(s) {

    let words = s.trim().split(/\s+/);

    let result = [];

    for (let i = words.length - 1; i >= 0; i--) {
        result.push(words[i]);
    }

    return result.join(" ");
};

console.log(reverseWords("the sky is blue"))

// console.log(reverseWords("     the sky    is blue"))
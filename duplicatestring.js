// /**
//  * @param {string} s
//  * @return {string}
//  */
// var removeDuplicateLetters = function(s) {

//     let freq = new Map();

//     // count frequency
//     for (let ch of s) {
//         freq.set(ch, (freq.get(ch) || 0) + 1);
//     }

//     let seen = new Set();
//     let result = "";

//     for (let ch of s) {

//         // decrease frequency
//         freq.set(ch, freq.get(ch) - 1);

//         // already added
//         if (seen.has(ch)) continue;

//         // remove bigger chars if they appear later
//         while (
//             result.length > 0 &&
//             ch < result[result.length - 1] &&
//             freq.get(result[result.length - 1]) > 0
//         ) {
//             seen.delete(result[result.length - 1]);
//             result = result.slice(0, result.length - 1);
//         }

//         result += ch;
//         seen.add(ch);
//     }

//     return result;
// };

// console.log(removeDuplicateLetters("bcabc"));      // "abc"
// console.log(removeDuplicateLetters("cbacdcbc"));   // "acdb"


/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {

    let freq = new Map();

    for(let ch of s)
{
    freq.set(ch,(freq.get(ch)||0)+1);
}
    // count frequency
    for (let ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    let stack = [];
    let seen = new Set();

    for (let ch of s) {

        // decrease remaining count
        freq.set(ch, freq.get(ch) - 1);

        // already included
        if (seen.has(ch)) continue;

        // maintain lexicographical order
        while (
            stack.length &&
            ch < stack[stack.length - 1] &&
            freq.get(stack[stack.length - 1]) > 0
        ) {
            seen.delete(stack.pop());
        }

        stack.push(ch);
        seen.add(ch);
    }

    return stack.join("");
};

console.log(removeDuplicateLetters('aabbcchdsj'));
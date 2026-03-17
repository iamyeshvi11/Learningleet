/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
// let str=strs.sort();
// let n=str.length;
// let result=[];
// let str1=str[0]
// let str2=str[n-1]
// let index=0;
// while(index<str1.length)
// {
//     if(str1.charAt(index)==str2.charAt(index))
//        result.push(str1.charAt(index));
//         index++;
// }

// return(result.join(""))    
// };

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    let str = strs.sort();
    let n = str.length;

    let str1 = str[0];
    let str2 = str[n - 1];
    let result = [];
    let index = 0;

    while (index < str1.length && index < str2.length) {
        if (str1.charAt(index) === str2.charAt(index)) {
            result.push(str1.charAt(index));
        } else {
            break;
        }
        index++;
    }

    return result.join("");
};


console.log(longestCommonPrefix(["dog","racecar","car"]))
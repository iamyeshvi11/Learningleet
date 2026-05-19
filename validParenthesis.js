// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {

//     let stack=[];
//     for(let i=0;i<s.length;i++)
//     {
//         let char=s[i];
//         if(char==="(" ||"{" ||"[")
//         {
//             stack.push(char)
//         }
//         else{
//             let prevVal=stack.pop();
//             if(prevVal==="(" && char  !==")") return false;
//              if(prevVal==="[" && char  !=="]") return false;
//               if(prevVal==="{" && char  !=="}") return false;
//                if(prevVal=== undefined ) return false;

//         }
//     }
//     return stack.length ===0; 
    
// };
// var isValid = function(s) {
//     let prev;

//     do {
//         prev = s;

//         s = s.replace("()", "")
//              .replace("{}", "")
//              .replace("[]", "");

//     } while (s.length !== prev.length);

//     return s.length === 0;
// };
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };

    for (let c of s) {
        if (c in map) {
            if (stack.pop() !== map[c]) return false;
        } else {
            stack.push(c);
        }
    }

    return !stack.length;
};
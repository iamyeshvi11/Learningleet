/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var nextGreaterElement = function(nums1, nums2) {
//     let result = new Array(nums1.length).fill(-1);

//     for (let i = 0; i < nums1.length; i++) {
//         for (let j = 0; j < nums2.length; j++) {
//             if (nums1[i] === nums2[j]) {
//                 for (let k = j + 1; k < nums2.length; k++) {
//                     if (nums2[k] > nums1[i]) {
//                         result[i] = nums2[k];
//                         break;
//                     }
//                 }
//                 break;
//             }
//         }
//     }

//     return result;
// };

// console.log(nextGreaterElement([4,1,2], [4,3,5,2]));

var nextGreaterElement = function(nums1, nums2) {
    let stack=[];
    let nextGreater=new Map();
   for(let num of nums2)
   {
    while(stack.length && stack[stack.length-1]<num)
    {
        nextGreater.set(stack.pop(), num);
    }
    stack.push(num);
   }
   while(stack.length)
   {
    nextGreater.set(stack.pop(),-1);
   }
    
   return nums1.map(num=> nextGreater.get(num));
};



// var nextGreaterElement = function(nums1, nums2) {
//     let stack = [];
//     let nextGreater = new Map();

//     for (let num of nums2) {
//         while (stack.length && stack[stack.length - 1] < num) {
//             nextGreater.set(stack.pop(), num);
//         }
//         stack.push(num);
//     }

//     while (stack.length) {
//         nextGreater.set(stack.pop(), -1);
//     }

    
//     return nums1.map(num => nextGreater.get(num));
// };

console.log(nextGreaterElement([4,1,2], [1,3,4,2]));

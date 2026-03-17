// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function(nums1, nums2) {

// nums1=nums1.sort();
// nums2=nums2.sort();
// let arr=[];
// for(let i=0;i<nums1.length-1;i++)
// {
//     for(let j=0;j<nums2.length-1;j++)
//     {
//     if(nums1[i]==nums2[j])
//     {
//         arr.push(nums1[i])
//     }
// }
// }
// return arr;    
// };

var intersection = function(nums1, nums2) {
    nums1.sort((a,b) => a-b);
    nums2.sort((a,b) => a-b);

    let i = 0, j = 0;
    let result = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            if (result[result.length - 1] !== nums1[i]) {
                result.push(nums1[i]);
            }
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
};

console.log(intersection([4,9,5],[9,4,9,8,4]))
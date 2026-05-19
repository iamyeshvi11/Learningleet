/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraySum = function(nums, k) {
//     let count = 0;

//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0;

//         for (let j = i; j < nums.length; j++) {
//             sum += nums[j];

//             if (sum === k) {
//                 count++;
//             }
//         }
//     }

//     return count;
// }

var subarraySum = function(nums, k) {
    let map = new Map();
    let sum = 0;
    let count = 0;

    map.set(0, 1); 

    for (let num of nums) {
        sum += num;

        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}


console.log(subarraySum([1,1,1,2],3))
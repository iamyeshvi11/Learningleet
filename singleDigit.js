/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;

    for (let num of nums) {
        result ^= num;   // XOR each number
    }

    return result;
};

console.log(singleNumber([1,2,3,4,1,2,3])); // 1
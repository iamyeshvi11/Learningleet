/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let sum = 0;
    let minSum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        minSum = Math.min(minSum, sum);
    }

    return minSum < 0 ? 1 - minSum : 1;
};
console.log(minStartValue([-3,2,-3,4,2]));
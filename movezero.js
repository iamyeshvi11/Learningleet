/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[count++] = nums[i];
    }
  }
  while (count < nums.length) {
    nums[count++] = 0;
  }
  return nums;
};

console.log(moveZeroes([1, 0, 3, 4, 0, 5, 0, 9]));

// You are given an integer array nums. You can choose exactly one index (0-indexed) and remove the element. Notice that the index of the elements may change after the removal.

// For example, if nums = [6,1,7,4,1]:

// Choosing to remove index 1 results in nums = [6,7,4,1].
// Choosing to remove index 2 results in nums = [6,1,4,1].
// Choosing to remove index 4 results in nums = [6,1,7,4].
// An array is fair if the sum of the odd-indexed values equals the sum of the even-indexed values.

// Return the number of indices that you could choose such that after the removal, nums is fair.

// Example 1:

// Input: nums = [2,1,6,4]
// Output: 1
// Explanation:
// Remove index 0: [1,6,4] -> Even sum: 1 + 4 = 5. Odd sum: 6. Not fair.
// Remove index 1: [2,6,4] -> Even sum: 2 + 4 = 6. Odd sum: 6. Fair.
// Remove index 2: [2,1,4] -> Even sum: 2 + 4 = 6. Odd sum: 1. Not fair.
// Remove index 3: [2,1,6] -> Even sum: 2 + 6 = 8. Odd sum: 1. Not fair.
// There is 1 index that you can remove to make nums fair.

/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (nums) {
  let n = nums.length;
  let pfodd = [];
  let pfeven = [];
  pfeven[0] = nums[0];
  pfodd[0] = 0;
  for (let i = 1; i < n; i++) {
    if (i % 2 == 0) {
      pfeven[i] = pfeven[i - 1] + nums[i];
      pfodd[i] = pfodd[i - 1];
    } else {
      pfeven[i] = pfeven[i - 1];
      pfodd[i] = pfodd[i - 1] + nums[i];
    }
  }
  let sumodd,
    sumeven,
    c = 0;
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      sumodd = pfeven[n - 1] - pfeven[i];
      sumeven = pfodd[n - 1] - pfodd[i];
    } else {
      sumeven = pfeven[i - 1] + pfodd[n - 1] - pfodd[i];
      sumodd = pfodd[i - 1] + pfeven[n - 1] - pfeven[i];
    }
    if (sumeven == sumodd) c++;
  }
  return c;
};

console.log(waysToMakeFair([2, 1, 6, 4]));

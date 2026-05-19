/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
 let l = nums.length;

  let sum = [];
  sum[0] = nums[0];
  for (let i = 1; i < l; i++) {
    sum[i] = sum[i - 1] + nums[i];
  }
  let Lsum = 0;
  let Rsum;
  for (let i = 0; i < l; i++) {
    if (i == 0)
    {
      Lsum=0;
    }
    else if (i == 1) {
      Lsum = nums[0];
    } else {
      Lsum = sum[i - 1];
    }

    Rsum = sum[l - 1] - sum[i];

    if (Lsum == Rsum) {
      return i;
    }
  }
  return -1;
};

console.log(findMiddleIndex([2,3,-1,8,4]));
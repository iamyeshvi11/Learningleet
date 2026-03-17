// You are given an integer array nums of size n. For each index i where 0 <= i < n, define a subarray
//  nums[start ... i] where
//  start = max(0, i - nums[i]).


/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function(nums) {
    let start=0;
    let result=0;
    for(let i=0;i<nums.length;i++)
    {
        start=Math.max(0,i-nums[i])
        for(let j=start;j<=i;j++)
        {
            result+=nums[j]
        }

    }
return result;
    
};


console.log(subarraySum([3,1,1,2]))
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
for(let i=0;i<nums.length;i++)
{
    if(i==0)
    {
        nums[i]=nums[i];
    }
    else{

        nums[i]=nums[i-1]+nums[i]
    }
}
return nums;
};

console.log(runningSum([0,2,4,5,6]))

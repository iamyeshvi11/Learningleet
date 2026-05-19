/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let Lsum=[];
    let Rsum=[];
    let ans=[]
    let n=nums.length;
    Lsum[0]=0;
    Rsum[n-1]=0;

    for(let i=1;i<n;i++)
    {
       Lsum[i]=Lsum[i-1]+nums[i-1];
    }
  
    for(let i=n-2;i>=0;i--)
    {
       Rsum[i]=Rsum[i+1]+nums[i+1];
    }
   
 for(let i=0;i<n;i++)
    {
       ans[i]=Math.abs(Lsum[i]-Rsum[i]);
    }
    return ans;
};



console.log(leftRightDifference([10,4,8,3]));
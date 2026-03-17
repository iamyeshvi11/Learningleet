/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//     let map= new Map;
//     let n = nums.length;
//     for(let num of nums)
//     {
//        map.set(num,(map.get(num)|| 0)+1);
//     }

//     for(let [key,value] of map)
//     {
//         if(value>Math.floor(n/2))
//         {
//             return key;
//         }
//     }    
// };

var majorityElement = function(nums) {
    let freq=0
    let n = nums.length;
    let ans;
    for(let i=0;i<n;i++)
    {
        if(freq==0)
        {
            freq++;
            ans=nums[i]
        }
     else{
         
    freq+= (nums[i]===ans)?+1 : -1
      
     }
    }

  return ans;
    
};


console.log(majorityElement([2,2,1,1,1,2,2]))

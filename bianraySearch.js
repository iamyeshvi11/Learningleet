


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start=0;
    let end= nums.length; 
    while(start<=end)
    {
        mid= Math.floor((start+end)/2)

        if(nums[mid]==target)
            return mid;
        else
            if(nums[mid]<target)
                start=mid+1;
            else
                end=mid-1;
    }
    
    return -1;
};


console.log(search([1,2,3,4,5],5));
var removeDuplicates = function(nums) {
    let k = 0;

    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] !== nums[i+1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k; 
};

console.log(removeDuplicates([3,2,2,3]));
var minimumSumSubarray = function(nums, l, r) {
    let minSum = Infinity;

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;

        for (let j = i; j < nums.length; j++) {
            sum += nums[j];

            if (sum > l && sum < r) {
                minSum = Math.min(minSum, sum);
            }
        }
    }

    return minSum === Infinity ? 0 : minSum;
};

console.log(minimumSumSubarray([3, -2, 1, 4], 2, 3)); 

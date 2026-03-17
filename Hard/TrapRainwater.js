/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxL = 0, maxR = 0;
    let sum = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= maxL) {
                maxL = height[left];
            } else {
                sum += maxL - height[left];
            }
            left++;
        } else {
            if (height[right] >= maxR) {
                maxR = height[right];
            } else {
                sum += maxR - height[right];
            }
            right--;
        }
    }

    return sum;
};


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
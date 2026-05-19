/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let l=arr.length;
    let sum;
    let total = 0;
    let pfsum = new Array(l + 1).fill(0);

    for (let i = 0; i < l; i++) {
        pfsum[i + 1] = pfsum[i] + arr[i];
    }
    for(let len=1;len<=l;len+=2)
        {

             for(let i=0;i+len<=l;i++)
             {
                sum=pfsum[i+len]-pfsum[i]
                 total+=sum;               
             }
 

        }
   
    return total   
};

console.log(sumOddLengthSubarrays([1,4,2,5,3]))
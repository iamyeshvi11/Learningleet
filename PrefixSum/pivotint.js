/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {

    let total = (n * (n + 1)) / 2;

    let x = Math.sqrt(total);

    if (Number.isInteger(x)) {
        return x;
    }

    return -1;
};

console.log(pivotInteger(8)); // 6


// /**
//  * @param {number} n
//  * @return {number}
//  */



// var pivotInteger = function(n) {

//     let pfsum=[];
//     for(let i=1;i<n;i++)
//     {
//         pfsum[i-1]=(i*(i+1))/2;
//     }
//     let Lsum=0;
//     let Rsum;

//     for(let i=1;i<n;i++)
//     {
//         Lsum=pfsum[i];
//         Rsum= pfsum[n-1]-pfsum[i]
//         if(Lsum==Rsum)
//         {
//             return i+1
//         }
//     }
// return -1
    
// };


console.log(pivotInteger(8))
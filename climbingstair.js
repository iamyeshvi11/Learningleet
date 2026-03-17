/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a=3,b=2;
    if(n<=3)
    {
        return n;
    }
    else{
        for(let i=0;i<n-3;i++)
        {
            a=a+b;
            b=a-b;
        }
    }

    return a;
    
};



console.log(climbStairs(5))
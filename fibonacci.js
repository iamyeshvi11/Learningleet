// const fibonacci=fucntion(n)
// {
// if(n==0)
//     console.log(0);
// if(n==1)
//     console.log(1);
// else
//     console.log(fibonacci(n-1)+fibonacci(n+2))
// }


const fibonacci=function(n)
{
if(n<=1)
    return n;
else
    return fibonacci(n-1)+fibonacci(n-2);
}

const ans = fibonacci(3);
console.log(ans)
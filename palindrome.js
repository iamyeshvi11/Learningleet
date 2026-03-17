const isPalindrome = function(x)
{
 if(x<0)  return  false;

 return x == +x.toString().split("").reverse().join("");
}

const res = isPalindrome(134)

console.log(res);


// + to make in again a number 
// reverse will reverse array on same place 


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let mid=Math.floor(s.length/2)
    let i=0;
    let j=s.length-1
    while(i<mid)
    {
        while(j>=mid)
        {
            if(s[i]==s[j])
            {
                i++;
                j--;
            }
            else{
                return false
            }
        }
    }
   return true
    
};


// isPalindrome("A man, a plan, a canal: Panama");
console.log(isPalindrome("A man, a jplan, a canal: Panama"))

// 012345
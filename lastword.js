var lengthOfLastWord = function(s) {

    let words=s.trim().split(" ");
    let n=words.length;
    let last=words[n-1];
    let arr=last.split("");
    let count=0;
    for(let i =0;i<arr.length;i++)
    {
        count++;
    }
    return count;
};



console.log(lengthOfLastWord( "   fly me   to   the moon  "
));
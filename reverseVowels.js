/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    
    let arr = s.split("");   
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        if (!vowels.has(arr[i])) {
            i++;
        } else if (!vowels.has(arr[j])) {
            j--;
        } else {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            i++;
            j--;
        }
    }

    return arr.join("");  
};



// reverseVowels("IceCreAm")
 console.log(reverseVowels("IceCreAm"))
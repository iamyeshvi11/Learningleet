/**
 * @param {string} s
 * @return {string}
 */
var majorityFrequencyGroup = function(s) {

    /**
 * @param {string} s
 * @return {string}
 */
var majorityFrequencyCharacters = function(s) {
    let freq = new Map();

    for (let ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    let groups = new Map();

    for (let [ch, f] of freq) {
        if (!groups.has(f)) {
            groups.set(f, []);
        }
        groups.get(f).push(ch);
    }

  
    let bestSize = 0;
    let bestFreq = 0;
    let result = [];

    for (let [f, chars] of groups) {

        if (
            chars.length > bestSize ||
            (chars.length === bestSize && f > bestFreq)
        ) {
            bestSize = chars.length;
            bestFreq = f;
            result = chars;
        }
    }

    return result.join("");
};
    
}; 
 
//  let map = new Map();

//     for (let ch of s) 
//         map.set(ch, (map.get(ch) || 0) + 1);

//     let best = new Map();

//     for (let [ch, f] of map) {
//         if (!best.has(f)) best.set(f, []);
//         best.get(f).push(ch);
//     }

//     let ans = [], bestSize = 0, bestFreq = 0;

//     for (let [f, arr] of best) {
//         if (arr.length > bestSize || (arr.length === bestSize && f > bestFreq)) {
//             bestSize = arr.length;
//             bestFreq = f;
//             ans = arr;
//         }
//     }

//     return ans.join("");
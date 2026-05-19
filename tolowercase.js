/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {

    let result = "";

    for (let ch of s) {

        let code = ch.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            result += String.fromCharCode(code + 32);
        } else {
            result += ch;
        }
    }

    return result;
}
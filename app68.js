/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    result = [...new Set(sentence.split('').sort())];
    return result.join('') == "abcdefghijklmnopqrstuvwxyz"
 }

console.log(checkIfPangram("leetcode"))
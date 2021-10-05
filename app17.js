/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase()
    return s.split('').reverse().join('') === s
};

console.log(isPalindrome("A man, a plan, a canal: Panama1"))
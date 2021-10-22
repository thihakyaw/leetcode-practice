/**
 * @param {string} s
 * @return {string}
 */
 var removeVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = "";
    for(let i = 0; i < s.length; i++) {
        if(!vowels.includes(s[i])) {
            result += s[i];
        }
    }
    return result
};

console.log(removeVowels("leetcodeisacommunityforcoders"))
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    s = s.split(' ')
    if (pattern.length != s.length) {
        return false
    }

    let hash = {}

    for(let i = 0; i < pattern.length; i++) {
        console.log(hash);
        if (hash[pattern[i]]) {
            if (hash[pattern[i]] !== s[i]) {
                return false;
           } 
        } else {
            if (Object.values(hash).indexOf(s[i]) !== -1){ //if the string already exist in hashmap but different pattern, return false
                return false;
            } else {
                 hash[pattern[i]] = s[i];
            }
        }
    }
    return true;
};
console.log(wordPattern("aabc", "dog dog cat fish"))
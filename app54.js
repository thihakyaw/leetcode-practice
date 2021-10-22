/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    let hash = {};
    for (let i = 0; i < s.length; i++) {
        hash[indices[i]] = s[i]
    }
    let result = "";
    for (let i = 0; i < s.length; i++) {
        result = result+hash[i];
    }
    return result;
};

console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]))
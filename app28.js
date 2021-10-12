/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let hash = {};

    for (let i = 0; i < s.length; i++) {
        if(hash[s[i]] == undefined) {
            hash[s[i]] = true;
        } else {
            hash[s[i]] = false;
        }
    }

    for(let i = 0; i < s.length; i++) {
        if(hash[s[i]] == true) {
            return i;
        }
    }

    return -1
};

console.log(firstUniqChar("aabb"));
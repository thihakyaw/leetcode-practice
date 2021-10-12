/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    t = t.split('').sort()
    s = s.split('').sort()

    let i = 0;

    while (i < s.length) {
        if (s[i] != t[i]) {
            return t[i]
        }
        i++
    }

    return t[i]
};

console.log(findTheDifference("abcd", "abecd"))
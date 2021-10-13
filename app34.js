/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    s = parseInt(s.trim());

    if(isNaN(s)) {
        return 0
    }

    if (s < -2147483648) {
        return -2147483648
    } else if (s >= 2147483648) {
        return 2147483647
    }
    return s;
};

console.log(myAtoi("   123"))
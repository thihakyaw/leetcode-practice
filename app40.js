/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    return parseFloat((x ** n).toFixed(5))
};

console.log(myPow(2,-2))
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    const K = divisor < 0? -1 : 1
    const L = dividend < 0? -1 : 1

    let result = Math.floor( Math.abs(dividend) / Math.abs(divisor))
    
    return result*(K*L)
};

console.log(divide(-10,-3));
console.log(divide(-5,-1));
console.log(divide(-2147483648,-1));
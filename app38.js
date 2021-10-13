/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {
    result = parseInt(num1) * parseInt(num2)
    return [result.toString()];
};

console.log(multiply("2", "3"));
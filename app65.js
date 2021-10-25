/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
    let result = 0
    
    while (num != 0) {
        if (num % 2 == 1) {
            num--;
        } else {
            num = num / 2
        }
        result ++;
    }

    return result;
};

console.log(numberOfSteps(14))
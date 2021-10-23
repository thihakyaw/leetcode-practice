/**
 * @param {number} num
 * @return {number}
 */
 var maximum69Number  = function(num) {
    let originalNum = num;
    num = num.toString().split('')
    let result = []

    for (let i = 0; i < num.length; i++) {
        if(num[i] == '6') {
            num[i] = '9'
            result.push(num.join(''));
            num[i] = '6'
        } else if (num[i] == '9') {
            num[i] = '6'
            result.push(num.join(''));
            num[i] = '9'
        }
    }
    let largestResult = parseInt(result.sort((a, b) => b-a)[0])

    if(largestResult > originalNum){
        return largestResult; 
    } 
    return originalNum
};

console.log(maximum69Number(9669))
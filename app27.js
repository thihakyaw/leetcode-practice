/**
 * @param {string} num
 * @return {boolean}
 */
 var isStrobogrammatic = function(num) {
    let strobogrammaticNumbers = {
        "0" : "0",
        "1" : "1",
        "6" : "9",
        "8" : "8",
        "9" : "6"
    };

    let nonStrobogrammatic = [
        "2", "3", "4", "5", "7"
    ];
    let string = num.toString();
    for(let i = 0; i < nonStrobogrammatic.length; i++) {
        if(string.includes(nonStrobogrammatic[i])) {
            return false
        }
    }
    
    let array = string.split('');
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(strobogrammaticNumbers[array[i]]);
    }

    if (array.join() == result.reverse().join()) {
        return true;
    }
    return false;
};

console.log(isStrobogrammatic(69))
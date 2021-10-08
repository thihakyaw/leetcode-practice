/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    for(let i = 0; i < numbers.length; i++) {
        y = target - numbers[i];
        index = numbers.indexOf(y);
        numbers[i] = null;
        
        if(numbers.indexOf(y) != -1){
            return [i+1, numbers.indexOf(y)+1]
        }
    }
};

console.log(twoSum([2,7,11,15], 9))
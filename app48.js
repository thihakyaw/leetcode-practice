/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    while (nums.length != 0) {
        let temp = nums.shift();
        if (!nums.includes(temp)) {
            return temp
        } else {
            nums.splice(nums.indexOf(temp), 1)
        }
    }
};

console.log(singleNumber([2,2,1]))
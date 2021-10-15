/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
    return parseInt(nums.sort((a,b) => b-a).join(''))
};

console.log(largestNumber([3,30,34,5,9]))
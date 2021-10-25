/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    nums = nums.sort((a, b) => b - a);
    result = (nums[0]-1) * (nums[1]-1)
    return result
};

console.log(maxProduct([3,4,5,2]))
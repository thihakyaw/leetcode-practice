/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let currentSubArray = nums[0]; // Initialize with first index
    let maxSubArray = nums[0]; // Initialize with first index
     
    for (let i = 0; i < nums.length; i++) {
        currentSubArray = Math.max(nums[i], currentSubArray + nums[i]) // if the sum of currentSubArray and current index value is lesser than current index value, use current index value
        maxSubArray = Math.max(maxSubArray, currentSubArray)// if the maximum sub array value is lower than current sub array, set the maximum sub array to current sub array
    }
     
    return maxSubArray;
};
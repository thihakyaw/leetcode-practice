/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    // while (nums.length > 0) {
    //     let temp = nums.shift()
    //     if (nums.includes(temp)) {
    //         return temp
    //     }
    // }
    nums = nums.sort((a,b) => b - a);

    for (let i = 1; i < nums.length; i++) {
        if(nums[i-1] == nums[i]) {
            return nums[i]
        }
    }
};
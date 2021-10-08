/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        temp = nums[i];
        nums[i] = null;
        if (nums.indexOf(temp) != -1) {
            return true;
        }
    }
    return false;
};

console.log(containsDuplicate([1,2,3,4,5]))
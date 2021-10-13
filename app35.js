/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let start = nums.indexOf(target);

    if(nums[nums.indexOf(target)]) {
        nums[nums.indexOf(target)] = null
    }

     
    if(nums.indexOf(target) == -1) {
        end = start;
    } else {
        while(nums.indexOf(target) != -1) {
            end = nums.indexOf(target)
            nums[nums.indexOf(target)] = null
        }
    }

    return [start, end]
};

console.log(searchRange([3,3,3], 3))
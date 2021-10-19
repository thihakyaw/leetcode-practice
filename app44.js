/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    if(nums.indexOf(target) != -1) {
        return nums.indexOf(target);
    }
    if(target < nums[0]){
        return 0;
    }

    if(target > nums[nums.length-1]){
        return nums.length;
    }

    for(let i = 1; i < nums.length; i++) {
        if(target > nums[i - 1] && target < nums[i]) {
            nums.splice(i, 0, target)
        }
    }

    return nums.indexOf(target);
};

console.log(searchInsert([1,3,5,6], 7));
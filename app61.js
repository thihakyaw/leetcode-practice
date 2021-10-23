/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumGap = function(nums) {
    let gap = 0;
    if(nums.length == 1) {
        return gap;
    }
    nums = nums.sort((a, b) => a - b)
    
    for (let i = 1; i < nums.length; i++) {
        let temp = nums[i] - nums[i-1];

        if(temp > gap) {
            gap = temp;
        }
    }

    return gap;
};

console.log(maximumGap([1,3,6,9]))
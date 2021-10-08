/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let count = 0;
    while(nums.includes(0)) {
        index = nums.indexOf(0)
        nums.splice(index,1);
        count++;
    }

    for(let i = 0; i < count; i++) {
        nums.push(0)
    }
    return nums;
};

console.log(moveZeroes([ 0, 1, 0, 3, 12 ]))
var removeElement = function(nums, val) {
    return nums.filter((element) => element !== val).length
};

console.log(removeElement([3,2,2,3], 3))
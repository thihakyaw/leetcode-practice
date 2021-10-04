var twoSum = function(nums, target) {
    
    let current, x
    
    for (let i = 0; i < nums.length; i++) {
        current = nums[i]
        nums[i] = null;
        x = target - current
        console.log({
            'first' : i,
            'second' : nums.indexOf(x)
        });

        if(nums.indexOf(x) !== -1){
            return [i, nums.indexOf(x)]
        }
    }
};

console.log(twoSum([3,3], 6));
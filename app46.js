/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    let result = [];
    while(nums.length != 0) {
        let find = nums.shift();
        if(nums.includes(find)) {
            nums.splice(nums.indexOf(find), 1);
            result.push(find)
        }
    }

    return result;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]))
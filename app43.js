/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let hash = {};

    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]]) {
            hash[nums[i]] = false;
        } else {
            hash[nums[i]] = true;
        }
    }

    return Object.keys(hash).map(element => parseInt(element));
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
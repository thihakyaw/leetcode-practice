/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    let target = (nums1.length > nums2) ? nums1 : nums2;
    let value = (nums1.length > nums2) ? nums2 : nums1;

    let result = [];

    for (let i = 0; i < target.length; i++) {
        if (value.includes(target[i]) && !result.includes(target[i])) {
            result.push(target[i])
        }
    }
    return result;
};

console.log(intersection([1,2,2,1], [2,2]))
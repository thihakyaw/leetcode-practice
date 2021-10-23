/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var minProductSum = function(nums1, nums2) {
    nums1 = nums1.sort((a, b) => a - b);
    nums2 = nums2.sort((a, b) => b - a);
    let result = 0;
    for (let i = 0; i < nums1.length; i++) {
        result = result + (nums1[i] * nums2[i])
    }

    return result;
};

console.log(minProductSum([2,1,4,5,7], [3,2,4,8,6]))
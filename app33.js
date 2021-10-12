var intersect = function(nums1, nums2) {
    let target = (nums1.length > nums2) ? nums1 : nums2;
    let value = (nums1.length > nums2) ? nums2 : nums1;

    let result = [];
    console.log({
        target:target,
        value:value
    })
    for (let i = 0; i < value.length; i++) {
        if (target.includes(value[i])) {
            result.push(value[i])
        }
        target[target.indexOf(value[i])] = null
    }
    return result;
};

console.log(intersect([1,2,2,1], [1,2]))

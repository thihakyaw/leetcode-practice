/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
    let result = "";
    nums.sort(largestNumberCompetator);


    for (let i = 0; i < nums.length; i++) {
        result += nums[i]
    }

    return result == 0? "0" : result;
};

var largestNumberCompetator = function (a, b) {
    let s1 = "" + a + b;
    let s2 = "" + b + a;

    return s2 - s1;
}

console.log(largestNumber([3,30,34,5,9]));
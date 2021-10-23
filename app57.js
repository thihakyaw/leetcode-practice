/**
 * @param {string[]} words
 * @return {string[]}
 */
 var stringMatching = function(words) {
    words = words.sort((a,b) => a.length - b.length);

    result = [];

    while (words.length > 0) {
        let temp = words.shift();
        let length = words.length;
        for (let j = 0; j < length; j++) {
            if(words[j].includes(temp) && !result.includes(temp)) {
                result.push(temp);
            }
        }
        console.log({
            result:result,
            words:words
        })
    }
    
    return result;
};

console.log(stringMatching(["leetcoder","leetcode","od","hamlet","am"]))
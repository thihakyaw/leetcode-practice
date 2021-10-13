/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let group = [];
    let result = [];

    while(strs.length != 0) {
        let current = strs.pop();
        group.push(current);
        current = current.split('').sort().join('');

        for (let i = 0; i < strs.length; i ++) {
            temp = strs[i].split('').sort().join('');
            if(temp == current) {
                group.push(strs[i])
                strs.splice(i,1);
                i=-1; // LMAO
            }
        }
        result.push(group);
        group = []
    }

    return result;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
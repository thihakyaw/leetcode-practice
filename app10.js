/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let answer = 0;
    let current = 0;
    let hash = {};
    
    for(let i = 0; i < s.length; i++){
        if(s[i] in hash) {
            current = Math.max(hash[s[i]], current)
        }
        
        answer = Math.max(answer, i - current +1)
        hash[s[i]] = i+1
    }
    return answer;
}; 

console.log(lengthOfLongestSubstring("abcabcbb"));
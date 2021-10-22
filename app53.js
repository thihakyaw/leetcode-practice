/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let alphabets = "abcdefghijklmnopqrstuvwxyz";

    hash = {}
    for (let i = 0; i < morse.length; i++){
        hash[alphabets[i]] = morse[i]
    }
    let result = [];
    for (let i = 0; i < words.length; i++) {
        let temp = "";
        for (let j = 0; j < words[i].length; j++){
            temp = temp + hash[words[i][j]]
        }
        result.push(temp)
    }
    return [...new Set(result)].length;
};

console.log(uniqueMorseRepresentations(["a"]))
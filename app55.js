/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    let hash = {};
    let arr = s.split(" ");

    for (let i = 0; i < arr.length; i++) {
        let index = arr[i][arr[i].length-1];
        let temp = arr[i].slice(0, arr[i].length-1);
        hash[index] = temp;
    }

    let result = [];
    for (let i = 1; i < arr.length+1; i++) {
        result.push(hash[i]);
    }

    return result.join(' ');
};

console.log(sortSentence("Myself2 Me1 I4 and3"))
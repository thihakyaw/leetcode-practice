/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
    if(s[0] == '0') return 0;

    let n = s.length
    let twoBack = 1;
    let oneBack = 1;

    for (let i = 1; i < n; i++) {
        let current = 0;

        if(s[i] != '0') {
            current = oneBack;
        }

        let twoDigit = parseInt(s.substring(i-1, i+1));

        if (twoDigit >= 10 && twoDigit <= 26) {
            current+=twoBack;
        }

        twoBack = oneBack;
        oneBack = current;
    }

    return oneBack;
};

console.log(numDecodings('226')) // [[2,2,6][22,6],[2,26]]
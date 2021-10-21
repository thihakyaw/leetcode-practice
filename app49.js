/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    let result = 0;
    columnTitle = columnTitle.split("");
    console.log({
        columnTitle: columnTitle.length
    })
    let j = columnTitle.length -1;
    for (let i = 0; i < columnTitle.length; i++){
        let temp = alphabets.indexOf(columnTitle[i])+1
        console.log({
            temp:temp,
            columnTitle:columnTitle[i],
            expotentialValue:j,
        });
        result += temp * Math.pow(26, j);
        j--;
    }
    return result;
};


console.log(titleToNumber("AZZC"));
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let jewelsArr = jewels.split("");
    let stonesArr = stones.split("");
    let result = 0;

    while(jewelsArr.length > 0) {
        let temp = jewelsArr.pop();
        console.log({
            temp:temp,
            jewelsArr:jewelsArr
        });

        while(stonesArr.includes(temp)){
            stonesArr.splice(stonesArr.indexOf(temp), 1)
            result++;
        }
    }
    return result;
};

console.log(numJewelsInStones("z", "ZZ"))
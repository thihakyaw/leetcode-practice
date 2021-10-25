/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let minimum = 9007199254740991;
    let maximum = 0;

    for(let i = 0; i < prices.length; i++) {
        if (prices[i] < minimum) {
            minimum = prices[i]
        } else if (prices[i] - minimum > maximum) {
            maximum = prices[i] - minimum;
        }
    }
    return maximum
};

console.log(maxProfit([7,6,4,3,1]))
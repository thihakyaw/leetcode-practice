/**
 * @param {number[]} piles
 * @return {number}
 */
 var maxCoins = function(piles) {
    piles = piles.sort((a, b) => b-a);
    let result = 0;
    piles.splice(piles.length - piles.length / 3, piles.length);

    let j = 0;
    for (let i = 1; i < piles.length; i = 2 * j +1){
        result += piles[i];
        j++;
    }

    return result;
};

console.log(maxCoins([9,8,7,6,5,1,2,3,4]))
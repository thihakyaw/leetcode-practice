/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
    let result = [];

    for (let i = 0; i < image.length; i++) {
        let temp = [];
        let reverse = image[i].reverse();
        for (let j = 0; j < reverse.length; j++) {
            if(reverse[j] == 1) {
                temp.push(0)
            } else {
                temp.push(1)
            }
        }
        result.push(temp);
    }

    return result;
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))
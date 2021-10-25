/**
 * @param {string} coordinates
 * @return {boolean}
 */
 var squareIsWhite = function(coordinates) {
    hash = {
        a:1,
        b:2,
        c:3,
        d:4,
        e:5,
        f:6,
        g:7,
        h:8
    }
    
    if(hash[coordinates[0]] % 2 != 0 && parseInt(coordinates[1]) % 2 != 0){
        return false;
    } else if(hash[coordinates[0]] % 2 == 0 && parseInt(coordinates[1]) % 2 == 0) {
        return true
    }
    
};

console.log(squareIsWhite("h3"))
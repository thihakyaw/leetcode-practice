var isPalindrome = function(x) {

    if(x < 0) {
        return false;
    } 
    console.log({
        reversed:  x.toString().split('').reverse().join(''),
        actual: x.toString()
    })
    return x.toString().split('').reverse().join('') === x.toString();
};

console.log(isPalindrome(107))
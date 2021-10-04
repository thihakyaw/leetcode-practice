/**
 * @param {string} s
 * @return {boolean}
 */

//Valid Parentheses
 var isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    }

    let stack = [];

    sArr = s.split('');
    //THIS ONE IS SPECIAL.
    for (var c of sArr) {
        console.log(stack);
        if (c === '[') stack.push(']'); // push into the stack to respective brackets
        else if (c ==='{') stack.push('}');
        else if (c === '(') stack.push(')');
        else if (stack.length === 0 || c !== stack.pop()) return false; //if the stack length is zero and the current bracket is not match to the last stack, it is not a valid parenthese
    }

    if (stack.length === 0) return true;

    return false
};

console.log(isValid(")("));
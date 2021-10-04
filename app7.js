// var longestPalindrome = function(s) {
//     if(s.length == 1) {
//         return s
//     }
//     let palindromes = [];
//     //set the string to array
//     s = s.split('');
//     //Set the intial to two because palindrome at least need two characters 

//     //Loop through the string. splice the string with initials. always end the current intial at //string.length - initial//

//     for(let initial = 1 ; initial <= s.length; initial++) {
//         for(let i = 0; i < s.length; i++) {
//             let tempArr = [...s]
//             let temp = tempArr.splice(i, initial);
//             console.log({
//                 palindrome:temp.join(''),
//                 reverse: temp.reverse().join('') 
//             })
//             if (temp.join('') == temp.reverse().join('')){
//                 console.log({isPalindrome: true})
//                 palindromes.push(temp.join(''));
//             }
//         }
//         console.log({
//             length: s.length,
//             initial:initial
//         })
//     }
//     var max = palindromes[0].length;
//     palindromes.map(v => max = Math.max(max, v.length));
//     return palindromes.filter(v => v.length == max)[0];
// };

var longestPalindrome = function(s) {
    var start = 0;
    var end = 0;

    for (var i = 0; i < s.length; i++) {
        var oddPalindrome = true;
        var lenOdd = expandAroundCenter(s, i, i);
        var lenEven = expandAroundCenter(s, i, i + 1);
        var len = Math.max(lenOdd, lenEven);
        
        if (lenMax === lenEven){
            oddPalindrome = false;
        }

        if (lenMax > (end - start + 1)) {
            start = i - Math.floor(lenMax/2);
            end = i + Math.floor(lenMax/2);
        } else {
            start = (i - (lenMax/2) + 1);
            end = (i + (lenMax/2)) - 1;
        }
    }
    return s.substring(start, end+1);
};

var expandAroundCenter = function(s, left, right) {
    while (L >= 0 && R < s.length && s[L] == s[R]) {
        L--;
        R++;
    }
    R = R-1;
    L = L+1;

    return R-L+1;
}

console.log(longestPalindrome('bb'));
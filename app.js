// Write a function solution that, given a string S of length N, returns any palindrome which can be obtained by replacing all of the question marks in S by lowercase letters ('a'-'z'). 
// If no palindrome can be obtained, the function should return the string "NO". 
// A palindrome is a string that reads the same both forwards and backwards. 
// Some examples of palindromes are: "kayak", "radar", "mom". Examples: 
// 1. Given S = "?ab??a", the function should return "aabbaa". 
// 2. Given S = "bab??a", the function should return "NO". 
// 3. Given S = "?a?", the function may return "aaa". It may also return "zaz", among other possible answers. Assume that: 
// • N is an integer within the range [1..1,000]; • string S consists only of lowercases letters ('a' - 'z') or '?'. In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment. 


// MY NOTE -
// Initially the test was supposed to be solved under 30 minutes. It took me 2 hours to solve this.

function checkPalindrome(string) {
    let stringLength = string.length;

    let firstHalfLength = Math.floor(stringLength / 2);
    let secondHalfLength = stringLength;

    let half = Math.floor(stringLength / 2)
    let halfLetter = []

    if (stringLength % 2 != 0) {
        let half = Math.floor(stringLength / 2)
        halfLetter.push(string[half])
        secondHalf = string.slice(half + 1, secondHalfLength).split('');
    } else {
        secondHalf = string.slice(half, secondHalfLength).split('');
    }

    let firstHalf = string.slice(0, firstHalfLength).split('');

    for (let i = 0; i < firstHalf.length; i++) {
        if (firstHalf[i] == '?' && secondHalf[secondHalf.length - i - 1] == '?') {
            secondHalf[secondHalf.length - i - 1] = 'z'
            firstHalf[i] = 'z'
        }

        if (firstHalf[i] == '?') {
            firstHalf[i] = secondHalf[secondHalf.length - i - 1]
        }
        if (secondHalf[i] == '?') {
            secondHalf[i] = firstHalf[firstHalf.length - i - 1]
        }

        if (firstHalf[i] !== secondHalf[secondHalf.length - i - 1]) {
            return "NO"
        }
    }

    let result = [...firstHalf, ...halfLetter, ...secondHalf];

    return result.join('')
}

console.log(checkPalindrome('?ab??a'));
console.log(checkPalindrome('bab??a'));
console.log(checkPalindrome('?a?'));
/* Given a string s, return the longest palindromic substring in s.
Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer. */

/* 
var longestPalindrome = function (s) {
    //function to find palindrome
    var isPalindrome = function (s) {
        return s === s.split('').reverse().join('');
    }

    let longest = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let substring = s.substring(i, j + 1);
            if (isPalindrome(substring) && substring.length > longest.length) {
                longest = substring;
            }
        }
    }
    return longest;
};
 */
//optimized to 
/* Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters. */

function longestPalindrome(str) {
    // Helper function to expand around the center and return the palindrome
    function expandAroundCenter(str, left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left--; // Move left pointer outward
            right++;// Move right pointer outward
        }
        // Return the palindrome substring found
        return str.slice(left + 1, right);
    }

    let longest = '';
    // Loop through each character to treat it as the center
    for (let i = 0; i < str.length; i++) {
        // Check for odd-length palindromes
        let oddPalindrome = expandAroundCenter(str, i, i);
        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }

        // Check for even-length palindromes
        let evenPalindrome = expandAroundCenter(str, i, i + 1);
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }

    return longest;
}

let s = "babad";
console.log(longestPalindrome(s));
/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome. */

function validPalindrome(s){
    if(s==='' || s===' ') return true;
    let res = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    if(res===res.split('').reverse().join('')){ 
        return true;
    }
    return false;
}

let string = 'madam';
console.log(validPalindrome(string)); 
console.log(validPalindrome("race")); 


var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move left pointer if it's not alphanumeric
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        // Move right pointer if it's not alphanumeric
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }
        
        // Compare characters at left and right pointers (case insensitive)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        
        // Move both pointers inward
        left++;
        right--;
    }

    return true;
};

// Helper function to check if a character is alphanumeric
function isAlphanumeric(char) {
    return /^[a-z0-9]$/i.test(char);  // Regular expression to match alphanumeric characters
}


/* Time Complexity (TC)
Normalization:

s.toLowerCase(): This operation takes O(n), where n is the length of the input string.
replace(/[^a-z0-9]/g, ''): This also takes O(n) because it processes each character to filter out non-alphanumeric characters.
Reversing the String:

res.split('').reverse().join(''):
split('') takes O(m), where m is the length of the normalized string (which can be up to n in the worst case).
reverse() takes O(m).
join('') takes O(m).
Overall, this step is O(m), but since m ≤ n, we can consider this as O(n).
Comparison: The comparison res === ... is O(n) as well.

Overall Time Complexity:
Combining these, the total time complexity is O(n).

Space Complexity (SC)
Normalized String: The res variable holds the filtered and lowercased version of the string, which can be up to O(n) in size.
Intermediate Arrays: The operations split('') and reverse() also create new arrays that can take O(m) space.
Overall Space Complexity:
Thus, the overall space complexity is O(n).

Insights to Remember
Normalization: Always ensure that you're working with a consistent representation of your input (e.g., lowercase, filtering unwanted characters).

Remember the common regex patterns for filtering: [^a-z0-9] is useful for alphanumeric characters.
Palindrome Check: A string is a palindrome if it reads the same forwards and backwards.

Remember that reversing a string can be done by converting it to an array, reversing, and joining.
Complexity Awareness:

When analyzing time complexity, think about the operations that scale with input size.
For space complexity, consider both variables that store data and any temporary data structures used during processing.
Edge Cases:

Always handle edge cases, such as empty strings or strings with only spaces, early in the function.
Practice: Solve more problems involving strings and palindromes to solidify these concepts and their complexities in your mind. */
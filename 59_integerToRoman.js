/* Intuition
The goal is to convert an integer into its Roman numeral representation. Roman numerals are built using specific symbols (I, V, X, etc.) representing certain values. We approach this problem by using the largest possible symbols first, subtracting their value from the number, and continuing the process with the remainder until we reach zero.

The tricky part is handling values that require subtractive notation, like 4 (IV) or 900 (CM).

Approach
Mapping Roman Numerals to Values: First, create an ordered list of Roman numeral symbols with their corresponding values. This list should be ordered from largest to smallest.

Iterate and Subtract: Starting from the largest Roman numeral, we repeatedly subtract its value from the number while it can fit, appending the Roman numeral to the result string.

Stop Condition: Once the number becomes 0, we stop.

Code Walkthrough
Example:
Let's convert the number 3549 to Roman numerals.

Start with the largest numeral, M (1000). How many times can we subtract 1000 from 3549? We can subtract it 3 times:

3549 - 3000 = 549
So far, our Roman numeral is "MMM".
Move to the next numeral, D (500). We can subtract it once:

549 - 500 = 49
Now, the Roman numeral is "MMMD".
Next is C (100). We cannot subtract 100 from 49, so we move to the next smaller numeral, L (50). We also skip this because 50 > 49.

Subtract XL (40) once:

49 - 40 = 9
Roman numeral becomes "MMMDXL".
Finally, subtract IX (9):

9 - 9 = 0
Roman numeral becomes "MMMDXLIX".
The final Roman numeral for 3549 is "MMMDXLIX".

Complexity
Time complexity: Since we iterate through a fixed number of Roman numerals, the time complexity is O(1) (constant time).
Space complexity: The space complexity is also O(1), as we only store a constant amount of data.
 */

var intToRoman = function(num) {
    const romanNum = { // Map numerals to values
        M: 1000, CM: 900, D: 500, CD: 400,
        C: 100, XC: 90, L: 50, XL: 40,
        X: 10, IX: 9, V: 5, IV: 4, I: 1
    };

    let str = ''; // Result string

    // Loop through Roman numerals
    for (let i of Object.keys(romanNum)) {
        let quotient = Math.floor(num / romanNum[i]); // Find how many times a numeral fits
        num -= quotient * romanNum[i]; // Subtract from num
        str += i.repeat(quotient); // Append the numeral to result
    }

    return str; // Return final Roman numeral
};
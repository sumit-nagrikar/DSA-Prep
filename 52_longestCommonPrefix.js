/* 14. Longest Common Prefix
Easy
Topics
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
  */
var longestCommonPrefix = function(strs) {
    // If the array is empty, return an empty string
    if (strs.length === 0) return "";

    // Start with the first word as the prefix
    let prefix = strs[0];

    // Loop through the remaining strings in the array
    for (let i = 1; i < strs.length; i++) {
        // Keep reducing the prefix while it's not a prefix of the current word
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1); // Remove the last character of the prefix
            if (prefix === "") return ""; // If there's no common prefix, return an empty string
        }
    }

    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
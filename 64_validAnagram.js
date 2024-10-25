/* 242. Valid Anagram
Easy
Topics
Companies
Given two strings s and t, return true if t is an 
anagram
 of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case? */


var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    let charCount = {};//each char appeared how many times

    for(let char of s){
        charCount[char] = (charCount[char] || 0) + 1;// Count characters in s
    }

    for(let char of t){
        if(!charCount[char]) return false;//if its not there in map
        charCount[char]--;//if its there in map, reduce the count
    }
    return true;
};
/* Explanation of the Code:
Frequency Count Method:

We first check if the lengths of s and t are equal. If not, they cannot be anagrams.
We create an object charCount to count the occurrences of each character in s.
We then iterate over t, checking if each character exists in charCount and reducing its count.
If we finish checking t and all characters match, we return true.
Sorting Method:

After checking for equal lengths, we sort both strings.
Finally, we compare the sorted versions. If they match, s and t are anagrams.
Complexity
Frequency Count Method:

Time Complexity: 
𝑂
(
𝑛
)
O(n)
Space Complexity: 
𝑂
(
1
)
O(1) for lowercase English letters or 
𝑂
(
𝑘
)
O(k) for Unicode, where 
𝑘
k is the number of unique characters.
Sorting Method:

Time Complexity: 𝑂(𝑛 log 𝑛)
O(nlogn)
Space Complexity:𝑂(𝑛)
O(n) due to the storage used for sorting.
Both methods are valid, but the frequency count method is generally more efficient, especially for larger strings. */
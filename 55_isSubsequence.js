/* 392. Is Subsequence
Easy
Topics
Companies
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true */

var isSubsequence = function(s, t) {
    let i = 0, j = 0;
    while(i < s.length && j < t.length){
        if(s.charAt(i) === t.charAt(j)){//if characters matches i move forward
            i++;
        }
        j++;//Either match or not match j will move forward
    }
    return i === s.length;//Agar i ki value s ke length ke barabr ho jati hai, means
                        //we s is a subsequence
};

console.log(isSubsequence('abc','ahjhbjc'));



/* Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code? 

Solution: Optimization for Follow-up:
To optimize for multiple queries, you could preprocess string t into a data structure that allows you to efficiently check subsequence status for multiple strings. One way to do this is:

Preprocessing t with Index Maps: Build a map where each character in t is associated with a list of indices. For each s, use binary search to find the next valid index in t to continue the sequence. This reduces the redundant scanning of t for multiple queries.
Example Approach for Follow-up:
Preprocess t by storing the positions of each character.
For each query string s, use binary search to find the next occurrence of each character in t.
This would bring the complexity of checking each subsequence down, especially when t is large and many s queries are given.*/

// Follow-up: Handle multiple queries
// Use a binary search technique on preprocessed indices of characters in string `t`
// Optimized for checking multiple `s` queries against the same `t`

function preprocess(t) {
    let indexMap = new Map();
    for (let i = 0; i < t.length; i++) {
        const ch = t[i];
        if (!indexMap.has(ch)) {
            indexMap.set(ch, []);
        }
        indexMap.get(ch).push(i);
    }
    return indexMap;
}

function findNextIndex(indices, currentIndex) {
    let left = 0, right = indices.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (indices[mid] > currentIndex) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left < indices.length ? indices[left] : -1;
}

function isSubsequence(s, t, indexMap) {
    let currentIndex = -1;
    for (let ch of s) {
        if (!indexMap.has(ch)) {
            return false;
        }
        currentIndex = findNextIndex(indexMap.get(ch), currentIndex);
        if (currentIndex === -1) {
            return false;
        }
    }
    return true;
}

function processMultipleSubsequences(queries, t) {
    const indexMap = preprocess(t);
    return queries.map(s => isSubsequence(s, t, indexMap));
}

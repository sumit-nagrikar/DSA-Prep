/* 290. Word Pattern
Easy
Topics
Companies
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.
 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"

Output: true

Explanation:

The bijection can be established as:

'a' maps to "dog".
'b' maps to "cat".
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"

Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"

Output: false

 

Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space. */

function wordPattern(pattern,s){
    let words = s.split(' ');
    if(pattern.length !== words.length) return false;//false if len of char & words is different

    let charToWord = {}
    let wordToChar = {}

    for(let i=0; i<words.length; i++){
        let char = pattern[i];
        let word = words[i];

        //Used hasOwnProperty(char) because if constrcutor word occured inside s, it refer to constructor property
        if(charToWord.hasOwnProperty(char) && charToWord[char] !== word) return false;
        if(wordToChar.hasOwnProperty(word) && wordToChar[word]!== char) return false;

            charToWord[char] = word;
            wordToChar[word] = char;
    }
    return true;
}

let pattern = "abba", s = "dog cat cat dog";
console.log(wordPattern(pattern,s));
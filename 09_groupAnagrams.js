/* Given an array of strings strs, group the 
anagrams
 together. You can return the answer in any order.

 Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other. */

var groupAnagrams = function(strs){
    let anagramsMap = new Map(); // for storing anagrams

    for (const str of strs) {
        // sort the string to use as a key
        let sortedStr = str.split('').sort().join('');
        //check if its there in our hashMap
        if(anagramsMap.has(sortedStr)){
            anagramsMap.get(sortedStr).push(str);//push in already presented array-find adress using get and push in same
        }else{
            // Otherwise, create a new key with the original string in a list
            anagramsMap.set(sortedStr,[str]);
        }
    }
    return Array.from(anagramsMap.values());//Array.from creates an array from iterable object
}

let strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));

/* Example Dry Run:
Input: ["eat","tea","tan","ate","nat","bat"]
Initialize anagramsMap = new Map().

Process each string:

"eat" → sorted: "aet" → anagramsMap = {"aet": ["eat"]}
"tea" → sorted: "aet" → anagramsMap = {"aet": ["eat", "tea"]}
"tan" → sorted: "ant" → anagramsMap = {"aet": ["eat", "tea"], "ant": ["tan"]}
"ate" → sorted: "aet" → anagramsMap = {"aet": ["eat", "tea", "ate"], "ant": ["tan"]}
"nat" → sorted: "ant" → anagramsMap = {"aet": ["eat", "tea", "ate"], "ant": ["tan", "nat"]}
"bat" → sorted: "abt" → anagramsMap = {"aet": ["eat", "tea", "ate"], "ant": ["tan", "nat"], "abt": ["bat"]}
Return the values: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]].

Time and Space Complexity:
Time Complexity:

Sorting each string takes O(k log k), where k is the length of the string.
We do this for each of the n strings in the array.
Total time complexity: O(n * k log k), where n is the number of strings and k is the maximum length of a string.
Space Complexity:

The space complexity is O(n * k) due to storing the strings in the map and the sorted strings as keys.
Conclusion:
This solution efficiently groups the anagrams together and handles the constraints provided. It makes use of a hash map to group strings that are anagrams of each other by sorting them. This is a standard approach to solve anagram grouping problems.

Here are some hints and key points to help you remember how to approach the "Group Anagrams" problem in the future:

1. Anagram Definition:
Anagrams are words formed by rearranging the letters of another word.
Example: "eat", "tea", and "ate" are anagrams because they consist of the same letters but in different orders.
2. Key Idea: Sorting for Grouping:
Sorted Strings: If you sort the characters of all anagrams, they will become identical. This is the most important idea.
Example: Sort "eat" → "aet", Sort "tea" → "aet", Sort "ate" → "aet". Now all three strings have the same sorted form.
3. Hash Map for Grouping:
Use a Hash Map (Dictionary) where the key is the sorted string, and the value is a list of anagrams.
Each time you encounter a string, sort it and check if it exists in the map. If it does, append the string to the corresponding list. Otherwise, create a new list with that string.
4. Plan the Flow:
Iterate over each string.
Sort the string.
Check if the sorted string is in the hash map:
If yes, append the string to the list.
If no, create a new entry in the hash map.
Return the values of the hash map as the grouped anagrams.
5. Dry Run Example:
Try to recall a simple example like: ["eat", "tea", "tan", "ate", "nat", "bat"] and mentally group the sorted strings.
6. Think of Edge Cases:
Single-letter Strings: ["a"] → grouped by itself.
Empty String: [""] → sorted is still [""].
No anagrams: Strings that are not anagrams form their own groups like ["bat"].
7. Time and Space Complexity:
Sorting Each String: O(k log k) where k is the length of the string.
Looping Through All Strings: O(n) where n is the number of strings.
Total Time Complexity: O(n * k log k), where n is the number of strings and k is the average length of the strings.
8. Quick Reference of Code:
Always remember that sorting strings and using them as keys is the core approach. This small piece of code might help you remember:
js
Copy code
for (let str of strs) {
    let sortedStr = str.split('').sort().join('');
    // Use sortedStr as key to group anagrams
}
9. Alternative Methods:
Character Counting: Instead of sorting, another approach is to create a frequency count of characters. However, sorting is easier to recall and code.
10. Practice Similar Problems:
Practice problems like "Valid Anagram" or "Isomorphic Strings" to solidify the concept of working with anagrams and grouping similar items.
Summary:
Sort and Group.
Use a Hash Map to group anagrams with sorted strings as keys.
Think of Examples and Edge Cases to solidify your understanding.
Having these points in mind will help you recall the steps easily when you encounter this problem again.
*/
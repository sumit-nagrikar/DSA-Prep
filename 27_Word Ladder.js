/* Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 

Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long. */

var ladderLength = function(beginWord, endWord, wordList){
    const wordSet = new Set(wordList);//for fast lookup
    let queue = [beginWord];//we going to work on one level of queue at a time
    let steps = 1; //steps to find last word i.e.  length/ 1 initially as we are on first word

    while(queue.length){
        const next = []//to store next levels of nodes/elements
        // loop over each word in the queue
        for(const word of queue){
            if(word === endWord) return steps; //cause this is what we want to find obviously
            //altering words and check them
           //loop over each char of word
           //we need two loops - need to change on ele of word while others are as it is , each time
           for(let i=0; i<word.length; i++){
            for(let j=0;j<26; j++){  // and replace the char with letters from [a - z]
                const newWord = word.slice(0,i) +String.fromCharCode(j + 97) + word.slice(i+1);
                if(wordSet.has(newWord)){//ek change krne k baad match ho gaya/add it to queue -to check next
                    next.push(newWord);
                    wordSet.delete(newWord);
                }
            }
           }

        }
        queue = next;
        steps++;
    }
    return 0;
} 

let beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","fog","log","cog"];
console.log(ladderLength(beginWord,endWord,wordList));







/* This JavaScript function ladderLength is an implementation of a breadth-first search (BFS) to solve the Word Ladder problem, where the goal is to find the shortest transformation sequence from a beginWord to an endWord such that:

Only one letter can be changed at a time.
Each transformed word must exist in the given word list.
Let's break down the function step by step:

1. Initial Setup:
js
Copy code
const wordSet = new Set(wordList);
A Set is used to store the word list, which allows for faster lookup (O(1) on average).
js
Copy code
let queue = [beginWord];
let steps = 1;
A queue is initialized with the beginWord. This is a common BFS technique.
steps keeps track of how many transformations have been made.
2. Main BFS Loop:
js
Copy code
while(queue.length) {
    const next = [];
    ...
}
The while loop continues until there are no more words to process.
In each iteration, it processes the current queue of words, which represents the current "layer" of transformations in the BFS.
3. Process Each Word:
js
Copy code
for (let word of queue) {
    if (word === endWord) return steps;
    ...
}
For each word in the current queue, if the word equals endWord, it returns steps because we've found the shortest transformation sequence.
4. Generate New Words:
js
Copy code
for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < 26; j++) {
        const newWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);
        ...
    }
}
The function generates new words by iterating over every position i in the word, then replacing the character at that position with every letter from 'a' to 'z'. This generates possible transformations of the word.
5. Check and Add New Words to Queue:
js
Copy code
if (wordSet.has(newWord)) {
    next.push(newWord);
    wordSet.delete(newWord);
}
If the generated newWord exists in the word list (wordSet), it is added to the next queue and removed from the Set. This ensures that we don't revisit the same word multiple times.
6. Move to the Next Layer of BFS:
js
Copy code
queue = next;
steps++;
Once all the words in the current layer have been processed, the queue is replaced by the next layer of words, and the steps counter is incremented.
7. Return 0 if No Transformation:
js
Copy code
return 0;
If the endWord is not reached after exploring all possible transformations, the function returns 0, indicating that no valid transformation sequence exists.
Complexity:
Time Complexity: O(N * M * 26), where N is the number of words in wordList and M is the length of each word. The 26 comes from checking each character position with 26 letters.
Space Complexity: O(N), since we store the word list in a Set and use a queue for BFS.
Further Considerations:
Optimization: You can improve the performance by using bi-directional BFS, where you search from both the beginWord and endWord simultaneously, meeting in the middle. This significantly reduces the number of iterations needed. */
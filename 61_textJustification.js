var fullJustify = function(words, maxWidth) {// array & number
    let result = [];
    let currLine = [];
    let currLen = 0;

    for (let word of words) {
        // Check if adding this word exceeds maxWidth
        if (currLen + currLine.length + word.length > maxWidth) {
            // Distribute spaces for the current line
            for (let i = 0; i < maxWidth - currLen; i++) {
                currLine[i % (currLine.length - 1 || 1)] += ' ';//loop between 0 and 1 if we have 3 words
            }
            result.push(currLine.join(''));  // Add the justified line to result
            currLine = [];//empty this things & again char dalna suru hojayega
            currLen = 0;
        }
        currLine.push(word); // Add the current word to the line
        currLen += word.length; // Update the length of the current line
    }

    // Handle the last line (left-justified)
    result.push(currLine.join(' ') + ' '.repeat(maxWidth - currLen - (currLine.length - 1)));
    return result;
};

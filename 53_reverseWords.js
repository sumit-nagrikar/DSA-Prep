
var reverseWords = function(s) {
    // Trim the input string
    s = s.trim();
    // Split the string into words using spaces as the delimiter
    let words = s.split(/\s+/);
    // Reverse the order of the words
    words.reverse();
    // Join the words into a single string
    return words.join(' ');
};

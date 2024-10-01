/* function longestSubstringWithoutRepeatingChars(str) {
    let longest = '';//to strore longest found substring
    for (let i = 0; i < str.length; i++) {
      let substring = '';
      for (let j = i; j < str.length; j++) {
        if (substring.includes(str[j])) {
          break;//exits from loop
        }
        substring += str[j];
      }
      //update the longest string
      if (substring.length > longest.length) {
        longest = substring;
      }
    }
    return longest.length;
  }
  
  console.log(longestSubstringWithoutRepeatingChars("abcdbcbb"));
 */
  //optimised solution //length of
  function longestSubstringWithoutRepeatingChars(str) {
    let longest = 0;
    let start = 0;
    let charMap = new Map();
    for (let end = 0; end < str.length; end++) {
      if (charMap.has(str[end])) {
        start = Math.max(start, charMap.get(str[end]) + 1);
      }
      charMap.set(str[end], end);
      let substring = str.slice(start, end + 1);
      if (substring.length > longest.length) {
        longest = substring.length;
      }
    }
    return longest;
  }
  
  console.log(longestSubstringWithoutRepeatingChars("abcdbcbb"));
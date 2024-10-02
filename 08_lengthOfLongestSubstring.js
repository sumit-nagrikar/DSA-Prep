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
  var lengthOfLongestSubstring = function(s) {
    let charSet = new Set();//to store passing charaters with their occured index
    let left = 0, maxLength = 0;//left to delete duplicates and right for iteration

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};
  
  ;
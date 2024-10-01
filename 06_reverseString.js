/* Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 
*/
//Example 1:

s = ["h","e","l","l","o"]

//Output: ["o","l","l","e","h"] 

//code 

function reverseString(s){
    let start = 0; // left pointer
    let end = s.length -1; //right pointer

    //while loop to run while left<right
    while(start<end){
        [s[start],s[end]] = [s[end],s[start]]//swapping indices
        start++;
        end--;
    }
    return s;
}

console.log(reverseString(s));
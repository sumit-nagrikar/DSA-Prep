
/* Understanding the Zigzag Conversion Problem:
The idea is to write a string in a zigzag pattern across a specific number of rows and then read the characters row by row.

Example 1:

css
Copy code
PAYPALISHIRING, numRows = 3
P   A   H   N
A P L S I I G
Y   I   R
Result: PAHNAPLSIIGYIR */
var convert = function (s, numRows) {
    if (numRows === 1) return s;//agar ek sirf 1 row hai, to as it is return kr do

    //create one array jisme multiple empty strings hai & numRows, s jiski length km hai, us length ka array
    const rows = Array(Math.min(numRows, s.length)).fill("");

    let currRow = 0; //To track , hum kis empty string pe hai

    let goingDown = false; // 0, 1, 2 aise strings me travel krte huye, agar aage jate hai to false , oothervise true krenge/ its imp cause har ek empty string fill krte huye agar last row chale gaye , to next pichec aana hoga/ aur agar 0 pe hai to aage jaana hoga

    //now iterate and fill the strings one by one
    for (let char of s) {
        rows[currRow] += char;//add first char
        //next check upar hai to niche jao
        if (currRow === 0 || currRow === numRows - 1) {
            goingDown = !goingDown;//toggle- true ka false, false ka true
        }
        //if goingDown is true increase row or decrease
        currRow += goingDown === true ? 1 : -1;
    }
    return rows.join('');//join all strrings in array & return as single string
};

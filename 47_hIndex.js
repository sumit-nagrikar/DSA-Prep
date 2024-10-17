/* 274. H-Index
Solved
Medium
Topics
Companies
Hint
Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

 

Example 1:

Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3. */

var hIndex = function (citations) {
    citations.sort((a, b) => b - a);//sort array in descending order to look greater citations first
    let hIndex = 0;//count no on papers meet the criteria

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {//if no of citations are greater than current index(paper no.)
            hIndex = i + 1;//increase index count
        } else {//break loop , no need to check further
            break;
        }
    }
    return hIndex;
}

let citations = [3,0,6,1,5];

console.log(hIndex(citations));
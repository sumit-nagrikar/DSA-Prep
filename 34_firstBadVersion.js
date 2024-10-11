/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 1, r = n;

        while (l < r) {
            const mid = Math.floor((l + r) / 2);
            if (isBadVersion(mid)) {
                r = mid; // Move the right boundary
            } else {
                l = mid + 1; // Move the left boundary
            }
        }

        return l; // l will be the first bad version
    };
};

/* Example Usage:
Here’s an example of how you might use this function with a mock implementation of isBadVersion:
 */

// Mock implementation for testing
const isBadVersion = (version) => {
    return version >= 4; // Let's say versions 4 and above are bad
};

const findFirstBadVersion = solution(isBadVersion);
console.log(findFirstBadVersion(5)); // Output: 4

/*Complexity Analysis:
Time Complexity: O(log n), as we are effectively halving the search space each time we check a version.
Space Complexity: O(1), as we are using a constant amount of space for variables.

Overview of the Problem:
You are given a function isBadVersion(version) that returns true if the version is bad and false otherwise. You need to find the first version that is bad among n versions (numbered from 1 to n).

How the Code Works:
Initialization:

l is initialized to 1, which represents the first version.
r is initialized to n, representing the last version.
Binary Search Loop:

The loop continues while l is less than r.
mid is calculated as the midpoint between l and r.
If isBadVersion(mid) returns true, it means the first bad version is at mid or to the left of mid, so r is updated to mid.
If isBadVersion(mid) returns false, it means the first bad version must be to the right of mid, so l is updated to mid + 1.
Return Value:

When the loop ends, l will be the index of the first bad version. This is because when l meets r, it points to the first version that is bad. */
/* 209. Minimum Size Subarray Sum
Medium
Topics
Companies
Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
 

Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)). */

/* Approach
declare object to track nums and index
for loop to iterate on nums.length
find complement for each number, target - number
find it in the object
if its there , return absolute value by subtracting
if not there in object
just add it with its index
at last return 0 */

var minSubArrayLen = function(target, nums) {
    let left = 0;
    let currentSum = 0;
    let minLength = Infinity;

    for(let right = 0; right < nums.length; right++){
        currentSum += nums[right];
        while(currentSum >= target){
           minLength = Math.min(minLength, right - left + 1);//update min length
           currentSum -= nums[left];//reducing the sum, to check if it is smaller one 
           left++;
        }
    }//if still minLength is inifinity return that or else return minLength
    return minLength === Infinity ? 0 : minLength;
};

let target = 11, nums = [1,1,1,1,1,1,1,1];
console.log(target,nums);

/* Intuition
To find the minimum length of a contiguous subarray with a sum that is at least target, the sliding window approach is ideal. We continuously expand the window by moving the right pointer to increase the sum and check if the sum meets the target. Once the target is reached, we can increment the left pointer to shrink the window and try to find a smaller subarray that also meets the requirement. This approach is efficient because it avoids resetting pointers and allows us to explore all possible subarrays without redundant checks.

Approach
Initialize Variables:

Use two pointers, left and right, where left marks the start of the window, and right expands the window.
Initialize currentSum to keep track of the sum of elements in the window.
Set minLength to infinity (Infinity in JavaScript, float('inf') in Python) to store the smallest length found that meets the target.
Expand the Window:

Iterate through nums with the right pointer.
For each element at right, add nums[right] to currentSum.
Shrink the Window:

After adding nums[right], check if currentSum is greater than or equal to target.
While currentSum >= target, calculate the length of the current window (right - left + 1) and update minLength if this is the smallest length found so far.
Then, shrink the window by moving left forward and subtract nums[left] from currentSum.
Check the Result:

After exiting the loop, if minLength is still infinity, it means no subarray met the requirement, so return 0. Otherwise, return minLength.
Example Walkthrough
Let’s consider an example: target = 7 and nums = [2, 3, 1, 2, 4, 3].

Start with left = 0, right = 0, currentSum = 0, and minLength = Infinity.
Expand the window by moving right:
Add nums[0] = 2, making currentSum = 2.
Add nums[1] = 3, making currentSum = 5.
Add nums[2] = 1, making currentSum = 6.
Add nums[3] = 2, making currentSum = 8. Now, currentSum >= target, so calculate the window length, right - left + 1 = 4, and update minLength = 4.
Shrink the window:
Move left to 1, making currentSum = 6.
Since currentSum < target, stop shrinking and continue expanding.
Continue expanding and shrinking until the minimum length is found.
Complexity
Time complexity: (O(n)) because each element is processed at most twice (once added, once subtracted).
Space complexity: (O(1)) since only a few extra variables are used. */
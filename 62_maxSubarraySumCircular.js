/*
918. Maximum Sum Circular Subarray
Medium
Topics
Companies
Hint
Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.

A circular array means the end of the array connects to the beginning of the array. Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].

A subarray may only include each element of the fixed buffer nums at most once. Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.

 

Example 1:

Input: nums = [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3.
Example 2:

Input: nums = [5,-3,5]
Output: 10
Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.
Example 3:

Input: nums = [-3,-2,-3]
Output: -2
Explanation: Subarray [-2] has maximum sum -2.
 

Constraints:

n == nums.length
1 <= n <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
 */

var maxSubarraySumCircular = function (nums) {
    // Step 1: Kadane's for maximum subarray sum without wraparound
    let maxSum = nums[0];
    let currMax = nums[0];
    let totalSum = nums[0];
    let minSum = nums[0];
    let currMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currMax = Math.max(nums[i], currMax + nums[i]);
        maxSum = Math.max(maxSum, currMax);

        currMin = Math.min(nums[i], currMin + nums[i]);
        minSum = Math.min(minSum, currMin);

        totalSum += nums[i];
    }

    // If all elements are negative, return maxSum
    if (maxSum < 0) return maxSum;

    // Otherwise, return the max of normal and circular sums
    return Math.max(maxSum, totalSum - minSum);
};

console.log(maxSubarraySumCircular([1,-2,3,-2]));
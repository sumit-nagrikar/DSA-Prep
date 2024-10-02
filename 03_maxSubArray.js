/* Problem Statement:
You are given an array of integers, and you need to find the contiguous subarray that has the largest sum.

Approach:
In the brute force method, you calculate the sum of every possible subarray and keep track of the maximum sum. This involves checking all subarrays (starting from every element) and finding their sum to compare with the current maximum.

Steps:
Start from each element and calculate the sum of all subarrays starting from that element.
For each subarray, compare its sum with the maximum sum found so far.
Update the maximum sum if a new larger subarray sum is found. */

//CODE 

function maxSubArray(nums) {
    let maxSum = -Infinity;// smallest possible value
    // Outer loop: starting index of the subarray
    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;

        //find the currentSum for every continuous sum
        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j]

            //update the maxSum
            if (currentSum > maxSum) {
                maxSum = currentSum
            }

        }

    }

    return maxSum;
}

// Test cases  TC O(n^2) and SC - O(1)
/* console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));  // Output: 6
console.log(maxSubArray([1]));  // Output: 1
console.log(maxSubArray([5, 4, -1, 7, 8]));  // Output: 23
let nums = [-1, -2, 3, 5, 6, -4, -5]
console.log(maxSubArray(nums));//14
 */

//maxSubArray using Kadane's Algorithm & return its largest sum

/* Approach 1: Kadane's Algorithm (O(n) Solution)
The idea of Kadane's Algorithm is to keep track of the maximum subarray sum ending at each position while iterating through the array, and updating the global maximum sum if necessary.

Steps:
Start with the first element as your initial sum (both for current and global max).
For each new element:
Either add the element to the current subarray or start a new subarray (whichever is larger).
Update the global maximum sum if the current subarray sum is greater than the global max.
At the end, the global maximum sum is the answer. */

var maxSubArrayUsingKadanes = function(nums){
    let currentSum = nums[0];  // Start with the first element as the current sum
    let maxSum = nums[0];      // Start with the first element as the maximum sum

    for(let i=1; i<nums.length; i++){
        // Update currentSum: either add the current element or start fresh from current element
        currentSum = Math.max(nums[i],currentSum + nums[i]);//we taking the only nums[i] cause, adding the numbers making lowering the value  due to negative price 

        // Update maxSum if currentSum is greater
        maxSum = Math.max(currentSum,maxSum);
    }
    return maxSum;
}

// Test cases  TC O(n) and SC - O(1)
console.log(maxSubArrayUsingKadanes([-2, 1, -3, 4, -1, 2, 1, -5, 4]));  // Output: 6
console.log(maxSubArrayUsingKadanes([1]));  // Output: 1
console.log(maxSubArrayUsingKadanes([5, 4, -1, 7, 8]));  // Output: 23

/*  Kadane’s Algorithm (Maximum Subarray Problem):
Statement: "Keep going if things are good, but start fresh if it gets too bad."

Key Idea: Keep adding elements to the current subarray as long as it improves your sum. If adding a new element worsens the total sum, start a new subarray from that point.
Memory Tip: Think of walking through a forest—if the weather is bad (negative sum), start again at a sunny spot (positive element) to find the best journey (maximum sum). */
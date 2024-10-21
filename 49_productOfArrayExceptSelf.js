/* 238. Product of Array Except Self
Attempted
Medium
Topics
Companies
Hint
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
 */
/* var productExceptSelf = function(nums) {
    let res = new Array(nums.length).fill(1);
    for(let i=0; i<nums.length; i++){
    for(j=0; j<nums.length; j++){
        if(i=== j) continue;
        res[i] *= nums[j]; 
    }
}
return res;
}; */

// tip : aplyala consecutive

var productExceptSelf = function(nums) {
    let n = nums.length;
    let res = new Array(n).fill(1); // Initialize the answer array with 1s

    if(n<1) return answer;  
    // Step 1: Calculate product from left answer = [1, 1, 1, 1] nums = [1, 2, 3, 4]
    let prefix = 1;
    for (let i = 0; i < n; i++) {//1 1 2 6
        res[i] = prefix; // Store the product in the answer array
        prefix *= nums[i]; // Update product by multiplying with the current element
    }

    // Traverse from right to update answer array   
    postfix = 1;
    for (let i = n - 1; i >= 0; i--) {//4 6
        res[i] *= postfix; // Multiply the current product with the stored product
        postfix *= nums[i]; // Update product by multiplying with the current element
    }
    return res;
};

let nums = [1,2,3,4];
console.log(productExceptSelf(nums));
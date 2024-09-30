/* Problem Explanation:
You have an array nums and an integer k. The goal is to rotate the array to the right by k steps.

When we say rotate to the right, it means that the last element of the array moves to the front, and everything else shifts one position to the right. You do this operation k times.

Example:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Breakdown of Steps:
Start with nums = [1,2,3,4,5,6,7].
Rotate by 1 step: Move the last element (7) to the front.
After 1 step: [7,1,2,3,4,5,6]
Rotate by 2 steps: Move the new last element (6) to the front.
After 2 steps: [6,7,1,2,3,4,5]
Rotate by 3 steps: Move the new last element (5) to the front.
After 3 steps: [5,6,7,1,2,3,4]
This is what happens when you rotate the array to the right k=3 times.

Easy Explanation of the Approach:
To do this rotation efficiently, instead of doing each step one by one, we can:

Reverse the entire array: This will put the elements in reverse order.
From: [1,2,3,4,5,6,7]
To: [7,6,5,4,3,2,1]
Reverse the first k elements: This restores the order of the first k elements.
From: [7,6,5,4,3,2,1]
To: [5,6,7,4,3,2,1]
Reverse the remaining elements: This restores the order of the rest of the array.
From: [5,6,7,4,3,2,1]
To: [5,6,7,1,2,3,4]
This method rotates the array in place and efficiently in just a few operations.

Why Reverse?
Reversing parts of the array allows us to shift elements in bulk rather than one by one, which is why it's faster and simpler in terms of coding.

If you understand this approach, rotating any array by k steps will be simple! */

var rotate = function(nums, k) {
   // Handle edge case for array length 0 or 1
   if(nums.length <= 1) return nums;

   //Normalize k to avoid unnecessary rotations
   k = k % nums.length;

   //Function to reverse elements in the array from start to end
   const reverse = (start,end) => {
    while(start<end){
        [nums[start],nums[end]] = [nums[end], nums[start]];//swaping elements
        start++;
        end--;
    }
   }

   // Step 1: Reverse the entire array
   reverse(0, nums.length-1);

   // Step 2: Reverse the first k elements
   reverse(0, k-1);

   //Step 3: Reverse the remaining elements
   reverse(k, nums.length-1)
};

// Example usage:
let arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 3); // arr is now [5, 6, 7, 1, 2, 3, 4]
console.log(arr);
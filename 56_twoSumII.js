/* 167. Two Sum II - Input Array Is Sorted
Medium
Topics
Companies
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3]. 

Correct Approach: Two-pointer technique
Two-pointer logic:

Start with two pointers: one at the beginning (left) and one at the end (right) of the array.
Calculate the sum of the elements at these two pointers.
If the sum equals the target, return the 1-based indices of the two numbers.
If the sum is less than the target, move the left pointer to the right to increase the sum.
If the sum is greater than the target, move the right pointer to the left to decrease the sum.
Space efficiency:

This approach only uses constant extra space (O(1)) as required.*/

function twoSum(numbers,target){
    let left = 0;
    let right = numbers.length - 1;
    
    while(left < right){
        let sum = numbers[left] + numbers[right];//find sum

        //if sum matches the target return indices based from 1
        if(sum === target){
            return [left + 1,right + 1];
        }else if(sum < target){
            left++;
        }else{
            right--;
        }
    }
    return []; // If no solution available
}

let numbers = [2,3,4], target = 6;
console.log(twoSum(numbers,target));

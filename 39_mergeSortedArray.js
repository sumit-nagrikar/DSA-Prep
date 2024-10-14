/* You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2: */

/* Understanding 
The challenge is to use the extra space at the end of nums1 and perform the merging in a way that doesn't require creating additional arrays.
We need to arrange all numbers in nums1

Approach
Since both arrays are sorted, a smart approach would be to merge from the end of both arrays. This avoids the problem of overwriting elements in nums1 that haven't been merged yet.

## As the last ending elments are higher numbers, thats why shevtun suru kru merge krne while length>0
Key Steps:
Pointers:

One pointer starting at the last non-zero element of nums1 (index m - 1).
One pointer starting at the last element of nums2 (index n - 1).
Another pointer starting at the very end of the available space in nums1 (index m + n - 1).
## Third pointer for, first array + second array = total elmenets chi length is k,& last ele. is m + n - 1

Compare and Place:
Compare the elements from the end of both arrays.
Place the larger element at the current position of the third pointer.
Move the corresponding pointer (either in nums1 or nums2) backward and update the placement pointer.

Remaining Elements:

If there are any remaining elements in nums2, copy them over to nums1 (since nums1 is already sorted, we don’t need to worry about unmerged elements from nums1).
*/

function merge(nums1, m, nums2, n) {
    // Pointers for nums1, nums2, and the final position in nums1
    let i = m - 1; // Pointer for nums1 (actual elements)
    let j = n - 1; // Pointer for nums2
    let k = m + n - 1; // Pointer for placement in nums1
    
    // Traverse from the end of both arrays
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]; // Place nums1's element at the end
            i--; // Move nums1 pointer left
        } else {
            nums1[k] = nums2[j]; // Place nums2's element at the end
            j--; // Move nums2 pointer left
        }
        k--; // Move the placement pointer left
    }
    
    // If there are still elements in nums2, copy them over
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
    return nums1;
}

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
console.log(merge(nums1,m,nums2,n));


/* Execution:

Start by comparing the last elements of nums1 and nums2.
The larger element is placed at the current last index in nums1.
Continue comparing and placing elements until either array is exhausted.
Output: nums1 = [1, 2, 2, 3, 5, 6]

Time Complexity:
O(m + n): Each element from nums1 and nums2 is processed once.
Space Complexity:
O(1): No additional space is used aside from the input arrays.
Additional Tip:
This approach leverages the fact that the arrays are already sorted and reduces the need for extra space. Always consider the structure of the problem when deciding how to merge or modify arrays in place! */
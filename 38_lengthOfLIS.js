// Function to find the length of the Longest Increasing Subsequence (LIS)
var lengthOfLIS = function(nums) {
    // `res` is an array that will store the smallest possible "end elements" for increasing subsequences
    // This array helps us efficiently track the length of the longest increasing subsequence
    const res = [];

    // Binary Search helper function
    // This function is used to find the position where the current number should be placed in `res`
    const binarySearch = (arr, target) => {
        // Initialize two pointers, `left` and `right`, for binary search
        let left = 0;
        let right = arr.length - 1;

        // Standard binary search loop to find the correct position for `target`
        while (left <= right) {
            // Calculate the middle index of the current search range
            const mid = Math.floor((left + right) / 2);
            
            // If `target` matches the middle element, return its position (though this rarely happens)
            if (arr[mid] === target) {
                return mid;
            // If the middle element is greater than `target`, search in the left half
            } else if (arr[mid] > target) {
                right = mid - 1;
            // If the middle element is less than `target`, search in the right half
            } else {
                left = mid + 1;
            }
        }

        // After the loop, `left` will be the correct position to insert `target` into `arr`
        return left;
    };

    // Main loop to process each number in the `nums` array
    for (const n of nums) {
        // If `res` is empty OR the current number `n` is larger than the last element in `res`
        // We can safely add `n` to `res` because it's extending the increasing subsequence
        if (!res.length || res[res.length - 1] < n) {
            res.push(n); // Append `n` to the end of `res`
        } else {
            // If `n` is not larger, we need to find the correct position in `res` to replace
            // an element with `n` using binary search to keep `res` valid
            const idx = binarySearch(res, n);
            res[idx] = n; // Replace the element at the `idx` position with `n`
        }
    }

    // The length of `res` will give us the length of the longest increasing subsequence
    return res.length;
};

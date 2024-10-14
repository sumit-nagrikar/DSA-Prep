var removeDuplicates = function(nums) {
    // If array length is less than or equal to 2, return its length because all elements are allowed.
    if (nums.length <= 2) return nums.length;

    let j = 2; // Initialize j at 2 because the first two elements can always stay.

    for (let i = 2; i < nums.length; i++) {
        // If the current element is not equal to the element at nums[j-2],
        // it means we can safely include nums[i] at position j.
        if (nums[i] !== nums[j - 2]) {
            nums[j] = nums[i];
            j++;
        }
    }

    return j; // j is the number of valid elements in the array
};

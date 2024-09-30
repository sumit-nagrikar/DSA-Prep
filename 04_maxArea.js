/* The problem you're referring to is the "Container With Most Water" problem, where we are given an array of heights that represent vertical lines, and we need to find two lines that, along with the x-axis, form a container that can store the maximum amount of water.

Here's the logic to solve the problem and the explanation:

Approach:
You use the two-pointer technique to efficiently solve the problem.
Start with two pointers: one at the beginning (left) and one at the end (right) of the array.
Calculate the area of the container formed by the lines at these two points.
The area is determined by the smaller of the two heights (height[left] or height[right]) multiplied by the distance between the two pointers (right - left).
Move the pointer pointing to the shorter line, as this will give a better chance to find a taller line and increase the area.
Continue doing this until the two pointers meet.
This way, you only iterate through the array once, making this an O(n) solution. 


Explanation:
Initial setup: Start with two pointers at the extreme ends of the array (left = 0, right = 8).
First calculation: The width between the two lines is right - left = 8, and the height is the smaller of the two lines (min(height[0], height[8]) = 1). So, the initial area is 1 * 8 = 8.
Moving pointers: Since the left pointer points to a smaller height (height[0] = 1), increment the left pointer to find a taller line.
Continue this process, updating the maximum area found so far until the two pointers meet.
Time Complexity:
O(n): You traverse the array once with the two-pointer technique.
Space Complexity:
O(1): Only a constant amount of extra space is used (for variables like left, right, and maxArea).
This problem is a great example of how the two-pointer technique can be used to optimize an otherwise brute-force solution (which would have been O(n²)).*/


function maxArea(height) {
    let left = 0;//variable initialization
    let right = height.length - 1;
    let maxArea = 0;//Two pointer approach always have while loop

    while (left < right) {
        //find width and height to calculate area
        let width = right - left;
        let currentHeight = Math.min(height[left], height[right]);

        //calculating area
        let area = width * currentHeight;

        //update area if find greater area
        maxArea = Math.max(maxArea, area);

        // Move the pointer pointing to the smaller height

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

// Example usage:
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height)); // Output: 49

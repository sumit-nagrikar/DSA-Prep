/* # Intuition
When distributing candies based on ratings, we can think of it like this: every child should get at least one candy. If a child has a higher rating than their neighbor, they should receive more candies. This immediately gives us two passes to ensure the conditions are met — one from left to right and the other from right to left.

# Approach
1. **Left-to-Right Pass**: We traverse the ratings from the start. For each child, if their rating is higher than the previous one, we give them more candies than the previous child.
2. **Right-to-Left Pass**: We then traverse from the end, adjusting candies again. If a child’s rating is higher than the next child, we give them more candies than that child, but making sure we don’t reduce any candies already given.

Finally, we sum up all the candies to get the total number.

# Complexity
- Time complexity:  
  $$O(n)$$ — We make two passes through the ratings array.
  
- Space complexity:  
  $$O(n)$$ — We use an extra array to store the candies.
 */



var candy = function(ratings) {
    let n = ratings.length; // length of ratings array
    let candies = new Array(n).fill(1); // create array with 1 candy for each child

    // Loop from Left to Right & adjust candies based on neighbors
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) { // if current child has higher rating than previous
            candies[i] = candies[i - 1] + 1; // give one more candy than the previous child
        }
    }

    // Loop from Right to Left & adjust candies based on neighbors
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) { // if current child has higher rating than next
            candies[i] = Math.max(candies[i], candies[i + 1] + 1); // take max candies of current or next + 1
        }
    }

    // Sum up the candies and return the total
    return candies.reduce((sum, candy) => sum + candy, 0);
};

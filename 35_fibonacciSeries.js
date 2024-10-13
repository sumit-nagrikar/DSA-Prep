var fibonacci = (n) => {
    // Step 1: Handle base cases.
    // If n is 0, return 0 as the 0th Fibonacci number is 0.
    if (n === 0) return 0;

    // If n is 1, return 1 as the 1st Fibonacci number is 1.
    if (n === 1) return 1;

    // Step 2: Initialize variables.
    // `sum` will store the current Fibonacci number.
    // `n1` will store the (n-2)th Fibonacci number.
    // `n2` will store the (n-1)th Fibonacci number.
    let sum = 0;
    let n1 = 0, n2 = 1;

    // Step 3: Use a loop to calculate the Fibonacci sequence up to the nth number.
    // Start from 2 because we already know the values for the 0th and 1st Fibonacci numbers.
    for (let i = 2; i <= n; i++) {
        // Calculate the current Fibonacci number by adding the two previous ones.
        sum = n1 + n2;

        // Move the previous Fibonacci numbers forward.
        // `n2` becomes the new `n1`, and `sum` becomes the new `n2` for the next iteration.
        n1 = n2;
        n2 = sum;
    }

    // Step 4: Return the nth Fibonacci number (stored in `sum`).
    return sum;
}

// Test the function with n = 2.
console.log(fibonacci(2));  // Output: 1

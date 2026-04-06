// Level 4: Expert (Asynchronous & Error Handling)
// 7. The Delayed Promise: Create a Promise that resolves after a 2-second delay using setTimeout()
// Use the .then() method to log "Task Complete!" once the promise is successfully fulfilled

// Concepts applied: Asynchronous JavaScript, Promises, and setTimeout.

const delayedPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

delayedPromise.then(() => {
  console.log("Task Complete!");
});

// 8. Robust Factorial Logic: Write a function to calculate the factorial of a number

// To make it robust, wrap the logic in a try...catch block to handle potential runtime errors, such as an undefined variable or invalid input

// Concepts applied: Recursion or loops, error handling (try...catch), and complex problem-solving.

function calculateFactorial(n) {
  try {
    if (typeof n !== "number" || n < 0) {
      throw new Error("Invalid input! Please provide a positive number.");
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }

    return result;
  } catch (error) {
    return "Error: " + error.message;
  }
}

console.log(calculateFactorial(3));
console.log(calculateFactorial("name"));

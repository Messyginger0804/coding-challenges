const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


// const sumOfOdds = () => {

// }

// ### **Question #5**
// Write a function that accepts an array of integers.
// The function should return the **sum of only the odd numbers** in the array.

// You can’t use `.filter()` or `.reduce()` — only loops and conditionals.

// #### **Test Input:**

// ```js
// [12, 7, 5, 64, 14, 3, 27, 8]
// ```

// #### **Expected Output:**

// ```js
// 42
// ```

// (Because `7 + 5 + 3 + 27 = 42`)

// ---

// 💡 **Extra Challenge:**
// Make it return both the sum **and** the odd numbers themselves, like:

// ```js
// { sum: 42, odds: [7, 5, 3, 27] }
// ```

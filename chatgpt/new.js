
const max = (arr) => {
    let biggest = 0
    let index = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > biggest){
            biggest = arr[i]
            index = i
        }
    }
    console.log(biggest, index)
}


max([15, 42, 7, 89, 23, 16, 105, 3])

// ### **Question #4**

// Write a function that accepts an array of integers as a parameter.
// The function should return the **largest number** in the array **without using** built-in methods like `.sort()` or `.max()`.

// #### **Test Input:**

// ```js
// [15, 42, 7, 89, 23, 16, 105, 3]
// ```

// #### **Expected Output:**

// ```js
// 105
// ```

// ---

// 💡 **Extra Challenge:**
// Make it also return the **position** (index) of the largest number in the array, like:

// ```js
// { value: 105, index: 6 }
// ```



const findTheVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase()
    let vowelCount = 0
    let vowelArray = []

    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if(i === j){
                vowelCount++
                vowelArray.push(str[i])
            }
        }
    }
    console.log(vowelCount, vowelArray)
}

findTheVowels("Hello World")

// ### **Question #6**

// Write a function that takes a string as a parameter and returns **the number of vowels** in that string.

// * Count both uppercase and lowercase vowels (`a, e, i, o, u`).
// * Don’t use `.match()` or regex — just loops and conditionals.

// #### **Test Input:**

// ```js
// "Hello World"
// ```

// #### **Expected Output:**

// ```js
// 3
// ```

// ---

// 💡 **Extra Challenge:**
// Make it return **both** the number of vowels **and** the vowels themselves in an array, like:

// ```js
// { count: 3, vowels: ['e', 'o', 'o'] }
// ```


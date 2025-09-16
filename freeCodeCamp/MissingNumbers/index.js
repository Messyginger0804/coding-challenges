// Missing Numbers
// Given an array of integers from 1 to n, inclusive, return an array of all the missing integers between 1 and n (where n is the largest number in the given array).

// The given array may be unsorted and may contain duplicates.
// The returned array should be in ascending order.
// If no integers are missing, return an empty array.

// function findMissingNumbers(arr) {
//   if (arr.length === 0){ 
//     return []
//   }

//     let maxNum = Math.max(...arr)
//     const set = new Set(arr)

//     let missingNums = []

//     for (let i = 1; i <= maxNum; i++) {
//       if (!set.has(i)) {
//         missingNums.push(i);
//       }
//     }
//     console.log(missingNums)

//     return missingNums
// }

// findMissingNumbers([1, 3, 5])


// if the array is in chrono order return true if not return false
const arr = [1, 2, 3, 6]
const fuckingFunction = (arr) => {

  for(let i = 0; i < arr.length; i++){
      // console.log(arr[i])
          for(let j = 1; j < arr.length; j++){
                if(!j === i+1){
                        console.log(false)
                                return false
                                      } 
                                            console.log(true)
                                                  return true
                                                      }
                                                        }
                                                        }

                                                        fuckingFunction(arr)
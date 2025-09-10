// Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.

// The returned array should be sorted in alphabetical order.

// function arrayDiff(arr1, arr2) {

//     let answer = []

//     for(let i = 0; i < arr1.length; i++){
//         if(!arr2.includes(arr1[i])){
//             answer.push(arr1[i])
//         }
//     }
//     for(let j = 0; j < arr2.length; j++){
//         if(!arr1.includes(arr2[j])){
//             answer.push(arr2[j])
//         }
//     }

//     answer.sort()

//   return answer;
// }

const arrayDiff = (arr1, arr2) =>{

    const arr1Set = new Set(arr1)
    const arr2Set = new Set(arr2)

    const answer = []

    for(const item of arr1Set){
        if(!arr2Set.has(item)){
            answer.push(item)
        }
    }
    for(const item of arr2Set){
        if(!arr1Set.has(item)){
            answer.push(item)
        }
    }
    answer.sort()
    console.log(answer)
    // return answer
    
}


arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"])
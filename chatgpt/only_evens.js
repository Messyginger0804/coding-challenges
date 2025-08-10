

// const getOnlyEvens = (arr) => {
//     const evens = []
//     for(num in arr){
//         if( num % 2  === 0){
//             evens.push(num)
//         }
//         console.log(evens)
//         return evens
//     }
// }

const getOnlyEvens = (arr) => {
    const evens = []
    for (let num = 0; num < arr.length; num++){
        if(arr[num] % 2 === 0){
            evens.push(arr[num])
        }
    }
    console.log(evens)
}

getOnlyEvens([12, 7, 5, 64, 14, 3, 27, 8])
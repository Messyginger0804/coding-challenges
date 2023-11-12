
const mathSequences = (arr) => {
    let arith = new Set();
    let geo = new Set();

    for (let i = 1; i < arr.length; i++) {
        let num1 = arr[i] - arr[i - 1];
        arith.add(num1);
        let num2 = arr[i] / arr[i - 1];
        geo.add(num2);
    }
    if (arith.size === 1) {
        return "Arithmetic"
    }
    if (geo.size === 1) {
        return "Geometric"
    }

    return -1
    // console.log(arith)
    // console.log(geo)
}

console.log(mathSequences([2, 4, 6, 8]))
// arithmatic

console.log(mathSequences([3, 9, 27]))
// geometric

console.log(mathSequences([2, 5, 14, 89]))
// -1
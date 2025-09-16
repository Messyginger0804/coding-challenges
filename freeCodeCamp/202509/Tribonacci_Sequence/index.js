// The Tribonacci sequence is a series of numbers where each number is the sum of the three preceding ones. When starting with 0, 0 and 1, the first 10 numbers in the sequence are 0, 0, 1, 1, 2, 4, 7, 13, 24, 44.

// Given an array containing the first three numbers of a Tribonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

// Your function should handle sequences of any length greater than or equal to zero.
// If the length is zero, return an empty array.
// Note that the starting numbers are part of the sequence.

function tribonacciSequence(startSequence, length) {
    if(length == 0){
    return []
  }
    if (length < 3) {
  return startSequence.slice(0, length);
}
  
  while(startSequence.length < length){
    let lastOne = startSequence[startSequence.length - 1];
    let lastTwo = startSequence[startSequence.length - 2];
    let lastThree = startSequence[startSequence.length - 3];
  
    let nextNumber = lastOne + lastTwo + lastThree;
    startSequence.push(nextNumber)
  }
  

  return startSequence
}

tribonacciSequence([0, 0, 1], 20)
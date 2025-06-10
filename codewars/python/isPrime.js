// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.




function isPrime(num) {
    // Check if the number is less than 2
    if (num < 2) {
        return num + " " + false;
    }

    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return num + " " + false; // If the number is divisible, it's not prime
        }
    }

    return num + " " + true; // If no divisors found, the number is prime
}

// Test cases
console.log(isPrime(2)); // Output: true
console.log(isPrime(17)); // Output: true
console.log(isPrime(25)); // Output: false
console.log(isPrime(0)); // Output: false
console.log(isPrime(-7)); // Output: false

// IPv4 Validator
// Given a string, determine if it is a valid IPv4 Address. A valid IPv4 address consists of four integer numbers separated by dots (.). Each number must satisfy the following conditions:

// It is between 0 and 255 inclusive.
// It does not have leading zeros (e.g. 0 is allowed, 01 is not).
// Only numeric characters are allowed.

function isValidIPv4(ipv4) {
    const splitted = ipv4.split(". ")
    if(splitted.length !== 4) return false
    
    for (const p of splitted){
        if(p.length === 0) return false
        
    }

  return notValid;
}

isValidIPv4('0000')



let profile = {
  name : "jordan",
  age: 33
}

console.log(profile)
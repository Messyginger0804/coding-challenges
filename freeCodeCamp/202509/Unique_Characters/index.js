// Given a string, determine if all the characters in the string are unique.

// Uppercase and lowercase letters should be considered different characters.

// function allUnique(str) {
//   const seen = new Set();
//   for (const ch of str) {
//     if (seen.has(ch)) return false;
//     seen.add(ch);
//   }
//   return true;
// }

// function allUnique(str) {
//   const seen = new Map();
//   for (const ch of str) {
//     if (seen.has(ch)) {
//       return false;
//     }
//     seen.set(ch, true);
//   }
//   return true;
// }

function allUnique(str) {

  for(let i=0; i < str.length; i++){
    for(let j= i+1; j < str.length; j++){
        if(str[i] === str[j]){
            return false
        }
    }
}
return true
}

allUnique('jesus')
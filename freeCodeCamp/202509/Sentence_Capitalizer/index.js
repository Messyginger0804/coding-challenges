// Sentence Capitalizer
// Given a paragraph, return a new paragraph where the first letter of each sentence is capitalized.

// All other characters should be preserved.
// Sentences can end with a period (.), one or more question marks (?), or one or more exclamation points (!).

function capitalize(paragraph) {
  let capitalize = true
  let result = ''

    for(let char of paragraph){
      let isLetter = char >= 'a' && char <= 'z'
      if(isLetter && capitalize){
        result += char.toUpperCase()
        capitalize = false
      } else {
        result += char
      }

      if(char === '.' || char === '?' || char === '!') capitalize = true
    }
  console.log(result)
  return result;
}

capitalize("this is a simple sentence.")
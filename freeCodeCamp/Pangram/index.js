// Pangram
// Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.

// Ignore non-alphabetical characters in the word or sentence.
// Ignore letter casing in the word or sentence.

function isPangram(sentence, letters) {
  const newSentence = sentence.toLowerCase()
  const newLetters = letters.toLowerCase()
  const sentenceSet = new Set()
  const letterSet = new Set(newLetters)

  for (let i = 0; i < newSentence.length; i++) {
    const char = newSentence[i];
    if (char >= 'a' && char <= 'z') {
      sentenceSet.add(char)
    }
  }
  console.log(sentenceSet.size === letterSet.size)
  return sentenceSet.size === letterSet.size
}

isPangram("hello", "helo")
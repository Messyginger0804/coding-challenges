// # Reverse Sentence
// # Given a string of words, return a new string with the words in reverse order. For example, the first word should be at the end of the returned string, and the last word should be at the beginning of the returned string.

// # In the given string, words can be separated by one or more spaces.
// # The returned string should only have one space between words.

// function reverseSentence(sentence) {
//     const splited = sentence.split(' ')
//     const reversed = splited.reverse()
//     const answer = reversed.reverse().join(' ')

//     console.log(answer)
//     return answer

// }

// reverseSentence("npm  install  sudo")

function reverseSentence(sentence) {
    const wordsWithGaps = sentence.split(' ')
    const cleanWords = wordsWithGaps.filter(word => word !== '')

    const reverseWords = cleanWords.reverse()

    word.reverse()

    const result = reverseWords.join(' ')

    console.log(result)
    return result

}

reverseSentence("npm  install  sudo")

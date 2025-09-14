# Pangram
# Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.

# Ignore non-alphabetical characters in the word or sentence.
# Ignore letter casing in the word or sentence.

def is_pangram(sentence, letters):
    newSentence = sentence.lower()
    newLetters = letters.lower()

    sentenceSet = set()

    for symbol in newSentence:
        if symbol.isalpha():
            sentenceSet.add(symbol)

    return len(sentenceSet) == len(newLetters)

is_pangram("hello", "helo")

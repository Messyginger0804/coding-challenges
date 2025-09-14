// Vowel Repeater
// Given a string, return a new version of the string where each vowel is duplicated one more time than the previous vowel you encountered. For instance, the first vowel in the sentence should remain unchanged. The second vowel should appear twice in a row. The third vowel should appear three times in a row, and so on.

// The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
// The original vowel should keeps its case.
// Repeated vowels should be lowercase.
// All non-vowel characters should keep their original case.

function repeatVowels(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    let vowelCount = 0;
    let result = '';

    for(const char of str){
        const lower = char.toLowerCase()
        if(vowels.has(lower)){
            vowelCount++
            result += char + char.toLowerCase().repeat(vowelCount - 1);
        } else {
            result += char
        }
    }
    console.log(result)
  return result;
}

repeatVowels("hello world")
// Word Frequency
// Given a paragraph, return an array of the three most frequently occurring words.

// Words in the paragraph will be separated by spaces.
// Ignore case in the given paragraph. For example, treat Hello and hello as the same word.
// Ignore punctuation in the given paragraph. Punctuation consists of commas (,), periods (.), and exclamation points (!).
// The returned array should have all lowercase words.
// The returned array should be in descending order with the most frequently occurring word first.

function getWords(paragraph) {
  const lowercase = paragraph.toLowerCase();
  const splitted = lowercase.split(" ");

  const punctuation = new Set([",", ".", "!", "?"]);
  const wordCounter = {};

  for (let word of splitted) {
    while (word.length && punctuation.has(word[word.length - 1])) {
      word = word.slice(0, -1);
    }

    word = word.trim();
    if (word === "") continue; // skip empties

    wordCounter[word] = (wordCounter[word] || 0) + 1;
  }

  const entries = Object.entries(wordCounter);
  entries.sort((a, b) => b[1] - a[1]);

  const topThree = entries.slice(0, 3).map(([w]) => w);
  console.log(topThree);
  return topThree;
}

getWords("I like coding. I like testing. I love debugging!");



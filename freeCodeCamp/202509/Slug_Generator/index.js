// Slug Generator
// Given a string, return a URL-friendly version of the string using the following constraints:

// All letters should be lowercase.
// All characters that are not letters, numbers, or spaces should be removed.
// All spaces should be replaced with the URL-encoded space code %20.
// Consecutive spaces should be replaced with a single %20.
// The returned string should not have leading or trailing %20.

function generateSlug(str) {
  const newStr = str.toLowerCase().trim();
  let answer = "";

  for (let char of newStr) {
    let isLetter = char >= "a" && char <= "z";
    let isNumber = char >= "0" && char <= "9";
    let isSpace = char === " ";
    let lastWasSpace = answer.endsWith("%20");

    if (isLetter || isNumber) {
      answer += char;
    } else if (isSpace && !lastWasSpace) {
      answer += "%20";
    }
  }

  if (answer.endsWith("%20")) {
    answer = answer.slice(0, -3);
  }

  return answer;
}
generateSlug("hello World     ")
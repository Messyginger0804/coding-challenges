// Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent.

// Here are some example outputs for a given input:

// Input	Output
// "rgb(255, 255, 255)"	"#ffffff"
// "rgb(1, 2, 3)"	"#010203"
// Make any letters lowercase.
// Return a # followed by six characters. Don't use any shorthand values.

function rgbToHex(rgb) {
  const onlyNums = (rgb.slice(4, -1)).split(", ")

  const numbers = onlyNums.map(str => {
  const num = parseInt(str.trim(), 10);
  const hex = num.toString(16).toLowerCase();
  return hex.padStart(2, '0');
});
    
  const joined = numbers.join('')
  const answer = '#' + joined
  
  // return answer
  console.log(answer)
}

rgbToHex("rgb(255, 255, 255)")
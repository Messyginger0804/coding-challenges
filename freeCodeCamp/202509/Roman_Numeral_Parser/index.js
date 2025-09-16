// # Given a string representing a Roman numeral, return its integer value.

// # Numerals are read left to right. If a smaller numeral appears before a larger one, the value is subtracted. Otherwise, values are added.

function parseRomanNumeral(numeral) {
  const symbol_value = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;
  let lastValue = 0;

  for (let i = numeral.length - 1; i >= 0; i--) {
    const currentValue = symbol_value[numeral[i]];

    if (currentValue < lastValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    lastValue = currentValue;
  }

  return result;
}
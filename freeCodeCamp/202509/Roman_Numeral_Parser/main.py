# Given a string representing a Roman numeral, return its integer value.

# Numerals are read left to right. If a smaller numeral appears before a larger one, the value is subtracted. Otherwise, values are added.

def parse_roman_numeral(numeral):
    symbol_value = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    result = 0
    last_value = 0

    for symbol in reversed(numeral):
        current_value = symbol_value[symbol]

        if current_value < last_value:
            result -= current_value
        else:
            result += current_value

        last_value = current_value

    return result

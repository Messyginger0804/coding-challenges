# // Given a string, determine if all the characters in the string are unique.

# // Uppercase and lowercase letters should be considered different characters.

def all_unique(s):
    seen_chars = set()

    for char in s:
        if char not in seen_chars:
            return False
        else:
            seen_chars.add(char)

    return True
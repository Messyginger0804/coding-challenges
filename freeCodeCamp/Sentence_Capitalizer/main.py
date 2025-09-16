# Sentence Capitalizer
# Given a paragraph, return a new paragraph where the first letter of each sentence is capitalized.

# All other characters should be preserved.
# Sentences can end with a period (.), one or more question marks (?), or one or more exclamation points (!).

def capitalize(paragraph):
    puncuation = {".", "?", "!"}
    answer = ""
    capitalize = True

    for i, char in enumerate(paragraph):
        if capitalize and char.isalpha():
            answer += char.upper()
            capitalize = False
        else:
            answer += char

        if char in puncuation:
            capitalize = True

    
    print(answer)
    return answer

capitalize("this is a simple sentence.")
capitalize("there's a space before this period . why is there a space before that period ?")

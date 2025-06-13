def decrypt(encrypted_text, n):
    if not encrypted_text or n <= 0:
        return encrypted_text

    for _ in range(n):
        mid = len(encrypted_text) // 2
        odd = encrypted_text[:mid]     # odd came first during encryption
        even = encrypted_text[mid:]

        result = ''
        for i in range(len(encrypted_text)):
            if i % 2 == 0:
                result += even[i // 2]  # even goes in even slots
            else:
                result += odd[i // 2]   # odd goes in odd slots

        encrypted_text = result  # update for next loop

    return encrypted_text  # ✅ this should be here, not inside the loop


def encrypt(text, n):
    if not text or n <=0:
        return text
    
    for _ in range(n):
        odd = ""
        even = ""

        for i, char in enumerate(text):
            if i % 2 == 0:
                even += char
            else:
                odd += char

        text = odd + even

    return text

# result = encrypt("235465456", 9)
# print(result)


# fake = range(6)

# print(fake)
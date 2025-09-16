def reverse_sentence(sentence):
    x = sentence.split()

    y = (list(reversed(x)))
    
    answer = ' '.join(y)

    print(answer)
    return answer

reverse_sentence("world hello")
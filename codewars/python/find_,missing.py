def find_missing(sequence):
    diffA = sequence[0] - sequence[1]
    diffB = sequence[1] - sequence[2]
    diffC = sequence[2] - sequence[3]

    pattern = 0

    if diffA == diffB:
        pattern += diffA
    elif diffB == diffC:
        pattern += diffB
    
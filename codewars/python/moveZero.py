# Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

# move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]


def move_zeros(lst):
    all_zeros = []
    non_zeros = []

    for item in lst:
        if item == 0:
            all_zeros.append(item)
        else: 
            non_zeros.append(item)

    non_zeros.extend(all_zeros)

    answer = non_zeros
    print(answer)

array = [1, 0, 1, 2, 0, 1, 3]
move_zeros(array)


# Missing Numbers
# Given an array of integers from 1 to n, inclusive, return an array of all the missing integers between 1 and n (where n is the largest number in the given array).

# The given array may be unsorted and may contain duplicates.
# The returned array should be in ascending order.
# If no integers are missing, return an empty array.

def find_missing_numbers(arr):
    if len(arr) == 0: return []

    mySet = set(arr)

    maxNum = max(mySet)

    missing = []

    for i in range(1, maxNum):
        if i not in mySet:
            missing.append(i)

    return missing

find_missing_numbers([1, 3, 5])
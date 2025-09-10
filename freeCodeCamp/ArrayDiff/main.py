def array_diff(arr1, arr2):
    answer = [item for item in arr1 if item in arr2]

    answer.sort()
    print(answer)
    return answer

array_diff(["apple", "banana"], ["apple", "banana", "cherry"])
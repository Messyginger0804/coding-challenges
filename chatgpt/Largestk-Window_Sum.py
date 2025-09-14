# Given a list of integers and a number k, return the maximum sum of any k consecutive elements in the list.

def max_consecutive_sum(nums, k):
    max_num = 0
    for i in range(len(nums)):
        currentNum = sum(nums[i:i+k])
        if currentNum > max_num:
            max_num = currentNum


    print(max_num)

max_consecutive_sum([2, 1, 5, 1, 3, 2], 3)


# max_consecutive_sum([2, 1, 5, 1, 3, 2], 3)
# # Windows: [2,1,5] → 8, [1,5,1] → 7, [5,1,3] → 9, [1,3,2] → 6
# # Answer: 9

# max_consecutive_sum([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 4)
# # Windows: sums are 14, 18, 17, 18, 19, 19, 11 → Answer: 19



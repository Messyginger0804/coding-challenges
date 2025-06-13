def specialNums():
    for special in range(10, 9999):
        array = list(map(int, str(special)))

        print(array)
        
        # for i in range(len(array) - 1):
        #     diff = array[i] - array[i + 1]
        #     if diff > 1 or diff < -1:
        #         break
        #     print(special)



specialNums()

        # Write a function that prints all Special Numbers from 10 to 9999. A special number is a number whose each digit differs
        # by at most 1 from each of its neighboring digits.Examples: 7887 is a Special Number & 312 is not a Special Number. 
        # Make sure to print each Special Number in a new line.
        
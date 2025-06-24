def specialNums():
    for i in range(10, 9999):
        array = list(map(int, str(i)))

        is_special = True

        for j in range(len(array) -1):
            compare = array[j] - array[j +1]
            if compare > 1 or compare < -1:
                is_special = False
                break

        if is_special:
            print(i)
        
    
specialNums()

        # Write a function that prints all Special Numbers from 10 to 9999. A special number is a number whose each digit differs
        # by at most 1 from each of its neighboring digits.Examples: 7887 is a Special Number & 312 is not a Special Number. 
        # Make sure to print each Special Number in a new line.
        
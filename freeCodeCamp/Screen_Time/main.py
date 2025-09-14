# Screen Time
# Given an input array of seven integers, representing a week's time, where each integer is the amount of hours spent on your phone that day, determine if it is too much screen time based on these constraints:

# If any single day has 10 hours or more, it's too much.
# If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
# If the average of the seven days is greater than or equal to 6 hours, it's too much.

def too_much_screen_time(hours):
    if any(day >= 10 for day in hours):
        print(True)
        return True
    
    average = sum(hours) / len(hours)
    if average >= 6:
        print(True)
        return True

    for i in range(len(hours) - 2):
        windowTotal = hours[i] + hours[i+1] + hours[i+2]
        windowAverage = windowTotal / 3
        if windowAverage >= 8:
            print(True)
            return True

        
    return False

too_much_screen_time([3, 3, 5, 8, 8, 9, 4])
# Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

# HH = hours, padded to 2 digits, range: 00 - 99
# MM = minutes, padded to 2 digits, range: 00 - 59
# SS = seconds, padded to 2 digits, range: 00 - 59
# The maximum time never exceeds 359999 (99:59:59)

# You can find some examples in the test fixtures.

def make_readable(seconds):

    total_mins = seconds // 60
    hours_calculated = total_mins // 60

    minutes_remaining = total_mins % 60

    seconds_remaining = seconds % 60

    print(f"{hours_calculated:02d}:{minutes_remaining:02d}:{seconds_remaining:02d}")

make_readable(59)
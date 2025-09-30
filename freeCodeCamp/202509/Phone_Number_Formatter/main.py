# Phone Number Formatter
# Given a string of ten digits, return the string as a phone number in this format: "+D (DDD) DDD-DDDD".


def format_number(number):
    country = number[0]
    area = number[1:4]
    exchange = number[4:7]
    line = number[7:11]

    answer = f"+{country} ({area}) {exchange}-{line}"    
    print(answer)
    return answer
format_number("05552340182")


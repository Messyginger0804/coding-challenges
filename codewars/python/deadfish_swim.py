def parse(data):
    current_value = 0
    result_array = []
    
    for char in data:
        if char == 'i':
            current_value += 1
        elif char == 'd':
            current_value -= 1
        elif char == 's':
            current_value *= current_value
        elif char == 'o':
            result_array.append(current_value)
        
    return result_array


parse("iiisdoso")
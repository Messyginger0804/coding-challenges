# Given the size of a fuel tank, the current fuel level, and the price per gallon, return the cost to fill the tank all the way.

# tankSize is the total capacity of the tank in gallons.
# fuelLevel is the current amount of fuel in the tank in gallons.
# pricePerGallon is the cost of one gallon of fuel.
# The returned value should be rounded to two decimal places in the format: "$d.dd".

def cost_to_fill(tank_size, fuel_level, price_per_gallon):    
    price = (tank_size - fuel_level) * price_per_gallon

    answer = round(price, 2)
    print(answer)
    return answer

cost_to_fill(20, 0, 4.00)
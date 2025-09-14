// Screen Time
// Given an input array of seven integers, representing a week's time, where each integer is the amount of hours spent on your phone that day, determine if it is too much screen time based on these constraints:

// If any single day has 10 hours or more, it's too much. DONE  
// If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
// If the average of the seven days is greater than or equal to 6 hours, it's too much.

function tooMuchScreenTime(hours) {
    const dailyLimit = (over) => over >= 10;
    if(hours.some(dailyLimit)){
      console.log('daily limit', true)
      return true;
    }

    const initialValue = 0;
    const sum = hours.reduce((total, current) => total + current, initialValue)
    const average = sum / hours.length

    console.log(average)

    if(average >= 6){
      return true
    }

    

  }

// tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4])

// tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4])

tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6])
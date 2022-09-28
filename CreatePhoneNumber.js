// 91

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!


function createPhoneNumber(numbers){
    let digit1 = String(numbers[0]), digit2 = String(numbers[1]), digit3 = String(numbers[2]), digit4 = String(numbers[3]),
    digit5 = String(numbers[4]), digit6 = String(numbers[5]), digit7 = String(numbers[6]), digit8 = String(numbers[7]),
    digit9 = String(numbers[8]), digit10 = String(numbers[9]);
  
    return `(${digit1}${digit2}${digit3}) ${digit4}${digit5}${digit6}-${digit7}${digit8}${digit9}${digit10}`
  }

  //Other way to do it:

  function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }
// 81


// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (string) {
    const value = string.split('')
  
    // if the last value of a given string is not a number
    // then we can just return back early with 1 at the end.
    if (isNaN(value[value.length - 1])) return `${string}1`
  
    let characterPosition = value.length - 1
    let character = value[characterPosition]
    let characterNumber = Number(character)
  
    // If the last value is less than or equal to 8, then
    // we only need to increase that value by one and
    // return the updated value.
    if (characterNumber <= 8) {
      value[characterPosition] = characterNumber + 1
      return value.join('')
    }
  
    let lastChangedValue = characterNumber
    value[characterPosition] = 0
  
    // iterate through  all  the  values in the  string from right
    // to left, as long as the  current value is a 9, increase and
    // carry the one. When the value is no longer a 9, then return
    // the response.
    //
    // If the last number  (first) is a 9, then splice in a 1 at
    // the next left position.
    while (true) {
      characterPosition -= 1
      character = value[characterPosition]
      characterNumber = Number(character)
  
      if (!isNaN(character) && characterNumber === 9) {
        lastChangedValue = characterNumber
        value[characterPosition] = 0
        continue
      }
  
      if (lastChangedValue === 9 && !isNaN(character) && characterNumber <= 8) {
        value[characterPosition] = characterNumber + 1
        return value.join('')
      }
  
      value.splice(characterPosition + 1, 0, 1)
      return value.join('')
    }
  }
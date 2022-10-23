// 108

//Given a string, return the string with the characters in reversed order
//String
//String
const reversedString = (str) => {
    //str to array using split -> reverse array -> join array
   return str.split('').reverse().join('');
}



console.log(reverseString('Hello'), 'elloH') // olleH
console.log(reverseString('Reverse String'), 'gnirtS esreveR') // gnirtS esreveR
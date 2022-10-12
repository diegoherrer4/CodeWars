//103

// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

//num with no funny biz
//log each num or the appr word
//n = 5 -> 1,2, fizz, 4, buzz
//n = 9 -> 1,2, fizz, 4, buzz, fizz, 7, 8, fizz
//n = 15 -> 1,2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14,
//fizzbuzz

function fizzBuzz(num) {
    //for loop from 1 to num
    for (i = 1; i <= num; i++) {
      //conditional
      //if i % 3 && i % 5  => fizzBuzz
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzBuzz')
        //if i % 3 === 0 => fizz
      } else if (i % 3 === 0) {
        console.log('fizz')
        //if i % 5 === 0 => buzz
      } else if (i % 5 === 0) {
        console.log('buzz')
        //log the num
      } else {
        console.log(i)
      }
      
    }
  }
  
  fizzBuzz(5) //1,2, fizz, 4, buzz
  fizzBuzz(9) //1,2, fizz, 4, buzz, fizz, 7, 8, fizz
  fizzBuzz(15) // 1,2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz
// 102

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
    let arr = []
     for(i=0; i < numbers.length; i++){
       arr.push(numbers[i] ** 2)
     }
   
   
    let result = arr.reduce(function(accumulator, currentValue) {
     return accumulator + currentValue;
   }, 0);
     
     return result;
   }
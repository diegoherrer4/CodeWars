// 100

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let arr2 = []
    for(i=0; i<arr.length; i++){
      if(arr[i] > 0){
        arr2.push(arr[i])
      }
    }
    
  
   let result = arr2.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0); 
    return result
  }
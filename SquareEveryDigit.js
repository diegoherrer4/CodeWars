// 50

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    let newNum = num
    let newArr = []
    
   let myArr = String(newNum).split("").map((newNum)=>{
    return Number(newNum)
     
  })
  
   for(i=0; i<myArr.length; i++){
  newArr.push(myArr[i] ** 2) 
  }
  return Number(newArr.join(''))
  }
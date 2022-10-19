// 106

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)


function getAverage (arr) {
    //loop through the array to get sum
    let sum  = arr.reduce((a,c) => a+c, 0)
    // avg -> sum / arr.length
    //return
    return Math.floor(sum / arr.length)
}

console.log(getAverage([2,2,2,2]),2)
console.log(getAverage([1,2,3,4,5,]),3)
console.log(getAverage([1,1,1,1,1,1,1,2]),1)

//One line answer 


function getAverage (arr) {
    //loop through the array to get sum
    return Math.floor(arr.reduce((a,c)=> a+c) / arr.length)
    // avg -> sum / arr.length
    //return
   
}

 //One line answer + ES6
const getAverage = arr => Math.floor(arr.reduce((a,c)=> a+c) /arr.length)

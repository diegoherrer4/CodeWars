// 116

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example

// There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

// 0.400000
// 0.400000
// 0.200000

function plusMinus(arr){
    let negative = arr.filter(e => e < 0).length / arr.length
    let positive = arr.filter(e => e > 0).length / arr.length
    let zero = arr.filter(e => e === 0).length / arr.length
    return `${Number.parseFloat(positive).toFixed(6)}
        ${Number.parseFloat(negative).toFixed(6)}
        ${Number(parseFloat(zero).toFixed(6))}`
}
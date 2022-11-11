// 89

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

const arrayPlusArray = (arr1, arr2) => {
    let newArr = [...arr1, ...arr2]
    const sum = newArr.reduce((accumulator, element) => {
     return accumulator + element;
   }, 0);
     return sum;
   }
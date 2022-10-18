
// 105

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.




/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let str = x.toString()
    let arr = []
    //for loop starting at x length, decrease by one until 0
    for(i=str.length; i>=0; i--){
        arr.push(str[i])
    }
    let reversedWord = arr.join('')
    //if reversedWord is equal to x return true, else return false
    if(reversedWord === str){
        return true
    } else {
        return false
    }
};

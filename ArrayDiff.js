// 48

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//PREP
//Parameters: It should contain two arrays
//Returns: It should return a new array without similar values shared between both arrays
//Example: arrayDiff([1,2],[1]) == [2]
/*Pseudocode:
 Enter two arrays
 filter between the arrays and return a new array without similar values between both array

*/

function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }
// 49

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


function duplicateCount(text){
  
    var input = text.toLowerCase().split('');
    
    var obj = {};
    
    for( var i in input) {
      
      if(!obj[ input[i] ]){
        
        obj[ input[i] ] = 1;
        
      } else{
        obj[ input[i] ] += 1;
      } 
    }
    
    var result = 0;
    
    for( var prop in obj) {
      
      if(obj[prop] > 1){
       result++;
      }
    }
    
    return result;
    
  }
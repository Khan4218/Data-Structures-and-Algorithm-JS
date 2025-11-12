// 🧩 Challenge 1 — Find the First Non-Repeating Character

// Problem:
// Given a string, find the first character that doesn’t repeat.
// Return that character (or null if all repeat).

// Example:

// Input: "aabbcdee"
// Output: "c"


// Hint:

// Use a hashmap to count frequency of each character.

// Then loop again to find the first with count = 1.


function nonRepeatingChar(str) {
 
    let frequencies = new Map()
    
    for(let char of str) {        
     frequencies.set(char,(frequencies.get(char)|| 0) + 1)
   
    }

    for(let char of str) {   
      if(frequencies.get(char )=== 1) {
        return char
      }
    }
    
  
}

console.log(nonRepeatingChar("aabbcdee"));




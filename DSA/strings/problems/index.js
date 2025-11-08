// 🧩 Problem 1: Reverse a String (without built-ins)
// Question:
// Write a function reverseString(str) that returns the reversed version of the input string — but don’t use split, reverse, or join.
// Example:
// Input: "hello"
// Output: "olleh"


// 🧠 Think Step-by-Step


// Start from the last index of the string.


// Add each character to a new variable, say reversed.


// Return that variable.



// // 💻 Code Template
// function reverseString(str) {
//   let reversed = '';
//   let lastIndex = str.length - 1 

//   for (let i = lastIndex; i >= 0; i--) {  // starts with 5 - 1 = 4 = str[4] = h; till i is greater than 0 ; i
    
//     reversed += str[i]
    
//   }

//   return reversed;
// }

// console.log(reverseString("hello")); // "olleh"


// Can you try to write your full working code below for this one?
// (Then we’ll move to the palindrome problem next.)



function reverseString(str) {
  let reversed = ""
  const lastIndex = str.length - 1 ;

   for(let i = lastIndex; i >= 0 ; i --) {
    reversed += str[i]
   }

   return reversed
}

console.log(reverseString("hello"));


// Input: "pwwkew"
// Output: 3
// Explanation: "wke" is the longest substring without repeating characters.

// Write the function:

function lengthOfLongestSubstring(s) {
 let left = 0
 let set = new Set()
 let maxlength = 0
 for(let right = 0 ; right < s.length; right++) {
   
  while(set.has(s[right])) {
   set.delete(s[left])
   left++
  }

  set.add(s[right])

  maxlength = Math.max(maxlength, right - left + 1)


 }

 return maxlength
}

console.log(lengthOfLongestSubstring("pwwkew"));






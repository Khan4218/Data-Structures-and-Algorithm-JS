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



// function reverseString(str) {
//   let reversed = ""
//   const lastIndex = str.length - 1 ;

//    for(let i = lastIndex; i >= 0 ; i --) {
//     reversed += str[i]
//    }

//    return reversed
// }

// console.log(reverseString("hello"));


// // Input: "pwwkew"
// // Output: 3
// // Explanation: "wke" is the longest substring without repeating characters.

// // Write the function:

// function lengthOfLongestSubstring(s) {
//  let left = 0
//  let set = new Set()
//  let maxlength = 0
//  for(let right = 0 ; right < s.length; right++) {
   
//   while(set.has(s[right])) {
//    set.delete(s[left])
//    left++
//   }

//   set.add(s[right])

//   maxlength = Math.max(maxlength, right - left + 1)


//  }

//  return maxlength
// }

// console.log(lengthOfLongestSubstring("pwwkew"));


// 🧠 How to check if two strings are anagrams

// We’ll use character frequency counting — one of the most common interview techniques.

// Step-by-step:

// If lengths differ → immediately return false.

// Create a map/object to count occurrences of each character from the first string.

// Loop through the second string —

// For each character, subtract one from that count.

// If a character is not found or count becomes negative → not anagram.

// If all counts end up zero → it’s an anagram.


// function isAnagram(s, t) {
//   if (s.length !== t.length) return false;

//   const count = {};
  
  

//   for (let char of s) {
    
//     count[char] = (count[char] || 0) + 1;
  
   
  
    
//   }

//   for (let char of t) {
//     if (!count[char]) return false;
//     count[char]--;
     
//   }

//   return true;
  
// }

// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("hello", "world"));   // false



// Problem:

// Given two strings s and t, return true if t is an anagram of s, otherwise return false.

// But — you must ignore case and spaces.

// Example:

// Input:
// s = "Dormitory"
// t = "Dirty room"

// Output:
// true

// Explanation:
// After ignoring spaces and case, both strings contain the same characters.

// Steps:

// Normalize both strings (lowercase + remove spaces).

// Count frequency of characters (like before).

// Compare.


function isAnagram(s, t) {

  s = s.replace(/\s/g, "").toLowerCase();
  t = t.replace(/\s/g, "").toLowerCase();



  
  if(s.length !== t.length) return false

  const count = {}

  for(let char of s){
    count [char] = (count [char] || 0) + 1 
  
    
  } 
  
  for (let char of t) {
     if(!count[char]) return false
     count[char] --
  }

  return true
}

console.log(isAnagram("Dormitory", "Dirty room")); 
console.log(isAnagram("Dormitory", "Dormitory")); 

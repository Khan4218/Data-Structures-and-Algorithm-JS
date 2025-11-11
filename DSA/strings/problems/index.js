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


// function isAnagram(s, t) {

//   s = s.replace(/\s/g, "").toLowerCase();
//   t = t.replace(/\s/g, "").toLowerCase();



  
//   if(s.length !== t.length) return false

//   const count = {}

//   for(let char of s){
//     count [char] = (count [char] || 0) + 1 
  
    
//   } 
  
//   for (let char of t) {
//      if(!count[char]) return false
//      count[char] --
//   }

//   return true
// }

// console.log(isAnagram("Dormitory", "Dirty room")); 
// console.log(isAnagram("Dormitory", "Dormitory")); 

// Challenge: Find the Most Frequent Character

// Write a JavaScript function that takes a string and returns the character that appears most frequently in it.
// If multiple characters have the same highest frequency, return any one of them.

// Example:

// Input: "aabbbbccdeee"
// Output: "b"


// Requirements:

// Don’t use built-in methods like reduce or external libraries.

// You can use an object (HashMap) to store frequencies.

// Keep time complexity at O(n).


// function frequentCharacter(s) {
   
//   let frequency = {}
   
//   for(let char of s) {
//     frequency[char] = (frequency[char] || 0) + 1 
//   }
  
//   let maxCount = 0
//   let maxChar = ""

//   for(let char in frequency) {
//     if(frequency[char] > maxCount) {
//      maxCount = frequency[char]

//      maxChar = char
 
     
//     }
    
//   }
//   return maxChar

// }

// console.log(frequentCharacter("aabbbbccdeee"));


// Challenge: Find All Most Frequent Characters

// Write a function that returns all characters that appear the most number of times in the string.

// Example 1:

// Input: "aabbcc"
// Output: ["a", "b", "c"]


// Example 2:

// Input: "aabbbbccdeee"
// Output: ["b"]


// Example 3:

// Input: "aabbccc"
// Output: ["c"]


// Requirements:

// Use an object to count frequencies (like before).

// Return an array of all characters that share the maximum frequency.

// Keep the solution O(n).


// function frequentCharacters(s) {
  
//   let frequencyObj = {}

//   for(let char of s) {
//     frequencyObj[char] = (frequencyObj[char] || 0) + 1

//   }
  
//   let maxCount = 0

//   for(let char in frequencyObj) {

//     if(frequencyObj[char] > maxCount) {
//       maxCount = frequencyObj[char]
//      maxChar = char
//     }

//   }
//   let result = []

//   for(let char in frequencyObj) {

//     if(frequencyObj[char] === maxCount) {
//       result.push(char)
//     }
//   }

//   return result
// }

// console.log(frequentCharacters("aabbcc"));



// Challenge: First Non-Repeating Character

// Write a function that returns the first character in a string that appears only once.
// If every character repeats, return null.

// Example 1:

// Input: "aabbcddee"
// Output: "c"


// Example 2:

// Input: "aabbcc"
// Output: null


// function nonRepeating(s) {
  
//  let frequency = {}

//   for(let char of s) {
    
//    frequency[char] = (frequency[char] || 0) + 1 
//   }

//   for(let char of s) {
    
//     if(frequency[char] === 1) {

//       return char
//     }
//   }

//   return null

  
// }

// console.log(nonRepeating("aabbcddee"));
// console.log(nonRepeating("aabbcc"));


// Challenge: Check if Two Strings Have the Same Character Frequency

// Write a function that returns true if two strings contain exactly the same frequency of characters, and false otherwise.

// This is not checking if they are anagrams (we’ll do that next).
// It’s only about comparing the frequency maps, even if the characters are in different orders.

// Examples:

// Input: "aabbcc", "baccab"
// Output: true

// Input: "aabbc", "aabbcc"
// Output: false

// Input: "xyz", "xyzz"
// Output: false


// Requirements:

// Use objects to store character frequencies for both strings.

// Compare both objects to ensure all characters have the same counts.

// Return a boolean (true or false).

// Keep time complexity O(n).


// function sameCharFreq(s, t) {
//   if(s.length !== t.length) return false
 
//   let sObj = {}
//   let tObj = {}



//   for(let char of s) {
//    sObj[char] = (sObj[char] || 0) + 1
//    sCount = sObj[char] 
   
//   }


  
//   for(let char of t) {
//    tObj[char] = (tObj[char] || 0) + 1    
//    tCount = tObj[char]
//   }
  
//   for(let key in sObj) {
//     if(sObj[key] !== tObj[key]) {
//       return false
//     }
//   }

//   return true
 
  
  
  
// }

// console.log(sameCharFreq("aabbcc", "baccab"));
// console.log(sameCharFreq("aabbc", "aabbcc"));
// console.log(sameCharFreq("xyz", "xyzz"));


// Perfect — here’s your first Anagram Coding Challenge (Basic Version).

// Challenge: Check If Two Strings Are Anagrams

// Write a function that returns true if two strings are anagrams of each other, otherwise returns false.

// Example 1:

// Input: "listen", "silent"
// Output: true


// Example 2:

// Input: "hello", "world"
// Output: false


// Example 3:

// Input: "aabb", "baba"
// Output: true

// Requirements:

// Use objects (frequency count) to check if both strings have the same characters and frequencies.

// Ignore differences in order — only character counts matter.

// Keep time complexity O(n).

// Assume all lowercase letters for now.




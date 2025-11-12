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


// function isAnagram(s, t) {

//   if(s.length !== t.length) return false

//   let sFreq = {}
//   let tFreq = {}

  
//   for (let char of s) {
//     sFreq[char] = (sFreq[char] || 0) + 1

    
//   }

//   for (let char of t) {
//     tFreq[char] = (tFreq[char] || 0) + 1

    
//   }

//   for(let key in sFreq) {
//     if(sFreq[key] !== tFreq[key]) {      
//      return false
//     }
//   }

//   return true

// }

// console.log(isAnagram("listen", "silent"));
// console.log(isAnagram("hello", "world"));


// 🧩 Challenge 1 — Valid Anagram

// Write a function that returns true if s and t are anagrams of each other.

// Example:

// Input: s = "listen", t = "silent"
// Output: true


// function isAnagram (s, t) {

//   if(s.length !== t.length) return false
  
//   let frequency = {}

//   for(let char of s) {

//     frequency[char] = (frequency[char] || 0) + 1 

//   }

//   for(let char of t) {
//     if(!frequency[char]) return false 
//     frequency[char] -= 1
//   }
  
//   return true

// }

// console.log(isAnagram("listen", "silent"));


// 🧠 Explanation Before Coding

// You’re given an array of words. You need to group together all words that are anagrams of each other.

// Example
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

// 🧩 Intuition

// Two words are anagrams if their sorted characters are the same.

// "eat" → sort → "aet"

// "tea" → sort → "aet"

// "tan" → sort → "ant"

// So we can:

// Create a hashmap (object).

// Use the sorted version of the word as the key.

// Push each original word into the array under that key.

// 🧱 Steps

// Initialize an empty object groups = {}

// Loop over each word in the input array:

// Sort its letters to form a key.

// Add the word to groups[key].

// Finally, return all the values from the object.


// function groupOfAnagrams(arr) {
   
//   let groups = {}

//   for(let char of arr) {
//     let key = char.split("").sort().join("")
    
//     if(!groups[key]) {
//       groups[key] = []
    
//     }
//     groups[key].push(char)

//   }

  

  
//   return Object.values(groups)
  
// }

// console.log(groupOfAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));



// Challenge 1: Basic String Compression

// Write a function compressString(s) that compresses a given string by replacing consecutive repeated characters with the character followed by its count.

// Example 1:

// Input: "aaabbc"
// Output: "a3b2c1"


// Example 2:

// Input: "aabcccccaaa"
// Output: "a2b1c5a3"

// Guidelines

// You must use a single loop (no nested loops).

// Use a variable count to track consecutive occurrences.

// Use string concatenation or template literals to build the result.

// Return the final compressed string.

// Once you’ve written your solution, run it for:


// function compressString(str) {

//   let count = 1
//   let result = ""

//    for(let i = 0; i < str.length; i++) {
//     if(str[i] === str[i + 1]){
//      count++
      
//    }else{
//      result += str[i] + count
//      count = 1
//    }

   
//   }
//   return result 

// }
// console.log(compressString("aabcccccaaa"));
// console.log(compressString("aabbc"));
// console.log(compressString("abc"));



// Problem 1: Run-Length Encoding (Basic)

// Compress a string exactly like we did, but ignore counts of 1.

// Example:

// Input: "aabcccccaaa"
// Output: "a2bc5a3"


// Here, single characters (b) don’t show the 1.

// Try writing this variant — it’s a small tweak but common in interviews.


// function compressedString(str) {
   
//   let count = 1
//   let result = ""
//   for(let i = 0; i < str.length; i++) {


//     if(str[i] === str[i + 1]) {
//      count ++
     
//     }
//     else {
//       result += str[i] + (count > 1 ? count : "" )
//       count = 1
//     }

//   }

//   return result
   
// }
// console.log(compressedString("aabcccccaaa"));


// Problem 2: Decompress a Compressed String

// Given a compressed string like "a2b1c5a3", expand it back to "aabcccccaaa".

// Example:

// Input: "a2b1c5a3"
// Output: "aabcccccaaa"


// This will help you understand the inverse of compression and improve your string manipulation skills.

// function decompressString(s) {
//   let result = ""
//   let i = 0

//   while (i < s.length) {
//     let char = s[i]   // current letter
//     i++

//     let countStr = ""  // to collect digits for count

//     while (i < s.length && s[i] >= '0' && s[i] <= '9') {
//     countStr += s[i]
//     i++
//     }

//     let count = countStr === "" ? 1 : Number(countStr)

//     result += char.repeat(count)
  
    

//   }

//   return result
// }

// console.log(decompressString("a2bc5a3")) // should return "aabcccccaaa"

// Problem 3: Maximum Repeated Character

// Find the character that has the longest consecutive repetition in a string.

// Example:

// Input: "aaabbccccdd"
// Output: "c"  (because 'c' repeats 4 times consecutively)


// Useful to combine counting + consecutive character logic.

// function maximunRepeatedChar(s) {
  
//   let maxCount = 0;
//   let maxChar = ""
//   let count = 1

//   for(let i = 1; i < s.length; i++) {
    
//     if(s[i] === s[i - 1]) {
//       count++
//     }else{
//       if(count > maxCount) {
//         maxCount = count
//         maxChar = s[i - 1]
//       }
//       count = 1
//     }

    
//   }
//    if (count > maxCount) {
//     maxChar = s[s.length - 1];
//   }
//   return maxChar
// }

// console.log(maximunRepeatedChar("aaabbccccdd"))

// Problem 4: Compress & Compare Length

// Compress the string using your compression function, but return the original string if the compressed string is not shorter.

// Example:

// Input: "abc" 
// Compressed: "a1b1c1" → not shorter → return "abc"

// Input: "aabcccccaaa" 
// Compressed: "a2b1c5a3" → shorter → return compressed


// This is exactly like Cracking the Coding Interview’s classic compression problem.

// function compressedString(s) {
  
//  let result = ""
//  let count = 1


//  for(let i = 0; i <s.length; i++){
   
//   if(s[i] === s[i + 1]) {
//     count++
//   }else{
//     result +=  s[i] + count
//     count = 1
//   }

//  }

//  return result.length < s.length ? result : s;

 
// }

// console.log(compressedString("abc"))

// Problem 5: Count Consecutive Characters

// Instead of compressing into a string, return an array of objects showing counts.

// Example:

// Input: "aabcccccaaa"
// Output: [ {char: "a", count: 2}, {char: "b", count: 1}, {char: "c", count: 5}, {char: "a", count: 3} ]


// Helps you practice data structure + compression logic together.


// function compressedStrObj(s) {
  
//  let result = []
//  let count = 1


//  let group = {}


//  for(let i = 0; i <s.length; i++){
   
//   if(s[i] === s[i + 1]) {
//     count++
//   }else{
//     let obj = {char: s[i], count: count}
//     result.push(obj)
//     count = 1
    
//   }

//  }

//  return result

 
// }

// console.log(compressedStrObj("aabcccccaaa"))


// Problem: Longest Substring Without Repeating Characters

// Input: A string s
// Output: The length of the longest substring that contains no repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The longest substring without repeating characters is "abc".


// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The longest substring without repeating characters is "b".


// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The longest substring without repeating characters is "wke".


// function nonRepeatingSubstring(str) {

//     let left = 0
//     let maxlength = 0
//     let set = new Set()
    
//     for(let right = 0; right < str.length; right++) { //a|a,b|a,b,c|=>whileloop triggred| shrink left | window = b,c,a and so on
       
//         while(set.has(str[right])) {
//           set.delete(str[left])
//           left++
//         }

//         set.add(str[right])
    
        
//         maxlength = Math.max(maxlength, right - left + 1)
//     }
//   return maxlength
// }

// console.log(nonRepeatingSubstring("abcabcbb"));


// Problem: Find All Anagrams of a Pattern in a String

// Input:

// A string s

// A string p (the pattern)

// Output:

// An array of starting indices in s where an anagram of p begins.

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0, 6]
// Explanation:  
// The substring from index 0 to 2 is "cba", which is an anagram of "abc".  
// The substring from index 6 to 8 is "bac", which is an anagram of "abc".


// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0, 1, 2]
// Explanation:  
// Substrings "ab", "ba", "ab" are all anagrams of "ab".

// hint
// This problem is based on a fixed-size sliding window.

// The window size = length of the pattern p.

// You slide the window across s, one character at a time, and check if the current window is an anagram of p.


function findAnagrams(s, p) {
  const result = []
  const pMap = new Map()
  const sMap = new Map()
  const patternLen = p.length

  // Step 1: build frequency map for pattern
  for (let char of p) {
    pMap.set(char, (pMap.get(char) || 0) + 1)
  }

  let left = 0

  // Step 2: iterate through string
  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right]
    sMap.set(rightChar, (sMap.get(rightChar) || 0) + 1)

    // Step 3: shrink window if size > pattern length
    if (right - left + 1 > patternLen) {
      const leftChar = s[left]
      sMap.set(leftChar, sMap.get(leftChar) - 1)
      if (sMap.get(leftChar) === 0) sMap.delete(leftChar)
      left++
    }

    // Step 4: compare maps if window size matches pattern length
    if (right - left + 1 === patternLen) {
      let isEqual = true
      if (pMap.size === sMap.size) {
        for (let [key, val] of pMap) {
          if (sMap.get(key) !== val) {
            isEqual = false
            break
          }
        }
      } else {
        isEqual = false
      }

      if (isEqual) result.push(left)
    }
  }

  return result
}

// Example:
console.log(findAnagrams("cbaebabacd", "abc"))  // Output: [0, 6]

// Here’s the dry run table for findAnagrams("cbaebabacd", "abc") — you’ll see exactly how the sliding

// | Step | Left | Right | Current Window | Added Char | sMap (after update) | Action / Comparison | Result |
// | ---- | ---- | ----- | -------------- | ---------- | ------------------- | ------------------- | ------ |
// | 1    | 0    | 0     | "c"            | c          | { c:1 }             | window < p.length   | []     |
// | 2    | 0    | 1     | "cb"           | b          | { c:1, b:1 }        | window < p.length   | []     |
// | 3    | 0    | 2     | "cba"          | a          | { c:1, b:1, a:1 }   | equal to pMap ✅     | [0]    |
// | 4    | 0→1  | 3     | "bae"          | e          | { b:1, a:1, e:1 }   | not equal ❌         | [0]    |
// | 5    | 1→2  | 4     | "aeb"          | b          | { b:1, a:1, e:1 }   | not equal ❌         | [0]    |
// | 6    | 2→3  | 5     | "eba"          | a          | { b:1, a:1, e:1 }   | not equal ❌         | [0]    |
// | 7    | 3→4  | 6     | "bab"          | b          | { b:2, a:1 }        | not equal ❌         | [0]    |
// | 8    | 4→5  | 7     | "aba"          | a          | { b:1, a:2 }        | not equal ❌         | [0]    |
// | 9    | 5→6  | 8     | "bac"          | c          | { b:1, a:1, c:1 }   | equal ✅             | [0,6]  |
// | 10   | 6→7  | 9     | "acd"          | d          | { a:1, c:1, d:1 }   | not equal ❌         | [0,6]  |




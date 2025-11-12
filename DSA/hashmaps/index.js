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


// function nonRepeatingChar(str) {
 
//     let frequencies = new Map()
    
//     for(let char of str) {        
//      frequencies.set(char,(frequencies.get(char)|| 0) + 1)
   
//     }

//     for(let char of str) {   
//       if(frequencies.get(char )=== 1) {
//         return char
//       }
//     }
    
  
// }

// console.log(nonRepeatingChar("aabbcdee"));


// 🧩 Challenge 2 — Check if Array Contains Duplicates

// Problem:
// Given an array of numbers, return true if any number appears more than once.

// Example:

// Input: [1, 2, 3, 1]
// Output: true


// Hint:

// Use a Set to track seen numbers.

// If a number already exists in the set, return true.

// function duplicates(arr) {
 
//    let set = new Set()


//    for(let num of arr) {
     
//      if(set.has(num)) {
//      return true
//      }else{
//         set.add(num)
//      }
 
    
//    }

//    return false

  
  
// }

// console.log(duplicates([1, 2, 3, 1]));


// Given an array, return an object (or map) showing how many times each element appears.

// Example:

// Input: [1, 2, 2, 3, 1]
// Output: {1: 2, 2: 2, 3: 1}


// Goal:
// Use a hashmap to count the occurrences of each element in the array.

// function countElements(arr) {
 
//     let map = new Map()

//     for(let num of arr) {
     
//         map.set(num,(map.get(num) || 0) + 1)
//     }
    
//    return Object.fromEntries(map)
// }

// console.log(countElements([1, 2, 2, 3, 1]));


// 🧩 Challenge 4 — Remove Duplicates from Array
// Given an array, return a new array with only unique elements.

// Example:
// Input: [1, 2, 2, 3, 3]
// Output: [1, 2, 3]


// function removeDuplicates(arr) {
  
//     let set = new Set()


//     for(let num of arr) {
//         set.add(num)
//     }

//     return [...set] 
// }

// console.log(removeDuplicates([1, 2, 2, 3, 3]));

// second method


// function removeDuplicates(arr) {
  
//     let set = [...new Set(arr)]

//     return set
// }

// console.log(removeDuplicates([1, 2, 2, 3, 3]));


// 🧩 Challenge 5 — Find Intersection of Two Arrays

// Problem:
// Given two arrays, return a new array that contains only the elements that appear in both arrays.

// Example:
// Input: [1, 2, 3, 4] and [3, 4, 5, 6]
// Output: [3, 4]

// (No hints — try to solve it using Set.)


// function interSectionOfArrays(arr1, arr2) {
   
//     let set1 = new Set(arr1)
//     let set2 = new Set(arr2)
    
//     let result = new Set()

//     for(let num of set1) {
    
//       if(set2.has(num)) {
        
//        result.add(num)
//       }
//     }


//    return [...result] 
    
// }

// console.log(interSectionOfArrays([1,2,3,4], [3,4,5,6]));

// // 2nd method
// const interSectionOfArrays = (arr1, arr2) => {
//   const set2 = new Set(arr2);
//   return arr1.filter(num => set2.has(num));
// };

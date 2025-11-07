console.log("lest start");

// Answer these 6 questions in chat:

// Accessing an array element: time complexity?
//The time complexity of accessing an array element like array[4] is O(1)
//beacause tehre are no loops and the input size is constant


// Two nested loops from 0 to n: complexity?
// The time complexity fro two nested loops would be O(n^2)
//because the time taken to run one loop is n+1 then the inside block runs n times
//when nested loop runs n times it is n + 1 x n = n^2 or O(n^2)
//so two nested loops time complexity is O(n^2)

// Binary search complexity?
// time complexity for binary search is O(logn)
// it comes when we want half the input size 

// Creating a second array same size as input: space complexity?
// space complexity grows with space like if we save another variable 
//the space complexity of creating a new array would be O(n)  which is linear

// A simple loop from 1 to n: complexity?
// time grows directly with the input so O(n) time complexity 
//space complexity is if O(n) beacause space grows with let i = 0 we are storing in a variable 

// Halving the problem every step falls into which complexity?
// O(logn)

// LeetCode-Style Practice Problems

// Problem 1: Find Maximum
// Given an array nums, return the maximum number.
// Example: [2, 7, 1, 9] → 9
// Expected: O(n)

// function maxNum (nums) {
//   let max = nums[0]  //2
//   console.log(max);
  
//   for (let i =1 ; i < nums.length; i++) {
//     console.log(i);  // 1
    
//    if(nums[i] > max) {  //2
//     console.log(`nums[i]: ${nums[i]} max: ${max}`);   //if the statement in if is falsy then the block wont run and nothing prints
//     max = nums[i]
//    }
//   }
//   return max
// }

//  console.log(maxNum([2,7,1,9]))

 
  
// Problem 2: Count Occurrences
// Given nums and target, return how many times target appears.
// Example: nums = [1,2,2,3.4,5,5,5,7,7,8,8,8,2], target = 2 → 3  time comp (n) space O(1)

// function countOccurence (nums) {
//   let count = 0
//   for(let i = 0; i < nums.length; i++) { 
//    if(nums[i] === 2 ){
//     count++
//    }
//   }
//   return count
  
// }

// console.log(countOccurence([1,2,2,3,2]));


// Problem 3: Check if Array is Sorted
// Return true if sorted in ascending order.
// Example: [1,2,3,4] → true
// Example: [1,3,2] → false

// function sortedArray(arr) {

  
//     for(let i = 1; i < arr.length; i++) {

//        if(arr[i] < arr[i -1]) {
//          return false
//        }

//     }

//     return true
    

  
// }
// console.log(sortedArray([1,2,3,4,5]));
// console.log(sortedArray([1,3,2]));

// Reply now with:

// Your quiz answers

// Your code for the 3 problems (JavaScript)

// Then we continue to Arrays next.


// /Quiz (answer all 6)

// What is the time complexity of accessing arr[5]?
// O(1) because because of memory is continuos and time 
//it is constant so it is 1 
//donate with O(1)

// What is the time complexity of searching for a value in an unsorted array?
// searching for a value in unsorted array is O(n) because here we use loop which increase time complexity by input

// What is the time complexity of inserting at index 0?
// time complexity for inserting at first index [0] is O(n)

// What is the time complexity of pushing at the end?
//O(1) beacause there is no shifting happens we are pushing to last index

// If an array has 1,000,000 elements, how many comparisons does a full traversal take?
// as transversal is a loop O(n) it takes 1000000 elements looping through each element

// Why is deleting from the start of an array O(n)?
// beacuse while we delete the start of an array the shifting of other elements happens

// Practice Problems (LeetCode Style)

// Each includes expected complexity.

// Problem 1: Find Index of Target
// Given an array nums and a target, return the index where target is found. If not found return -1.
// Example: [4, 2, 6, 7], target = 6 → 2
// Expected: O(n) time, O(1) space

// function findTarget(nums, target) {
  
    
//   for(let i = 0; i < nums.length; i++) {
//     if(nums[i] === target) {
//     return i
      
//     }
    
//   }

//   return - 1
// }
// console.log(findTarget([4,2,6,7], 4));
 



// Problem 2: Sum of All Elements
// Given an array nums, return the total sum.
// Example: [1, 2, 3] → 6
// Expected: O(n) time, O(1) space

// function sumOfArray(nums) {
//     let sum = 0
//    for(let i = 0; i < nums.length; i++) {  //1  
//     sum += nums[i]  // 1 + 2
//    }
//    return sum 
// }

// console.log(sumOfArray([1,2,3]));
 

// Problem 3: Find Minimum Element
// Given nums, return the smallest number.
// Example: [4, 1, 7, 0] → 0
// Expected: O(n) time, O(1) space

// function minElem(nums) {

//     let min = nums[0]  //4 | 1 | 1  

//   for(let i = 1; i < nums.length; i++) {
    
//     if(min > nums[i]) { // 4  > 1 | 1 > 7 | 1 > 0
//       min = nums[i] //1 | got false | 0
      
//     }

//   }
//   return min

// }
// console.log(minElem([4, 1, 7, 0]));

// Problem 4: Check if Array Has Duplicates
// Example: [1, 2, 3, 3] → true
// Example: [1, 2, 3] → false
// Expected: O(n) time, O(n) space (using a set)


// function hasDupliactes(nums) {
//     const unique = [...new Set(nums)]
    
//     return unique.length !== nums.length
// }

// console.log(hasDupliactes([1,2,3,3]));
// console.log(hasDupliactes([1,2,3]));


  

 








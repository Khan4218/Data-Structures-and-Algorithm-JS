// 🔹 Challenge 1: Count Operations (O(n))
// 🧠 Task:
// Write a function countToN(n) that prints numbers from 1 to n.
// 🔍 What You’re Practicing:
// Writing a simple loop
// Recognizing O(n) time complexity
// 🔧 Example:
// countToN(5)
// Output: 1 2 3 4 5
// function countToN(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(i);

//   }

// }
// countToN(5)

// 🔹 Challenge 2: Find Max (O(n))
// 🧠 Task:
// Write a function findMax(arr) that returns the largest number in the array.
// 🔍 What You’re Practicing:
// Linear scan
// Comparing elements
// Understanding time complexity = O(n)
// 🔧 Example:
// findMax([3, 1, 7, 2]) // ➞ 7

// function findMax(arr) {
//   let max = arr[0]
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]
//     }

//   }


//   return max

// }

// console.log(findMax([3, 1, 7, 2]));


// 🔹 Challenge 3: Constant Time Access(O(1))
// 🧠 Task:
// Write a function getMiddle(arr) that returns the middle element of an array.
// ⚠️ Note:
// If the array has even length, return either the left or right middle — your choice.
// 🔍 What You’re Practicing:
// Constant time access using index
// O(1) time complexity
// 🔧 Example:
// getMiddle([10, 20, 30]) // ➞ 20
// getMiddle([5, 10, 15, 20]) // ➞ 10 or 15 (both fine)

// function getMiddle(arr) {
//   const midIndex = Math.floor(arr.length / 2)
//   return arr[midIndex]

// }

// console.log(getMiddle([10, 20, 30]));

// 💪 Phase 1: Challenge Set #2 (Fresh Problems)
// 🔹 Challenge 1: Print Even Numbers (O(n))
// 🧠 Task:
// Write a function printEvens(n) that prints all even numbers from 1 to n.

// printEvens(7); 
// ➞ 2
//    4
//    6

// function printEvens(n) {

//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//       console.log(i);

//     }

//   }
// }

// printEvens(7)

// 🔹 Challenge 2: Sum of Numbers (O(n))
// 🧠 Task:
// Write a function sumToN(n) that returns the sum of all numbers from 1 to n.

// Example:

// ➞ 15  (1+2+3+4+5)

// function sumToN(n) {
//   let sum = 0
//   for (let i = 1; i <= n; i++) {
//     sum += i

//   }

//   return sum
// }

// console.log(sumToN(5));

//Time complexity is O(n) linear using loop
//space complexity is O(1) used one variable 

// 🔹 Challenge 3: Check First and Last (O(1))
// 🧠 Task:
// Write a function sameStartEnd(arr) that returns true if the first and last element of an array are the same, otherwise false.
// Example:
// sameStartEnd([1, 2, 3, 1]); // ➞ true
// sameStartEnd([5, 6, 7]);    // ➞ false

// function sameStartEnd(arr) {
//   const index1 = arr[0]
//   const index2 = arr[arr.length - 1]
//   if (index1 === index2) {
//     return true
//   } else {
//     return false
//   }

// }

// console.log(sameStartEnd([1, 2, 3, 1]));
//Time and space O(1)


// 💪 Phase 1: Challenge Set #3(More Practice)
// 🔹 Challenge 1: Count Backwards(O(n))
// 🧠 Task:
// Write a function countDown(n) that prints numbers from n to 1.
// Example:
// Output: 5
//         4
//         3
//         2
//         1

function countDown(n) {
  let count = 0;
  for (let i = n; i >= 1; i--) {
    console.log(i);

  }
}
console.log(countDown(5));


// 🔹 Challenge 2: Is Array Empty? (O(1))
// 🧠 Task:
// Write a function isEmpty(arr) that returns true if the array has no elements, otherwise false.

// Example:
// ➞ true
// ➞ false ;

function isEmpty(arr) {
  if (arr.length === 0) {
    return true
  } else {
    return false
  }

}
console.log(isEmpty([]));
console.log(isEmpty([1, 2, 3]));


// 🔹 Challenge 3: Count Zeros (O(n))
// 🧠 Task:
// Write a function countZeros(arr) that returns how many 0s are in the array.
// Example:
// ➞ 3

function countZeros(arr) {
  let zeros = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros++
    }
  }

  return zeros
}

console.log(countZeros([0, 1, 0, 2, 3, 0]));


// 💪 Phase 1: Challenge Set #4
// 🔹 Challenge 1: Sum of Even Numbers (O(n))
// Task
// Write a function sumEven(arr) that returns the sum of all even numbers in the array.
// Example

// ➞ 12   (2 + 4 + 6)
function sumEven(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i]
    }
  }

  return sum
}

console.log(sumEven([1, 2, 3, 4, 5, 6]));
//time complexity O(n) //space complexity O(1) used one variable


// 🔹 Challenge 2: First Non‑Zero (O(n))
// Task
// Write a function firstNonZero(arr) that returns the first element that is not 0.
// If every element is 0, return null.

// Example
// ➞ 3
// ➞ null

function firstNonZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      return arr[i]
    }
  }

  return null
}
console.log(firstNonZero([0, 0, 3, 0]));

console.log(firstNonZero([0, 0, 0]));


// 🔹 Challenge 3: Swap Ends (O(1))
// Task
// Write a function swapEnds(arr) that swaps the first and last elements of an array in place (mutates the same array) and returns the array.

// Example
// const nums = [7, 2, 9, 4];
// swapEnds(nums);   // ➞ [4, 2, 9, 7]
// console.log(nums) // original array now changed to [4, 2, 9, 7]
// Hint: only three simple assignments are needed—no loops!

function swapEnds(arr) {
  if (arr.length < 2) {
    return arr
  }
  let temp = arr[0]
  arr[0] = arr[arr.length - 1]
  arr[arr.length - 1] = temp
  return arr
}


console.log(swapEnds([7, 2, 9, 4]));
//time complexity O(1), space complexity O(1)\


// 🔹 Challenge 1: Count Negatives (O(n))
// 🧠 Task:
// Write a function countNegatives(arr) that returns the number of negative values in the array.

// Example:
// ➞ 2

function countNegatives(arr) {
  let negative = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negative += 1
    }

  }

  return negative
}
console.log(countNegatives([4, -1, 0, -3, 9, - 8]));


// 🔹 Challenge 2: Has Duplicates? (O(n²) basic, O(n) optimized)
// 🧠 Task:
// Write a function hasDuplicates(arr) that returns true if any duplicate values exist in the array, otherwise false.

// Example:
// hasDuplicates([1, 2, 3, 4]);     // ➞ false
// hasDuplicates([1, 2, 2, 3]);     // ➞ true

// 🔁 Start with the basic nested loop approach.
// Then we’ll optimize using a Set (if you're up for it).

function hasDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true
      }
    }

  }

  return false
}

console.log(hasDuplicates([1, 2, 3, 4]));

// 🔹 Challenge 3: Last Index Of Target (O(n))
// 🧠 Task:
// Write a function lastIndexOf(arr, target) that returns the last index at which target appears in the array. If not found, return -1.

// Example:
// lastIndexOf([5, 1, 2, 5, 3, 5], 5);  // ➞ 5
// lastIndexOf([1, 2, 3], 4);          // ➞ -1

function lastIndexOf(arr, target) {
  let lastIndex = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      lastIndex = i
    }
  }
  return lastIndex
}

console.log(lastIndexOf([5, 1, 2, 5, 3, 5], 5));

console.log(lastIndexOf([1, 2, 3], 4));


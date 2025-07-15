// 💻 Challenge Set: Analyzing Loops & Patterns
// 🔹 Challenge 1: Print All Pairs
// Write a function printPairs(arr) that logs all pairs of elements in the array (no repeats).

// printPairs([1, 2, 3]);
// 🧠 Expected Output:
// 1 2
// 1 3
// 2 3

function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {

      console.log(arr[i], arr[j]);
    }

  }
}
printPairs([1, 2, 3])
//time Complexity O(n2)
//space complexity O(1)


// 🔹 Challenge 2: Count Total Steps
// Count how many times "Step" is printed:

function countSteps(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      console.log("Step");
    }
  }
}

countSteps(5);

// Question: What’s the total number of steps printed when n = 5?
// What is the time complexity?

//Sol : 15 timecomplexity O(n2) and space complexity O(1)


//challenge 3
// ✅ Task:
// Write a function includesValue(arr, target)
// It should return true if the target exists in the array, false otherwise.
// It should exit early when a match is found.

// ✍️ Starter Code:
// function includesValue(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return true;
//     }
//   }
//   return false;
// }
// 🧪 Test Cases:
// console.log(includesValue([2, 4, 6, 8], 6));   // ➞ true
// console.log(includesValue([2, 4, 6, 8], 10));  // ➞ false
// ❓Your Task:
// Paste or confirm the correct function implementation
// Answer:
// ✅ Best case time complexity?
// ❗ Worst case time complexity?
// 🧠 Space complexity?


function includesValue(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true
    }
  }

  return false
}

console.log(includesValue([2, 4, 6, 8], 6))
console.log(includesValue([2, 4, 6, 8], 10))

//Best case O(1) target found early
//Worst case O(n) target found later
//space complexity is O(1) no memory used to store 
//This problem is the case of worst case because target is found later after looping 


// Challenge 4: Weird Loop Puzzle
// function loopMystery(n) {
//   for (let i = n; i > 1; i = Math.floor(i / 2)) {
//     console.log(i);
//   }
// }
// Run it mentally for, say, n = 20 to see the pattern.

// State the time complexity (hint: how many times can you halve n?).

function loopMystery(n) {
  for (let i = n; i > 1; i = Math.floor(i / 2)) {
    console.log(i);
  }
}
loopMystery(20)
//time complexity O(n3) //because it can half n 3 times
//space complexity O(1)

// Challenge 5: Nested Different Arrays
// function combine(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       console.log(arr1[i], arr2[j]);
//     }
//   }
// }
// Give the time complexity in terms of n = arr1.length and m = arr2.length.

// Outer loop runs n = arr1.length times.
// Inner loop runs m = arr2.length times for each i.
// Total operations = n × m → O(n m).
// (If n and m are the same size, that simplifies to O(n²).)
// Space is O(1).



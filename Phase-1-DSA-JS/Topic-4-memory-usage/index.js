// ✅ Q1. sumToN
// let sum = 0;
// for (...) { sum += i; }
// Your Answer: O(1)
// ✔️ Correct!
// Just a few variables — no growing memory used → O(1)

// ✅ Q2. makeCopy
// let copy = [];
// for (...) { copy.push(...); }
// Your Answer: O(n)
// ✔️ Correct!
// Creates a new array the same size as input → O(n)

// ✅ Q3. recursiveCount
// recursiveCount(n - 1)
// Your Answer: O(n)
// ✔️ Correct!
// Recursive depth = n, so O(n) space on call stack

// ✅ Q4. makeMatrix
// matrix.push(row), row.push(0)
// Your Answer: O(n²)
// ✔️ Correct!
// n rows × n columns = n² elements → O(n²) space

// ❌ Q5. .map() on array of length n
// Your Answer: O(n²)
// ❌ Correct Answer: O(n)

// .map() returns a new array of the same length

// Even if there’s logic inside, the return size is still just n → so it’s O(n) space

// Only time it would be O(n²) is if each map element itself returns an array of n items.

// ✅ Q6. logFirst

// console.log(arr[0])
// Your Answer: O(1)
// ✔️ Correct!
// Reads, doesn’t store anything → O(1) space

// ✅ Q7. buildArray

// result.push(i)
// Your Answer: O(n)
// ✔️ Correct!
// Creates a new array of size n → O(n) space


// 🔹 Challenge 1: Count Odd Numbers
// Write a function that returns the number of odd numbers in an array.

// countOdds([1, 2, 3, 4, 5]); // ➞ 3
// Then answer:

// Time complexity: O(?)

// Space complexity: O(?)

function countOdds(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      count++
      arr[i]

    }
  }

  return count
}

console.log(countOdds([1, 2, 3, 4, 5]));
//time complexity O(n) //space complexity O(1)


// 🔹 Challenge 2: Build Double Array
// Create a new array where each number is doubled.
// doubleArray([2, 4, 6]); // ➞ [4, 8, 12]
// Then answer:
// Time complexity: O(?)
// Space complexity: O(?)

function doubleArray(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let doubled = arr[i] * 2
    newArr.push(doubled)
  }

  return newArr
}
console.log(doubleArray([2, 4, 6]));
//time complexity O(n)
//space complexity O(n)


// 🔹 Challenge 3: Reverse In-Place
// Reverse an array without using extra space.
// reverseInPlace([1, 2, 3, 4]); // ➞ [4, 3, 2, 1]
// Then answer:
// Time complexity: O(?)

// Space complexity: O(?)

function reverseInPlace(arr) {
  let len = arr.length
  for (let i = 0; i < Math.floor(len / 2); i++) {
    const temp = arr[i]
    arr[i] = arr[len - 1 - i]
    arr[len - 1 - i] = temp

  }
  return arr
}

console.log(reverseInPlace([1, 2, 3, 4]));
//time complexity O(n)
//space complexity O(1)


// 🔹 Challenge 4: Count Steps Logarithmic
// Count how many times you can divide a number by 2 until it’s less than 1.

// countHalves(20); // ➞ 4 (20 → 10 → 5 → 2 → 1)
// Then answer:

// Time complexity: O(?)

// Space complexity: O(?)

function countHalves(n) {
  let count = 0
  for (let i = n; i >= 1; i = i / 2) {
    count++
  }

  return count
}

console.log(countHalves(20));

//time complexity O(log n)
//space Complexity O(1)

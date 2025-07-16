
// 🧩 Challenge 1: First Element
// Write a function getFirst(arr) that returns the first element of the array.

function getFirst(arr) {
  console.log(arr[0]);

}

getFirst([1, 2, 3, 4])
//time complexity O(1) constant
//space complexity O(1) constant

// 🧩 Challenge 2: Sum of Elements
// Write a function sumArray(arr) that returns the sum of all elements in the array.
function sumArray(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum
}

console.log(sumArray([1, 2, 3, 4]));
//time complexity O(n)  linear looping
//space complexity O(1) constant used variable to save in memory



// 🧩 Challenge 3: Last Element
// Write a function getLast(arr) that returns the last element.
function getLast(arr) {
  console.log(arr[arr.length - 1]);

}
getLast([1, 2, 3, 4])
//time complexity O(1) constant no loop used
//space complexity O(1) constant no variable used to store

// 🧩 Challenge 4: Includes Value
// Write a function includes(arr, target) that returns true if the target value exists in the array, otherwise false.

function includes(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true
    }
  }
  return false

}

console.log(includes([1, 2, 3, 4], 4));
//time complexity O(n) // linear because we are looping through array for loop comdition
//space complexity O(1) constant not storing a element just checking and returing boolean in memory

// 🧩 Array Challenges – Set 2 (Intermediate)
// Tighten your logic and sharpen your loop-fu 😎

// 🧩 Challenge 1: Count Occurrences
// Write a function countOccurrences(arr, target) that returns how many times target appears in the array.
function countOccurrences(arr, target) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++
    }
  }
  return count
}

console.log(countOccurrences([1, 0, 0, 4, 0], 0));
//time complexity O(n) linear looping through n times
//space complexity O(1) constant used only one variable to icrease count

// 🧩 Challenge 2: Get Even Numbers
// Write a function getEvens(arr) that returns a new array with only the even numbers.

function getEvens(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      let evens = arr[i]
      newArr.push(evens)

    }
  }
  return newArr
}

console.log(getEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//time complexity O(n) beacuse we are looping on each elements in array
//space complexity O(n) beacuse we are changing a array into a new array


// 🧩 Challenge 3: Reverse Array
// Write a function reverseArray(arr) that returns a new array with the elements in reverse order.
// (No .reverse() allowed!)
function reverseArray(arr) {
  let newarr = []
  let index = arr.length - 1

  for (let i = index; i >= 0; i--) {
    newarr.push(arr[i])

  }
  return newarr
}
console.log(reverseArray([5, 4, 3, 2, 1]));

//time complexity O(n)
//space complexity O(n)


// 🧩 Challenge 4: Max Value
// Write a function getMax(arr) that returns the highest number in the array.

// ⛔ Rules:
// Add time & space complexity to each
// No built-in helpers (reverse, Math.max, etc.)
// Send one at a time, like before

function getMax(arr) {
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}


console.log(getMax([10, 27, 86, 100]));
//time complexity O(n) linear looping through arr.length times
//space complexity O(1) not changing or modify array so space is constant  

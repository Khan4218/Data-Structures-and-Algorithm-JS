// 🧠 Challenge 1: Reverse a Stack
// Task:
// Write a function reverseStack(arr) that returns a new array with the stack reversed (simulate stack behavior using push/pop).

// reverseStack([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// 📦 Use only stack methods like push and pop.

function reverseStack(arr) {
  let stack = []
  for (let i = arr.length - 1; i >= 0; i--) {
    stack.push(arr[i])

  }
  return stack
}

console.log(reverseStack([1, 2, 3, 4]));
//time complexity O(n)
//space complexity O(n)


// 🧠 Challenge 2: Is Stack Empty
// Task:
// Write a function isEmpty(stack) that returns true if the stack is empty, else false.

// isEmpty([]) ➞ true  
// isEmpty([1, 2, 3]) ➞ false

function isEmpty(stack) {
  if (stack.length === 0) {
    return true
  } else {
    return false
  }
}

console.log(isEmpty([]))
console.log(isEmpty([1, 2, 3]));
//time complexity O(1)
//space complexity O(1)


// 🧠 Challenge 3: Peek at Top Element
// Task:
// Write a function peek(stack) that returns the top element without removing it.

// peek([10, 20, 30]) ➞ 30
// ☝️ Remember: Top of stack is the last item in array.

function peek(stack) {
  const peekLastElemet = stack[stack.length - 1]
  return peekLastElemet
}

console.log(peek([10, 20, 30]));
//time complexity O(1)
//space Complexity O(1) no modifying only peeking


// 🧠 Challenge 4: Balanced Parentheses Checker
// Task:
// Write a function isBalanced(str) that returns true if the parentheses in the string are balanced.

// isBalanced("(())") ➞ true
// isBalanced("(()") ➞ false
// isBalanced("()()") ➞ true
// 📌 Use a stack to push '(' and pop when ')' comes.

function isBalanced(str) {
  for (let i = 0; i < str.length; i++) {
    let lastIndex = str.length - 1
    if (str[i] === "(" && str[lastIndex] === ")") {
      return true
    }
  }

  return false

}

console.log(isBalanced("(())"));


// 🔢 Challenge 5: Stack Min & Max
// Task:
// Write a function getMinMax(stack) that returns an object with the minimum and maximum values from the stack.
// 🧪 Example:
// getMinMax([4, 2, 9, 1, 5]) ➞ { min: 1, max: 9 }
// getMinMax([10]) ➞ { min: 10, max: 10 }
// getMinMax([]) ➞ null
// 🧠 Hints:
// Return null if the stack is empty.
// Loop once through the stack.
// Track both min and max using two variables.

function getMinMax(arr) {
  if (arr.length === 0) {
    return null
  }
  let min = arr[0]
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    } else if (arr[i] > max) {
      max = arr[i]
    }
  }

  return { minimum: min, maximum: max }


}




getMinMax([4, 2, 9, 1, 5])
console.log(getMinMax([10]));
console.log(getMinMax([]));

//time complexity O(n) looping through each elemnet in array
//space complexity O(1) not modifying the array


// 🧠 Challenge 6: Sort Stack (Ascending Order)
// Task:
// Write a function sortStack(stack) that takes a stack of numbers and returns a new stack sorted in ascending order (smallest on top).
// You can use another stack or array to help you, but no built-in sort allowed.

// sortStack([3, 1, 4, 2]) ➞ [1, 2, 3, 4]
// sortStack([5, 1, 2]) ➞ [1, 2, 5]
// 🧠 Hint (if needed): Think of bubble sort using two stacks.

function sortStack(mainStack) {
  let helperStack = []

  while (mainStack.length > 0) {
    let temp = mainStack.pop()

    while (helperStack.length > 0 && helperStack[helperStack.length - 1] > temp) {
      mainStack.push(helperStack.pop())
    }

    helperStack.push(temp)

  }


  return helperStack


}

console.log(sortStack([3, 1, 4, 2]));


// 💥 Challenge: Sort Stack in Descending Order
// Write a function sortStackDescending(stack) that sorts the stack from top = largest to bottom = smallest, using only stack operations (push, pop) and one helper stack.

// 🔁 Example:

// sortStackDescending([3, 1, 4, 2]) ➞ [4, 3, 2, 1]

function sortStackDescending(mainStack) {
  let helperStack = []
  while (mainStack.length > 0) {
    let temp = mainStack.pop()

    while (helperStack.length > 0 && helperStack[helperStack.length - 1] < temp) {
      mainStack.push(helperStack.pop())
    }

    helperStack.push(temp)

  }

  return helperStack
}

console.log(sortStackDescending([3, 1, 4, 2]));

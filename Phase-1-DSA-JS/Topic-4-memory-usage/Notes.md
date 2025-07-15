🧠 Understanding Space Complexity

🔍 What is Space Complexity?
Space complexity is the amount of extra memory your code uses as input grows.

We don’t count input itself — we count:

Variables you create

Arrays/objects/maps you build

Function call stacks (like in recursion)

🎯 The Goal
You want to be able to look at a function and say:

“This uses constant space (O(1))”
or
“It grows with the input — O(n)”

✅ Rules of Thumb

| Situation                                | Space Complexity                     |
| ---------------------------------------- | ------------------------------------ |
| Just a few variables (no arrays/objects) | **O(1)**                             |
| New array that grows with input          | **O(n)**                             |
| Nested arrays or matrices                | **O(n²)**                            |
| Recursion (1 call per input element)     | **O(n)** (because of **call stack**) |

🔹 Examples
Example 1: Constant space (O(1))
function addNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
❌ Doesn’t create a new array
✅ Only sum, i → O(1) space

Example 2: Linear space (O(n))
function doubleNumbers(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}
✅ Creates a new array the same size as input

🔄 Output memory grows with input
→ O(n) space


Example 3: Recursive space (O(n))
function countDown(n) {
  if (n === 0) return;
  console.log(n);
  countDown(n - 1);
}
Each function call is stored in the call stack until it returns
n = 5 → 5 calls deep
→ O(n) space

Example 4: Double nested array (O(n²))

function makeMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    matrix.push(row);
  }
  return matrix;
}

n rows × n columns = n² cells
→ O(n²) space
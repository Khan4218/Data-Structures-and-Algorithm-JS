🧠 What Is Time and Space Complexity?
Imagine you're trying to solve a problem using code. For example:

You have a list of 1,000 numbers. How fast can your code find the biggest one?
What if the list grows to 1,000,000?

The point is:
✅ Your code might work, but
🚨 It might become very slow or memory-hungry when the input is large.

That’s why we need to measure efficiency — and that’s what Time and Space Complexity helps us do.

🕒 1. Time Complexity — How Fast?
Time complexity means:
👉 How many steps does your code take as the input grows?
Example 1: Constant Time O(1)
function getFirst(arr) {
  return arr[0];
}
No matter if the array has 10 or 1 million elements — it only takes 1 step.
➡️ This is O(1) — constant time.

Example 2: Linear Time O(n)
function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
If arr has:
10 elements → 10 steps
1,000 elements → 1,000 steps
➡️ Time grows with size = O(n) — linear time.
function compareAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
If arr has 100 items, it runs 100 × 100 = 10,000 times.
➡️ This is O(n²) — very slow as size increases.

🔢 Time Complexity Summary
| Code Pattern              | Complexity | Meaning                  |
| ------------------------- | ---------- | ------------------------ |
| `arr[0]`                  | O(1)       | Constant (fastest)       |
| `for` loop over `n` items | O(n)       | Linear                   |
| Nested loops              | O(n²)      | Quadratic (slow)         |
| Binary Search             | O(log n)   | Logarithmic (super fast) |

💾 2. Space Complexity — How Much Memory?
Now imagine:
How much extra space (memory) does your code use?
It’s not about speed — it's about how much RAM your code needs.

Example 1: O(1) — No Extra Space
function sum(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}
✅ Uses just one variable total, no matter how big arr is.
➡️ Space = O(1)

Example 2: O(n) — New Array
function doubleArray(arr) {
  let result = [];
  for (let num of arr) {
    result.push(num * 2);
  }
  return result;
}
🚨 Creates a new array the same size as input → Space = O(n)
💡 The Big O Notation
We use Big O notation to describe how time or space grows as input grows.
| Big O      | Read as      | Example                   |
| ---------- | ------------ | ------------------------- |
| O(1)       | Constant     | Array access              |
| O(n)       | Linear       | Single loop               |
| O(n²)      | Quadratic    | Nested loops              |
| O(log n)   | Logarithmic  | Binary search             |
| O(n log n) | Linearithmic | Fast sorts like MergeSort |
| O(2^n)     | Exponential  | Recursive combinations    |

🔑 Real-Life Analogy (Pizza 🍕)
Imagine you're slicing pizza for friends:
🍕 You cut 1 slice, no matter how many friends → O(1)
🍕 1 slice per friend → O(n)
🍕 You compare every friend to every other friend → O(n²)

✅ What You Need to Remember
Time complexity = how fast your code runs
Space complexity = how much memory your code needs
Big O notation helps us describe it simply
Always aim for less time and less space when possible

✅ Phase 1 Complete: What You’ve Mastered

🧠 1. Big O Notation (Time & Space Complexity)
| Big O      | Meaning                             | Example                      |
| ---------- | ----------------------------------- | ---------------------------- |
| `O(1)`     | Constant time — same no matter what | Access first element         |
| `O(n)`     | Linear time — grows with input size | Loop through array           |
| `O(n²)`    | Quadratic — nested loops            | Compare every pair in array  |
| `O(log n)` | Logarithmic — halves each time      | Binary search (coming later) |
You also learned to identify space complexity, especially when using extra variables or data structures.

🔁 2. Loops and Indexing
You practiced:
Looping from 0 → arr.length
Looping backwards
Nested loops(i, j) to compare every pair
Using return at the right time
Tracking counters like sum, max, count, etc.

🧪 3. Real Problem Solving Patterns
You wrote functions to:

| Problem                 | Skill Practiced            |
| ----------------------- | -------------------------- |
| Count from 1 to N       | Basic loop, `O(n)`         |
| Find max in array       | Compare and track max      |
| Check first == last     | Indexing & conditions      |
| Count evens / zeros     | Filter and count with loop |
| First non-zero          | Early return               |
| Has duplicates (2 ways) | Brute-force + Set pattern  |
| Swap first/last values  | Index assignment, `O(1)`   |
| Last index of target    | Tracking value across loop |

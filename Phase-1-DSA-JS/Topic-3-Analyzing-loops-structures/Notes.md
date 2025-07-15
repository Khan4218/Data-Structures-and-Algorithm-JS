🔍 Analyzing Loops and Nested Structures

🧠 What You'll Learn

You’ll learn how to analyze the time complexity of different loop patterns, especially when:
You have single loops
You use nested loops
Loops are dependent or independent
You see early exits like break or return

🧮 Why This Matters
Loops are everywhere in coding — and they often decide performance.
Understanding how to read a loop and say,
"Ah, that’s O(n)" or "Wait, this is O(n²)"
is foundational for interviews and real-world code optimization.

✅ Step-by-Step Explanation (as if you're new to it)
🔹 1. Single Loop = O(n)

function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
The loop runs once per element

If the array has n items → loop runs n times

⏱ Time complexity: O(n)

🧠 Why? It scales linearly as the array grows.

🔹 2. Nested Loops = O(n²)

function printAllPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
First loop runs n times

For every i, the inner loop runs n times

So total = n × n = n² steps

⏱ Time complexity: O(n²)

🔹 3. Nested Loop (Different Lengths)

function process(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      console.log(arr1[i], arr2[j]);
    }
  }
}
Outer loop: arr1.length = n

Inner loop: arr2.length = m

Total operations: n × m

⏱ Time complexity: O(n × m)

🔹 4. Loop with Break or Return (Best Case vs Worst Case)
js
Copy
Edit
function findFirst(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
Best case: Target found early → O(1)

Worst case: Target is at the end → O(n)

We describe it as O(n) in general unless asked for best/average/worst separately

🔹 5. Multiple Independent Loops = Additive Time (Still O(n))

function processTwice(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);   // Loop A
  }

  for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);   // Loop B
  }
}
Loop A: n steps

Loop B: n steps

Total = n + n = 2n → Drop constant → O(n)


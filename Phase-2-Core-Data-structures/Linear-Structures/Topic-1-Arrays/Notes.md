🧠 What Is an Array?
An array is a list-like data structure where elements are stored in a single, continuous block of memory.

Each item is stored at a numbered position called an index, starting from 0.

const arr = ['a', 'b', 'c'];
// Index:     0    1    2

✅ Why Arrays Are Powerful:
📌 Fast access: You can instantly access any item using its index → arr[2]
🧱 Fixed layout: All elements are tightly packed in memory, which makes them efficient
💥 Used everywhere: Arrays are the base for most other data structures

🛠 Basic Operations & Their Time Complexities

| Operation               | Example            | Time Complexity |
| ----------------------- | ------------------ | --------------- |
| Access by index         | `arr[3]`           | `O(1)` ✅ Fast   |
| Insert at end           | `arr.push(val)`    | `O(1)` average  |
| Remove from end         | `arr.pop()`        | `O(1)`          |
| Insert at start         | `arr.unshift(val)` | `O(n)` ❌        |
| Remove from start       | `arr.shift()`      | `O(n)` ❌        |
| Search (loop/`indexOf`) | `arr.includes(x)`  | `O(n)`          |

🧠 Why is unshift() or shift() slow?
Because all other elements need to be moved one place in memory:

// shift():
// [1, 2, 3] → remove first → [2, 3] → move 2 and 3 to the left

🧠 Arrays vs Objects

| Feature        | Arrays             | Objects               |
| -------------- | ------------------ | --------------------- |
| Indexed by     | Numbers (0, 1, 2…) | Keys (`"name"`, etc.) |
| Order matters? | ✅ Yes              | ❌ No                  |
| Best for       | Lists, sequences   | Grouped properties    |

🧠 Space Complexity
Each element takes some memory → Total space is O(n)
Array of 5 items uses memory for 5 elements.

🔍 Summary
✅ Arrays are great when you need fast access by index
❌ Avoid inserting/removing from the front often
🧠 Time: Access = O(1), Search = O(n), Insert Front = O(n)
🧠 Space: O(n)
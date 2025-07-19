📚 What Is a Stack?
A stack is a data structure that follows the:

LIFO principle — Last In, First Out
The last element added is the first one removed, just like a stack of plates 🍽️

🧠 Real-World Examples
Undo feature in editors (latest action undone first)
Browser history (go back to the most recent page)
Function calls in JavaScript (call stack)

🧱 Basic Stack Operations
| Operation   | Description                             |
| ----------- | --------------------------------------- |
| `push()`    | Add an item to the top                  |
| `pop()`     | Remove the top item                     |
| `peek()`    | View the top item (without removing it) |
| `isEmpty()` | Check if the stack is empty             |


🧰 You Can Implement a Stack Using:
Arrays (most common in JavaScript)
Linked Lists (more advanced use cases)

✅ Built-in Stack-Like Behavior in JavaScript:
const stack = []
stack.push(10)   // Add 10
stack.push(20)   // Add 20
console.log(stack.pop()) // Removes 20

Time & Space Complexity:
| Operation | Time Complexity |
| --------- | --------------- |
| push      | O(1)            |
| pop       | O(1)            |
| peek      | O(1)            |
| isEmpty   | O(1)            |

Space complexity is O(n) for storing n elements.
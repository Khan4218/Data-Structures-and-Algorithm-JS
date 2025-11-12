What is a Set?

A Set is a data structure that stores unique values only — no duplicates allowed.
It’s like a special type of hashmap where only keys exist (no key–value pairs).

Example in JavaScript
const numbers = new Set([1, 2, 3, 3, 2]);
console.log(numbers); // Set(3) {1, 2, 3}


Duplicate 3 and 2 are removed automatically.

The set now contains only unique values.

Common Operations
| Operation       | Example                    | Description                |
| --------------- | -------------------------- | -------------------------- |
| Add             | `numbers.add(4)`           | Adds a value               |
| Delete          | `numbers.delete(2)`        | Removes a value            |
| Check if exists | `numbers.has(3)`           | Returns true/false         |
| Size            | `numbers.size`             | Returns number of elements |
| Clear           | `numbers.clear()`          | Removes all elements       |
| Loop            | `for (let num of numbers)` | Iterates through elements  |

Sets are great for:

Removing duplicates from arrays

const arr = [1, 1, 2, 3, 3];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3]


Checking existence quickly (like checking membership in O(1))

Performing set operations (union, intersection, difference)

Set vs Hashmap (Summary)
| Feature        | Hashmap                  | Set                               |
| -------------- | ------------------------ | --------------------------------- |
| Stores         | key–value pairs          | unique values only                |
| Duplicate keys | Not allowed              | Not allowed                       |
| Access pattern | `map[key]`               | No direct access — only iteration |
| Use case       | Frequency count, mapping | Uniqueness, quick lookup          |
s

In short:

Use Hashmap when you need to map one thing to another (like letter → count)

Use Set when you only care if something exists or not.
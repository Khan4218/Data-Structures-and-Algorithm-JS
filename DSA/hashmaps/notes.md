What is a Hashmap (or Object / Map in JS)?

A Hashmap is a data structure used to store key-value pairs.
It’s super fast — you can access, insert, or delete elements in O(1) average time.

Example (JS object as hashmap)
const user = {
  name: "Akbar",
  age: 21,
  city: "Hyderabad"
};

console.log(user["name"]); // Akbar

Here:

"name", "age", and "city" are keys.

"Akbar", 21, "Hyderabad" are values.

Why it’s called a “Hashmap”

Internally, every key is converted into a hash (a number).

That hash decides where in memory the value is stored.

This makes lookup extremely fast.

Common JS operations:
| Operation        | Example                 | Description           |
| ---------------- | ----------------------- | --------------------- |
| Add / Update     | `user["age"] = 22`      | Adds or updates a key |
| Access           | `user["name"]`          | Returns the value     |
| Delete           | `delete user["city"]`   | Removes the key       |
| Check key exists | `"name" in user`        | Returns true/false    |
| Loop             | `for (let key in user)` | Loops over keys       |

When to use

Use Hashmaps when you need:

To count frequencies (e.g., how many times a char appears).

To map one value to another (e.g., student → grade).

To check existence quickly (like a “dictionary”).
What is a Map?

A Map in JavaScript is a built-in object used to store key–value pairs, similar to normal objects {}, but with some advantages:

Keys can be any type (objects, arrays, numbers, strings, etc).

It remembers insertion order.

It has helpful built-in methods like .set(), .get(), .has(), .delete(), .size, .clear().

Creating a Map
const map = new Map()

1. set(key, value)

Used to add or update a key-value pair.

map.set("name", "Akbar")
map.set("age", 21)
console.log(map) // Map(2) {'name' => 'Akbar', 'age' => 21}


If the key already exists, .set() updates its value:

map.set("age", 22) // updates 'age' to 22

2. get(key)

Used to retrieve the value for a given key.

console.log(map.get("name")) // 'Akbar'
console.log(map.get("age"))  // 22


If key doesn’t exist, it returns undefined.

3. has(key)

Checks if a key exists in the Map.

console.log(map.has("name")) // true
console.log(map.has("city")) // false

4. delete(key)

Removes a key-value pair.

map.delete("age")
console.log(map) // Map(1) {'name' => 'Akbar'}

5. size

Gives total number of entries in the Map.

console.log(map.size) // 1

6. clear()

Removes all entries from the Map.

map.clear()
console.log(map.size) // 0

7. Looping through a Map

You can loop over keys, values, or both:

const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3]
])

for (let [key, value] of map) {
  console.log(key, value)
}
// Output:
// a 1
// b 2
// c 3

Map vs Object Summary
Feature	Map	Object
Key types	Any type	Strings or Symbols only
Order	Maintains insertion order	No guaranteed order
Size	map.size	Must count manually
Iteration	Easy with for...of	Needs Object.keys()
Use case	Dynamic keys / fast lookups	Simple static data
⚡ Summary: HashMaps & Sets

HashMap (Map in JS):

Stores key–value pairs.

Keys can be any type (string, number, object, etc).

Very fast lookups — O(1) average time.

Common Methods:

set(key, value) → Add or update a key

get(key) → Get the value for a key

has(key) → Check if key exists

delete(key) → Remove key

clear() → Remove all

size → Returns number of pairs

Example:

const map = new Map();
map.set("a", 1);
map.set("b", 2);
console.log(map.get("a")); // 1


Set:

Stores unique values (no duplicates).

Also O(1) average lookup time.

Common Methods:

add(value) → Add a value

has(value) → Check if value exists

delete(value) → Remove value

clear() → Remove all

size → Number of elements

Example:

const set = new Set([1, 2, 2, 3]);
console.log(set); // Set {1, 2, 3}


You solved challenges like:

Non-repeating char

Contains duplicates

Count elements

Remove duplicates

Intersection of arrays

First repeated char

Most frequent element
🧩 Strings — Core Concepts

A string is just an array of characters.
Example:
const str = "hello"
Here:

str[0] = 'h'

str[1] = 'e'

str.length = 5

You can loop through it like an array:

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

1. String Immutability (Important)

In JavaScript, strings cannot be modified directly.
That means:

let str = "hello";
str[0] = "y"; // ❌ doesn’t work
console.log(str); // still "hello"


To “modify” a string, you create a new one:

str = "y" + str.slice(1);
console.log(str); // "yello"


So remember:

Arrays → mutable

Strings → immutable

2. Common Operations

| Operation             | Example                              | Output            |
| --------------------- | ------------------------------------ | ----------------- |
| Access character      | `"abc"[1]`                           | `'b'`             |
| Length                | `"abc".length`                       | `3`               |
| Slice                 | `"abcdef".slice(1, 4)`               | `"bcd"`           |
| Substring             | `"abcdef".substring(1, 4)`           | `"bcd"`           |
| Split                 | `"a,b,c".split(",")`                 | `['a', 'b', 'c']` |
| Join                  | `['a','b','c'].join('')`             | `"abc"`           |
| Reverse (using array) | `"abc".split('').reverse().join('')` | `"cba"`           |



3. Case Conversion
"hello".toUpperCase(); // "HELLO"
"HELLO".toLowerCase(); // "hello"

4. Comparison

Strings are compared lexicographically (like dictionary order):

"apple" < "banana"; // true
"abc" > "ab"; // true

5. Traversal Example
const str = "abcde";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}


Output:

a
b
c
d
e

6. String Algorithms We’ll





1. String Reversal

Goal: Reverse a given string.

Example:
Input → "hello"
Output → "olleh"

Approach 1: Using Built-in Methods (Easy way)
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // "olleh"


Step-by-step:

str.split('') → converts string to array → ['h','e','l','l','o']

.reverse() → reverses array → ['o','l','l','e','h']

.join('') → joins array back to string → "olleh"

Approach 2: Using a Loop (Manual — interview-friendly)
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello")); // "olleh"


This shows you understand how indexes move from right → left.

2. Palindrome Check

A palindrome is a string that reads the same forward and backward.

Examples:

"madam" → palindrome

"racecar" → palindrome

"hello" → not palindrome

Approach 1: Compare with reversed string
function isPalindrome(str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

Approach 2: Two-Pointer (more efficient)
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false


Explanation:

Start pointers at both ends.

Move inward.

If any mismatch occurs → not a palindrome.

Else → palindrome confirmed.

Why This Matters

You’ll use two-pointer palindrome logic later for:

Valid Palindrome II (Leetcode 680)

Longest Palindromic Substring

String cleanup (ignore spaces, punctuation, etc.)



Answer carefully — each tests real interview concepts.

1. What does str.split('').reverse().join('') do?
A) Sorts the string alphabetically
B) Reverses the string
C) Removes spaces from the string
D) Converts the string to uppercase

1. B reverses the string str.split splits each character and make an array.reverse reverse it .join then join the string removing aaray

2. In the manual reversal method:

let reversed = '';
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

What is the initial value of i if the input is "abc"?
A) 0
B) 1
C) 2
D) 3

2. C 2 beacuse str.length is 3 and - 1 = 2

3. For palindrome check, what condition tells us the string is not a palindrome in the two-pointer approach?
A) str[left] === str[right]
B) str[left] !== str[right]
C) left === right
D) right < left

3.B if str[0] !== str[str.length - 1] we get it is palindrome or not 

4. What will the following code output?

console.log(isPalindrome("Racecar"));


A) true
B) false
C) undefined
D) Error

4. A i am not sure if it compares the uppercase also if it is taht case then it is false

(Assume function isPalindrome compares exactly, case-sensitive)

5. What is the time complexity of the two-pointer palindrome solution?
A) O(1)
B) O(n)
C) O(n²)
D) O(log n)

5. O(n) we are using while loop time increases with input size 

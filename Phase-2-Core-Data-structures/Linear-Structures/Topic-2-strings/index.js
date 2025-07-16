// Here’s your String Challenge Set 1: Basics & Traversal

// 🧩 String Challenges – Set 1
// ✂️ Challenge 1: First Character
// Write a function getFirstChar(str) that returns the first character of the string.
function getFirstChar(str) {
  return str[0]
}

console.log(getFirstChar("Khan"));


// 🧮 Challenge 2: String Length
// Write a function getLength(str) that returns the number of characters in the string.
function getLength(str) {
  return str.length
}
console.log(getLength("AkbarKhan"));
//time complexity O(1)
//space complexity O(1)


// 🔁 Challenge 3: Print All Characters
// Write a function printChars(str) that prints each character on a new line.
function printChar(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }


}
printChar("Akbar")
//O(n) time
//O(1) constant

// ⬅️ Challenge 4: Reverse String (manual)
// Write a function reverseString(str) that returns the string reversed, without using .reverse().
function reverseString(str) {
  let reversed = ""
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]

  }

  return reversed
}

console.log(reverseString("Akbar"));
//time comp O(n) one operatation per char
//space comp O(n) storing in variable and modifying for each char  

// 🛑 No built-in helpers like .split(), .reverse(), .join() — do it manually using a loop.


// 🧩 String Challenge Set 2: Logic-Based
// 🔍 Challenge 1: Count Vowels
// Write a function countVowels(str) that returns the number of vowels (a, e, i, o, u) in the string.

function countVowels(str) {
  let count = 0
  const vowels = "aeiouAEIOU"
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++
    }

  }
  return count
}

console.log(countVowels("aeiou"));
console.log(countVowels("aeiouAkbarKhan"));
//time complex O(n)
//space complex O(1)


// 🔁 Challenge 2: Is Palindrome
// Write a function isPalindrome(str) that returns true if the string is a palindrome (same forward and backward), else false.
// No built-in .reverse() allowed.
function isPalindrome(str) {
  let len = str.length
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false
    }
  }

  return true
}

console.log(isPalindrome("level"));
//time complexity O(n)
//space complexity O(1)


// 💥 Challenge 3: Remove Spaces
// Write a function removeSpaces(str) that returns a string with all spaces removed.
function removeSpaces(str) {
  let name = ""
  for (let i = 0; i < str.length; i++) {

    if (str[i] !== " ") {
      name += str[i]
    }
  }
  return name
}
console.log(removeSpaces("Akbar Ali Khan"));
//time complexity O(n) looping through each char
//space completity O(n) changeing the str

// 🔢 Challenge 4: Count Letters
// Write a function countLetters(str) that returns the number of alphabet characters only, ignoring spaces, numbers, and symbols.

function countLetters(str) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z" || str[i] >= "a" && str[i] <= "z") {
      count++
    }
  }

  return count
}

console.log(countLetters("Akbar 80 $ #"));
//time complexity O(n) looping through each char
//space complexity O(1) not modifiying the array just checking 


// 🧠 Challenge 5: Capitalize First Letter
// Write a function capitalize(str) that returns the same string, but with the first character capitalized (if it’s a letter).

// ⛔ Rules:
// Don’t use .toUpperCase() or .slice()

// Use character comparison and string building

// Return the original string if it’s empty

function capitalize(str) {
  if (str === "") { return str }
  let result = ""
  let firstChar = str[0]
  if (str[0] >= "a" && str[0] <= "z") {
    let upperChar = String.fromCharCode(str.charCodeAt(0) - 32)
    result = upperChar

    for (let i = 1; i < str.length; i++) {
      result += str[i];
    }
  } else {

    result = str;
  }





  return result


}

console.log(capitalize("akbar"));
//time complexity O(n)
//space complexity O(n)

// 💥 Challenge 6: Remove Digits
// Write a function removeDigits(str) that returns a new string with all digits (0–9) removed.

// ⛔ Rules:
// Don’t use .replace() or regex

// Loop through each character manually

// Keep letters, spaces, symbols — just remove digits

// ✨ Examples:
// removeDigits("abc123") ➞ "abc"
// removeDigits("A1k2b3a4r!") ➞ "Akbar!"
// removeDigits("987654") ➞ ""

function removeDigits(str) {
  let result = ""
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] >= "0" && str[i] <= "9")) {
      result += str[i]
    }

  }
  return result
}

console.log(removeDigits("abc123"));
//time complexity O(n)
//space complexity O(n)


// ✂️ Challenge 7: Remove Vowels
// Write a function removeVowels(str) that returns a new string with all vowels (a, e, i, o, u) removed — both lowercase and uppercase.

// ⛔ Rules:
// No .replace() or regex
// Use a simple loop and build the result manually
// Use basic character comparison

// removeVowels("Akbar") ➞ "kbr"
// removeVowels("AEIOUaeiou") ➞ ""
// removeVowels("hello world") ➞ "hll wrld"

function removeVowels(str) {
  let withoutVowels = ""
  let vowels = "AEIOUaeiou"
  for (let i = 0; i < str.length; i++) {
    if (!(vowels.includes(str[i]))) {
      withoutVowels += str[i]

    }
  }

  return withoutVowels
}

console.log(removeVowels("Akbar"));
console.log(removeVowels("AEIOUaeiou"));
console.log(removeVowels("hello world"));
//time complexity O(n) looping through each char
//space complexity O(n) changing or modifying the array



// Challenge:
// **********

// A stream of dinosaurs of various ages show up for an event. Some of them have a unique age, while others have ages with frequencies greater than 1, i.e. there are others with the same age. Find the age of the earliest or first dinosaur who shows up and has a unique age. If there weren't any dinosaurs with a unique age, return the string "No unique age was found.". Let's use a queue to remember the order of the dinosaurs in the stream of event attendees.


// Examples:
// **********

// Example 1:
// ```
// ages = 12, 14, 12, 12, 16, 15, 16, 17, 16, 12
// result = 14
// ```

// Example 2:
// ```
// ages = 14, 16, 16, 14, 17, 18, 19
// result = 17
// ```

// Example 3:
// ```
// ages = 14, 16, 14, 14, 16, 14, 14
// result = "No unique age was found."
// ```


// Task:
// *****

// Implement the function `findFirstUniqueDinosaurAge()` that takes an array representing the stream of dinosaurs, 
// and returns the first unique age or the string "No unique age was found.".
// 1. Write the algorithm.
// 2. Implement it.
// 3. Run the tests to make sure it works as expected.
// 4. Analyze its time and space complexity.

// 1. As emphasized in the challenge statement, use a queue to remember the order of dinosaurs as they arrived.
// 2. Use a map to keep track of the frequency of each age.
// 3. A unique age is one that only appears once in the stream of ages, i.e. has a frequency of 1.
// 4. Initialize an empty queue, and an empty map.
// 5. Process the stream of ages one age at a time, adding it to the queue, and updating its frequency in the map.
// 6. After you process the stream, use the queue, taking out one age at a time, and checking if it has a frequency of 1.
// 7. Return the first age you encounter in the queue that is unique.
// 8. If after going over the entire queue, you cannot find a unique age, return the string "No unique age was found.".
// Constraints:
// ************

// 1. ages.length > 0


// Notes:
// ******

// 1. Use the Queue class provided. 
// 2. Check out `hints.md` if needed.

import { Queue } from "../index.js";

function findFirstUniqueDinosaurAge(ages) {
   let map = new Map()
   const queue = new Queue()

   for(let age of ages) {

    queue.enqueue(age)

      if(map.has(age)) {
         map.set(age, map.get(age) + 1)
      }else{
         map.set(age , 1)
      }

   }

   while (!queue.isEmpty()) {
      const age = queue.dequeue()
      if (map.get(age) === 1) {
         return age
      }
      
   }

   return "No unique age was found."
    
}

console.log(findFirstUniqueDinosaurAge([12, 14, 12, 12, 16, 15, 16, 17, 16, 12]));

//time complexity : O(n)
//space complexity : O(n)

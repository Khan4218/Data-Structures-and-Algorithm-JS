// for (let i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 100);
// }


// Task 1 – Closure Counter with Reset

// Write a closure that:

// increments a private count,

// returns the current count,

// and resets the count to 0 when a method reset() is called.


// function createCounter() {
//     let count = 0
//     return{
//         next() {
//             count++
//             console.log(count);
            
//         },

//         reset() {
//             count = 0
//             console.log(count);
            

//         }
//     }

// }

// // Example use:

// const counter = createCounter();
// counter.next();   // 1
// counter.next();   // 2
// counter.reset();  // 0
// counter.next();   // 1



// We’ll write a debounce function using closures.
// Debouncing means:

// “If a function is called repeatedly, only run it after a certain period of no new calls.”

// Example use case:
// Typing in a search box should trigger the API only after the user stops typing for, say, 500ms.

// Starter Code:
function debounce(func, delay) {
  
    let timer = 0;

    return function () {
        clearTimeout(timer)
       timer =  setTimeout(() => {
         func()

        }, delay)
    }
    
}

function logMessage() {
  console.log("API call triggered!");
}

const debouncedLog = debounce(logMessage, 1000);

// simulate user typing
debouncedLog();
debouncedLog();
debouncedLog();
// // only ONE "API call triggered!" should appear after 1 second

// Your Task

// Complete the debounce function using what you know about closures.

// Hint:

// Use a variable (like timer) inside debounce.

// Each time debouncedLog() runs, clear the old timeout and set a new one.

// timer must be remembered between calls → closure.
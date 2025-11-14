What is Recursion?

Recursion is when a function calls itself to solve a problem.

Instead of solving the whole problem at once, it solves a smaller piece and relies on itself to handle the rest.

Every recursive function has two main parts:

Base Case – stops the recursion (prevents infinite calls).

Recursive Case – the function calls itself with a smaller or simpler input.

Example 1: Factorial
function factorial(n) {
    if (n === 0) return 1; // base case
    return n * factorial(n - 1); // recursive case
}

console.log(factorial(5)); // Output: 120


Explanation:

factorial(5) calls factorial(4)

factorial(4) calls factorial(3)

… until factorial(0) returns 1

Then each call returns and multiplies back up the stack

Example 2: Printing Numbers in Reverse
function printReverse(n) {
    if (n === 0) return;   // base case
    console.log(n);
    printReverse(n - 1);   // recursive call
}

printReverse(5);


Output:

5
4
3
2
1

Key Concepts

Call Stack: Every recursive call is stored in memory until it reaches the base case.

Base Case: Must exist, otherwise recursion runs infinitely and causes a stack overflow.

Recursive Step: Must progress towards the base case.
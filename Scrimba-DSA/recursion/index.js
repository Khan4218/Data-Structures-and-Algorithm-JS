/*
Algorithm: Factorial
Input: a number, n
Output: the factorial of n, n!

Steps:
1. If n is 0:
2.   return 1
3. Return n * factorial(n - 1)
*/

/*
Challenge:
**********

Implement the factorial algorithm above.
*/

function factorial(n) {
  if (n === 0 ) {
    return 1
  }
  return n * factorial(n - 1)
}

console.log(factorial(0))
console.log(factorial(4))
console.log(factorial(10))
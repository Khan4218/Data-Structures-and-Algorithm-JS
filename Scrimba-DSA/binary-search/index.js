/*
Algorithm: Binary Search
Input: array of sorted numbers, and target
Output: index of target in array, or -1 if not found

Steps:
1. Init l to 0.
2. Init r to point to the last element in the array.
3. Loop as long as l did not pass r:
4.   Init m to be the middle point between l and r.
5.   If the value at m is the target:
6.     Return m.
7.   Else if the value at m is less than the target:
8.     Move l to right after m.
9.   Else:
10.    Move r to right before m.
11. Return -1.
*/

function binarySearch(number, target) {
   let leftPointer = 0
   let rightPointer = number.length - 1

   while(leftPointer <= rightPointer) {
      let midIndex = Math.floor((leftPointer + rightPointer) / 2 )
      let midValue = number[midIndex]
      if(midValue === target) {
       return midIndex
      }else if(midValue < target) {
         leftPointer = midIndex + 1
      }else{
         rightPointer = midIndex - 1
      }
      
    }

    return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8));


/*
Challenge:
***********

Implement the binary search algorithm. Call the function binarySearch() and make sure to export it. When done, run the tests in the terminal with ’npm test’ to make sure it works.

Note: If needed, see hint.md for the formula.
*/



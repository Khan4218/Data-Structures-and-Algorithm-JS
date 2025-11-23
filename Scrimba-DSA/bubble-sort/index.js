/*
Algorithm: Bubble Sort
Input: array of numbers
Output: the array with the numbers sorted in place and in ascending order

Steps:
1. Iterate n - 1 times:
2.   Iterate from the start of the array to the end of the unsorted numbers:
3.     If the current number is greater than the one after it:
4.       Swap the numbers. Bubble the greater number up.
*/

function bubbleSort(numbers) {
 for (let i = 0; i < numbers.length - 1; i++) {
    for(let j = 0; j < numbers.length - i - 1; j++) {
       if(numbers[j] > numbers[j + 1]) {
         const temp = numbers[j]
         numbers[j] = numbers[j + 1]
         numbers[j + 1] = temp
         
       }
       
    }
 }
 return numbers
}



console.log(bubbleSort([5,3,4,2,1]));

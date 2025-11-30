/*
Algorithm: Merge Sort
Input: array of numbers
Output: a new array with the numbers sorted in ascending order

Steps:
1. If there is one or no number in the array:
2.   Return the array. It's already sorted.
3. Find the index of the mid point in the array.
4. Get a copy of the left half of the array.
5. Get a copy of the right half of the array.
6. Sort the left half.
7. Sort the right half.
8. Merge the two sorted halves and return the result.
*/

/*
Challenge:
***********

Implement the first algorithm in JavaScript. 


Notes:
******

1. Use recursion.
2. You may find `Math.floor()` and the array `slice()` methods useful.
*/

/*
Algorithm: Merge Two Sorted Arrays
Input: two sorted arrays of numbers, left and right
Output: a new array of the two arrays merged

Steps:
1. Init an empty result array.
2. Init a pointer for the left half.
3. Init a pointer for the right half.
4. Loop over both arrays until we reached the end of one of them:
5.   If the current number in the left half is less than the current number in the right half:
6.     Add it to the result.
7.     Increase the left pointer.
8.   Else:
9.     Add the current number from the right half to the result.
10.    Increase the right pointer.
11. After the loop is over, add whatever is left in either halves to the result.
12. Return the result array.
*/

function mergeSort(numbers) {
  if(numbers.length === 0 || numbers.length === 1 ) return numbers
  let mid = Math.floor(numbers.length / 2)
  let leftHalf = numbers.slice(0, mid)
  let rightHalf = numbers.slice(mid)
  let leftSorted = mergeSort(leftHalf)
  let righsorted = mergeSort(rightHalf)
  return merge(leftSorted, righsorted)
}

function merge(left, right) {

    let result = []
    let i = 0  //left pointer
    let j = 0  //right pointer
    
    while(i < left.length && j < right.length) {
      if(left[i] < right[j]){
        result.push(left[i])
        i++
      }else{
        result.push(right[j])
        j++
      }
    }

    while(i < left.length){
      result.push(left[i])
      i++
    }

    while (j < right.length) {
        result.push(right[j])
        j++
    }

    return result
   
}



console.log(mergeSort([6,3,4,2,5,1]));

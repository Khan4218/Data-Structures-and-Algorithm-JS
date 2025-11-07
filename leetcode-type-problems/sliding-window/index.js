// Problem: Minimum Size Subarray Sum (LeetCode #209 type)

// Question:
// Given an array of positive integers nums and an integer target, return the minimal length of a contiguous subarray of which the sum is greater than or equal to target.
// If there is no such subarray, return 0.

// Example 1:
// Input: nums = [2,3,1,2,4,3], target = 7
// Output: 2
// Explanation: The subarray [4,3] has the smallest length 2.

// function slidingWindow(nums, target) {
//    let left = 0; //initial left is 0 if sum is greater than target it will increase it is directly proportional to condition used in while
//    let sum = 0; //initial 0 we store the array values of right and decrease the sum when we want to shrink it doing sum -= nums[left] 
//    let minLength = Infinity; // initial it is infinity if the condition is true we will store minlength here of window

//    for(let right = 0; right < nums.length; right++) {  // right initial is 0 loops till array.length 
//     sum += nums[right] // 2 | 5 | 6 | 8 | 12 | 15 store in sum for each iteration like 1st iteration sum = 2 and so on 
    
//     while( sum >= target ) {  // main point is checing if sum is greater or equal to target given if it is 
//      const windowLength = right - left + 1  // window length would be 1st iteration 0 - 0 + 1 = 1 | 
//      minLength = Math.min(minLength, windowLength) //storing min length 
//      sum -= nums[left] // if  sum is greater than target we are shrinking by removing nums[left] from sum so that sum becones < target
//      left ++     // increasing left if sum is greater than target
     
//     }
    
    
   
//    }

//    return minLength === Infinity ? 0  : minLength
   
// }

// console.log(slidingWindow([2,3,1,2,4,3], 7));


// Example 2:
// Input: nums = [1,4,4], target = 4
// Output: 1

// Example 3:
// Input: nums = [1,1,1,1,1,1,1,1], target = 11
// Output: 0

// Expected complexity:

// Time: O(n)

// Space: O(1)

// When you’re ready:

// Write your solution in JavaScript.

// Add logs or comments if needed to trace your reasoning.

// Paste it here, and I’ll review line-by-line to confirm your mastery of sliding window.


// | Step | Left | Right | Current Window | Sum | minLength | Action                    |
// | ---- | ---- | ----- | -------------- | --- | --------- | ------------------------- |
// | 1    | 0    | 0     | [2]            | 2   | ∞         | Sum < target → move right |
// | 2    | 0    | 1     | [2,3]          | 5   | ∞         | Sum < target → move right |
// | 3    | 0    | 2     | [2,3,1]        | 6   | ∞         | Sum < target → move right |
// | 4    | 0    | 3     | [2,3,1,2]      | 8   | 4         | Shrink (sum>=7)           |
// | 5    | 1    | 3     | [3,1,2]        | 6   | 4         | Stop shrinking            |
// | 6    | 1    | 4     | [3,1,2,4]      | 10  | 4→4       | Shrink again              |
// | 7    | 2    | 4     | [1,2,4]        | 7   | 3         | Shrink again              |
// | 8    | 3    | 4     | [2,4]          | 6   | 3         | Stop shrinking            |
// | 9    | 3    | 5     | [2,4,3]        | 9   | 3→3→2     | Shrink → [4,3] length 2 ✅ |



// function longestSubarray(nums, k) {
//   let left = 0; 
//   let sum = 0;
//   let maxLen = 0;

//   for (let right = 0; right < nums.length; right++) {  //right = 0; sum = 1 ; left = 0 ; maxlen = 1
//     sum += nums[right];

//     while (sum > k) {
//       sum -= nums[left];
//       left++;
//     }

//     maxLen = Math.max(maxLen, right - left + 1);
//   }

//   return maxLen;
// }

// console.log(longestSubarray([1, 2, 1, 0, 1, 1, 0], 4));

/*
first iteration 
right = 0
left = 0 
sum = 0 + 1 = // 1 
window = [0..0] = // [1]
maxlen = 0, 0 - 0 + 1 = // 1, 1

second iteration 

right = 1 
sum = 1 + 2 = // 3 
left = 0 
window = [1,2]
maxlen = 0, 1 - 0 + 1 = // 2, 2

third iteration 
right = 2 
sum = 3 + 1 // 4 no while loop   
left = 0 
window = [0...2] = //[1,2,1]
maxlen = 2 , 2 - 0 + 1  = // 3, 3 

fourth iteration 
right = 3
sum = 4 + 0 = // 4 no while loop 
left = 0 
window = [1,2,1,0]
maxlen = 3, 3 - 0 + 1 =  // 4, 4 

5th iteration 
right = 4
sum = 4 + 1 = // 5 
sum > k 
left = 1
so while loop 
sum = 5 - 1 = // 4 
window = [1..4] = [2,1,0,1]
loop runs again checks if 4 > K flase return 
maxlen = 4, 4 - 1 + 1 = // 4, 4

6th iteration
rigth = 5 
sum = 4 + 1 = // 5 gretaer than target while loop runs 
sum = 5 - 2 = // 3 
left = 2 // while loop runs again as 3 > 4 stops
window = [2..5] = // [1,0,1,1] 
maxlen = 4, 5 - 2 + 1 = // 4, 4

7th iteration 
right = 6 
sum = 3 + 0 = 3
left = 2
window = [2..6] = //[1,0,1,1,0]
maxleng = 4, 6 - 2 + 1 = // 5, 5
*/

// Here’s your task (LeetCode #3):

// Problem:
// Given a string s, find the length of the longest substring without repeating characters.

// Example:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", which has length 3.

function uniqueSubstring(str) {
 let left = 0
 let set =  new Set()
 
 let maxlength = 0
  
 for(let right = 0 ; right < str.length ; right ++) {

   
   
   while(set.has(str[right])) {
    
    set.delete(str[left])
    left++

  }
  set.add(str[right])

  maxlength = Math.max(maxlength, right - left + 1)
  }
  
  return maxlength
}

console.log(uniqueSubstring("abcabcbb"));


//first we are taking two pointers left and right and we keep right moving forward 
//we use set here to store a character as we are not working with numbers 
//we will keep the left pointer at begining and move our right pointer forward 
// we keep on adding str[right] to our set variable untill
//the same character is found when it is found the while loop runs 
//we move the left pointer forward = "bcabcbb"
//and increase the left so now left pointer will be on b which is str[left]
//we need to know the max length so we do Math.max(maxlength, right - left + 1 )
//finally output we get will be 3 


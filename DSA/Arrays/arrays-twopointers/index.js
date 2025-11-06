// When to use it (common signals)
// • Array or string problems that ask for pairs, subarrays, or windows.
// • Sorted arrays (look for pairs with target sum).
// • Problems mentioning "find pair", "remove duplicates", "reverse", "palindrome", "max subarray of size k", "subarray with sum ≤ k", etc.
// • When you can shrink/expand a window using indices without re-scanning from start.

// let nums = [1,2,3,4,5]
// const target = 8
// let left = 0
// let right = nums.length - 1;


// while (left < right) {
//   const sum = nums[left] + nums[right] 

//   if(sum === target) {
//     console.log(`found the pair of ${nums[left]} + ${nums[right]} = ${sum}`);
//     break;
//   }else if(sum < target) {
//     left ++
//   }else{
//     right --
//   }
   
//   // examine nums[left] and nums[right]
//   // move left++ or right-- based on condition
// }

// console.log(left,right);



// Use when array is sorted or you want pairs from ends.

// Example: two-sum in sorted array (find two numbers sum to target)
// Logic: if nums[left] + nums[right] === target → found;
// if sum < target → left++ (need bigger);
// if sum > target → right-- (need smaller).


// Fast–Slow (or slow–fast) — used for removing duplicates, cyclic detection, partitioning
// Template:

// const nums = [1,2,2,3,4,5,6,6]

// let slow = 1;

// for(let fast = 1; fast < nums.length; fast++) {

//   // console.log(nums[fast], nums[fast -1]);
  

//   if(nums[fast] !== nums[fast - 1]) { //2 !== 1 | 2 !== 2 | 3 ! == 2 | 4 !== 3 | 5 !== 4 | 6 !== 5 | 6 !== 6
//     nums[slow] = nums[fast]
//     // console.log(nums[slow]);
    
//    slow ++ //slow is intial 1 and if the conition is true slow gets incremnet like 2nd iteration slow will incremnet to 2 and so on 
    
//   }
// }

// console.log(nums.slice(0,slow));

// Visual Diagram (fast–slow movement)
// Initial:  [1, 2, 2, 3, 4, 5, 6, 6]
//            S  F
// Step 1:   [1, 2, 2, 3, 4, 5, 6, 6]
//               S  F
// Step 2:   (duplicate, fast moves)
//               S     F
// Step 3:   [1, 2, 3, 3, 4, 5, 6, 6]
//                  S     F
// Step 4:   [1, 2, 3, 4, 4, 5, 6, 6]
//                     S     F
// Step 5:   [1, 2, 3, 4, 5, 5, 6, 6]
//                        S     F
// Step 6:   [1, 2, 3, 4, 5, 6, 6, 6]
//                           S     F
// Step 7:   (duplicate, skip)
//                           S        F


// length or index depending on problem

// 1. The Core Idea:

// You have two pointers moving through an array — fast and slow.

// fast: scans or explores the array (it moves ahead, looking for elements you want to “keep”).

// slow: lags behind and keeps track of the position where the next valid element should go.

// So basically:

// The fast pointer reads,
// The slow pointer writes.

// Use when you need to compact/de-duplicate or partition an array in-place.

// Example: remove duplicates from sorted array — keep unique elements at front.

// Complexity: O(n) time, O(1) space.


// (b) Move zeroes to end:

// const nums = [0,1,0,3,12];
// let slow = 0;

// for(let fast = 0; fast < nums.length; fast++) {

//    if(nums[fast] !== 0) {
    
//     nums[slow] = nums[fast]

//     slow++
    
      
//    }
// }

// while(slow < nums.length) nums[slow++] = 0;

// console.log(nums);


// (c) Remove element (e.g. remove 3s):

// const nums = [1,3,2,3,4];
// let slow = 0;

// for(let fast = 0; fast < nums.length; fast++) {
//   if (nums[fast] !== 3) {
//     nums[slow] = nums[fast]
//     slow++
//   }
  
// }

// console.log(nums.slice(0, slow));


// Sliding Window (variable window using two pointers) — for subarray/sum/substring problems
// Template (for positive numbers / counts):

// let left = 0, sum = 0;
// for (let right = 0; right < nums.length; right++) {
//   sum += nums[right];
//   while (sum > target) {
//     sum -= nums[left];
//     left++;
//   }
  // now [left..right] is valid window (if sum <= target etc.)
  // do something with window size or count
// }

// Use for "smallest subarray with sum ≥ S", "longest subarray with sum ≤ S", "number of subarrays with sum K (if more advanced)".

// Complexity: O(n) time (each element enters and leaves window at most once), O(1) space.

// Goal: find the length of the smallest contiguous subarray whose sum ≥ target.
// Expected answer for this example: 2 (subarray [4,3] or [3,4] depending on indices).


// function minSubArrayLen(nums, target) {
//   let left = 0;
//   let sum = 0;
//   let minLen = Infinity;

//   for (let right = 0; right < nums.length; right++) {
//     sum += nums[right];
//     console.log(`right=${right} added=${nums[right]} sum=${sum} (window=[${left}..${right}])`);

//     // shrink from left while window sum >= target
//     while (sum >= target) { 
//       const windowLen = right - left + 1;
//       minLen = Math.min(minLen, windowLen);
//       console.log(`  sum >= ${target}. Update minLen=${minLen}. Now shrink: remove nums[left]=${nums[left]}`);
//       sum -= nums[left];
//       left++;
//       console.log(`  after shrink -> left=${left} sum=${sum} (window=[${left}..${right}])`);
//     }
//   }

//   return minLen === Infinity ? 0 : minLen;
// }

// // run example
// console.log("result:", minSubArrayLen([2,3,1,2,4,3], 7));


//exlpanation in own words 

//logic we take two sliders left and right and a sum 
// we then add nums[right] to the sum and see if sum is greater then target 
//if we found that the sum is greater than target we start to shrink from left and increase the left


// Sliding Window Quiz (7 Questions)
// 1.

// If you have two pointers left and right both moving from start to end at most once, what is the time complexity of a sliding window algorithm?
// they are moving at same time so time complexity is O(1)

// 2.

// In a sliding window problem, what is the main reason for moving the left pointer forward?

// A) To expand the window
// B) To shrink the window when condition fails
// C) To reset the array
// D) To skip even numbers
// B because when the condition does not statify we shrink the window

// 3.

// For “smallest subarray with sum ≥ target”, what condition triggers the left++ movement?

// A) When sum < target
// B) When sum >= target
// C) When sum == target
// D) When all elements are positive

//when sum >=  target we increase the left initial if it is 0 then i will be 1 after 1 iteration and so on 

// 4.

// True or False:
// Sliding Window only works for sorted arrays.

// false sliding window works for unsorted arrays too like we did in example it was unsorted arary

// 5.

// When the window expands (right++), what usually happens to sum (or count or length) in problems like subarray sum?

// A) It decreases
// B) It increases
// C) It resets to 0
// D) It becomes constant
// B it increses the sum gets increase when we set it to nums[right] for each iteration right is increases with previous of sum i.e sum = sum + nums[right]



// 6.

// In a sliding window algorithm, what is the space complexity if you only use left, right, and sum variables?

// A) O(n)
// B) O(log n)
// C) O(1)
// D) O(n²)

// c O(1) because we are not using an new array to store a value we are just changing the oroginal aaray

// 7. (Code reasoning)

// Consider this code:

// let nums = [2,3,1,2,4,3];
// let target = 7;
// let sum = 0, left = 0, minLen = Infinity;

// for (let right = 0; right < nums.length; right++) {
//   sum += nums[right];
//   while (sum >= target) {
//     minLen = Math.min(minLen, right - left + 1);
//     sum -= nums[left];
//     left++;
//   }
// }
// console.log(minLen);


// What value will console.log(minLen) print?

// A) 2
// B) 3
// C) 4
// D) Infinity

// 4 beacause left becomes 1 if condition is true and right is 4 at that point so 4 - 1 + 1 = 4
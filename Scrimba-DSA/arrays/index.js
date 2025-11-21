// const nums = [1, 2, 3]

// console.log(nums[0])

// console.log(nums.length)

// nums.push(4)

// const lastItem = nums.pop()

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i])
// }

// for (const num of nums) {
//   console.log(num)
// }
// Let's help the Dinosaur Data Management System answer the question: what is the age range of a population of dinosaurs in an area? So given an array of dinosaur ages, write an algorithm that calculates and returns the age range. 

// ageRange = maximumAge - minimumAge

// For example if you have the ages: 8, 51, 3, 64, 1, 75, 9, 100, then the age range, which is the difference between the maximum age in the array, 100, and the minimum age, 1, is 99.


// Examples:
// **********

// Example 1:
// ages = [8, 51, 3, 64, 1, 75, 9, 100]
// result = 99

// Example 2:
// ages = [8, 2, 5, 12, 3]
// const result = 10


function getAgeRange(ages) {
    let maximumAge = Math.max(...ages)
    let minimumAge = Math.min(...ages)
    let ageRange = 0
    if(ages.length >= 1) {
      ageRange += maximumAge - minimumAge
      return ageRange
    }

    return false

}

console.log(getAgeRange([8, 51, 3, 64, 1, 75, 9, 100]))
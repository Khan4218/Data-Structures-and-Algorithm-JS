function linearSearch(numbers, k) {
  for(let i = 0; i < numbers.length; i++) {
     if(numbers[i] === k) {
       return i
     }
  }

  return -1
}

console.log(linearSearch([3, 5, 1, 7, 8], 7))
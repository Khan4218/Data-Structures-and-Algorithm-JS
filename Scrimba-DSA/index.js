function sumSquares(n) {
    let numSquares = 0
    let sum = 0
 
  for (let i = 1; i <= n; i++) { // O(1)
     numSquares = i * i
     sum += numSquares
 
  }
  return sum

}

console.log(sumSquares(3));

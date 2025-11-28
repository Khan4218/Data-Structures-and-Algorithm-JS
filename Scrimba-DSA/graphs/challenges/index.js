let dinosaurs = [
    "Eddie the Edmon", 
    "Brie the Bellu",
    "Vinnie the Veloci", 
    "Tim the Tyranno", 
    "Lori the Lourin", 
    "Sam the Seismo", 
    "Maddie the Metria", 
    "Cassie the Camara", 
    "Amber the Amarga"
]

let adjacencyList = [
    [1],
    [0, 3],
    [0, 3],
    [1, 2, 4, 5, 6, 7],
    [3],
    [3],
    [3, 8],
    [3, 8],
    [6, 7]
]
// result = "Tim the Tyranno"

// Loop over the adjacency list

// Compare the size of each list

// Track which index has the largest one

// Return the dinosaur at that index
function friendliestDinosaur(dinosaur, adjacencyList) {
    let maxDegree = 0
    let maxIndex = 0
    let i = 0
   for(const arr of adjacencyList) {
     let degree = arr.length
     if(degree > maxDegree) {
        maxDegree = degree
        maxIndex = i
     }
     i++
     
   }
   return dinosaur[maxIndex]
}

console.log(friendliestDinosaur(dinosaurs, adjacencyList));

// Time Complexity: O(V)

// Space Complexity: O(1)

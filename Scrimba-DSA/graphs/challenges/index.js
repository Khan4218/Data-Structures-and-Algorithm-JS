
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


//challenge 2

// Algorithm (Hint Version)

import { stack } from "../../stacks/index.js" 

function areTheyConnected(dinosaurs, adjacencyList) {
    const start = dinosaurs[0];
    const target = dinosaurs[1];

    const notVisited = new stack();
    const visited = new Set();

    notVisited.push(start);
    visited.add(start);

    while (!notVisited.isEmpty()) {
        const current = notVisited.pop();

        if (current === target) {
            return true;
        }

        for (const neighbor of adjacencyList[current]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                notVisited.push(neighbor);
            }
        }
    }

    return false;

}

// Time Complexity:

// Worst-case: O(V + E) — you may need to visit all vertices and edges.

// Space Complexity:

// O(V) — for the visited set and the stack.

console.log(areTheyConnected([0, 4], adjacencyList)); // true
console.log(areTheyConnected([0, 7], adjacencyList)); // false

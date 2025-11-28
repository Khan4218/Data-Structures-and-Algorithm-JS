Challenge:
**********

In a graph representing a portion of the Dinosaur social network, find the friendliest dinosaur. The friendliest dinosaur is the one with the highest degree in the graph. That means it's the dinosaur with the highest number of connections to other dinosaurs.


Examples:
**********

Example 1:
```
dinosaurs = ["Eddie the Edmon", "Brie the Bellu", "Vinnie the Veloci", "Tim the Tyranno", "Lori the Lourin", "Sam the Seismo", "Maddie the Metria", "Cassie the Camara", "Amber the Amarga"]

adjacency list = [
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
result = "Tim the Tyranno"
```

Example 2:
```
dinosaurs = ["Eddie the Edmon", "Brie the Bellu", "Vinnie the Veloci", "Tim the Tyranno", "Lori the Lourin", "Sam the Seismo", "Maddie the Metria", "Cassie the Camara", "Amber the Amarga"]

adjacency list = [
    [1],
    [0, 2],
    [1, 3],
    [2, 4],
    [3, 5, 8],
    [4, 6, 8],
    [5, 7, 8],
    [6, 8],
    [4, 5, 6, 7]
]
result = "Amber the Amarga"
```


Task:
*****

Implement the function `theFriendliestDinosaur()`.
1. Write the algorithm.
2. Implement it.
3. Run the tests using `npm test` to make sure it works as expected.
4. Calculate the time complexity of the algorithm in terms of vertexes, V, and edges, E.


Constraints:
************

1. The graph will never be empty.
2. There will always be one friendliest dinosaur.


Notes:
******

- This is a relatively straightforward challenge. The goals are to practice working with adjacency lists to implement graphs and to express complexity in terms of vertexes and edges.



//challenge 2



Challenge:
**********

In a graph representing a portion of the Dinosaur social network,
 find out if two given dinosaurs are "connected". 
 To be "connected", 
 there needs to be a path from one dinosaur to the other. 
 The path could be longer than 1, i.e. the connection does not need to be direct.


Examples:
**********

Example 1:
```
dinosaurs = [0, 4]

adjacency list = [
    [1, 2],
    [0, 3],
    [0, 3, 4],
    [1, 2],
    [2],
    [6],
    [5, 7],
    [6, 8],
    [7]
]
result = true
```

Example 2:
```
dinosaurs = [0, 7]

adjacency list = [
    [1, 2],
    [0, 3],
    [0, 3, 4],
    [1, 2],
    [2],
    [6],
    [5, 7],
    [6, 8],
    [7]
]
result = false
```


Task:
*****

Implement the function `areTheyConnected()`.
1. Write the algorithm.
2. Implement it.
3. Run the tests using `npm test` to make sure it works as expected.
4. Analyze the time complexity in terms of vertexes, V, and edges, E.


Constraints:
************

1. The graph will contain at least 2 vertexes.
2. The graph may contain cycles.
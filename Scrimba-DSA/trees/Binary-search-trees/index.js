class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

export function insert(root, value) {
    if(root === null) {
     return new Node(value)
    }

   if(root === null){
     const newNode = new Node(value)
     root = newNode
   }else if(value < root.value){
     root.left = insert(root.left, value)
   }else if(value > root.value) {
    root.right = insert(root.right, value)
   }

   return root
}

let root = null


// Build the tree shown in your example
root = insert(root, 6);
root = insert(root, 4);
root = insert(root, 8);
root = insert(root, 3);
root = insert(root, 5);
root = insert(root, 7);
root = insert(root, 9);
root = insert(root, 1);


console.log(JSON.stringify(root, null, 2));

// Challenge:
// **********

// Implement the BST search operation. It will be similar to the insert operation 
// you saw in the previous lesson. The function receives the root of the tree as well as the 
// target value as inputs, and must return true if the target is found in the tree, and false if it’s not.


// Examples:
// **********

// Example 1:
// ```
// root = ------->
//               6
//         4          8
//      3     5    7     9
//  1    

// target = 5 
// result = true
// ```

// Example 2:
// ```
// root = ------->
//               6
//         4          8
//      3     5    7     9
//  1

// target = 15 
// result = false
// ```

// Example 3:
// ```
// root = ------->
//              null   

// target = 15 
// result = false
// ```

function search(root, target) {
  
    if(root === null) {
      return false
    }

    if(root.value === target) {
      return true
    }

    if(target < root.value) {
     return search(root.left, target)
    }

    return search(root.right, target)
}
console.log(search(root, 5));   // true
console.log(search(root, 15));  // false
console.log(search(null, 15));  // false

// Time Complexity:
// Best: O(1)
// Average: O(log n)
// Worst: O(n)

// Space Complexity:
// Average: O(log n)
// Worst: O(n)

import { stack } from "../../stacks/index.js";
class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

function insert(root, value) {
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


/*
Algorithm: Depth-First Search
Input: the root, and the target
Output: true if target found, false if not

Steps:
1. Init a stack.
2. Add the root to the stack.
3. As long as there are nodes in the stack:
4.   Get a node from the stack.
5.   If it's the target:
6.     Target found. Return true.
7.   Add the children of the node to the stack.
8. Loop finished and target not found. Return false. 
*/

function depthForSearch(root, target) {
   const notVisited = new stack()

   if(root !== null) {
     notVisited.push(root)
   }

   while(!notVisited.isEmpty()) {
      const node = notVisited.pop()

      if(target === node.value ) {
        return true
      }

      if(node.right !== null) {
        notVisited.push(node.right)
      }

      if(node.left !== null) {
        notVisited.push(node.left)
      }
   }
   return false
}

console.log(depthForSearch(root, 5));




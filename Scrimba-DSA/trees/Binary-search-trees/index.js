class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

function insert(root, value) {
    if(root === null) {
     return newNode = new Node(value)
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

root = insert(root, 6);
root = insert(root, 4);
root = insert(root, 10);
root = insert(root, 8);

console.log(JSON.stringify(root, null, 2));


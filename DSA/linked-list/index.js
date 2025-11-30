/*
// Step 1: Node Creation
class Node{
    constructor(data) {
      this.data = data
      this.next = null;
    }
}
// Each Node has:
// data → value stored in the node
// next → pointer to the next node (initially null)
// Example:
// const node1 = new Node(10);
// Memory view:
// node1
// +----+----+
// | 10 | null |
// +----+----+
// data = 10
// next = null (no next node yet)



// Step 2: LinkedList Class
class LinkedList{
    constructor() {
        this.head = null;
    }
}
// this.head is the first node of the list
// Initially, the list is empty (head = null)

//step 3 Append Method

append(data) {
    const newNode = new Node(data);
   
    if(!this.head) {
      this.head = newNode
      return;
    }

    let current = this.head

    while(current.next) {
    
        current = current.next
    }
    current.next = newNode
}

// Step-by-step with visuals

// First append: list.append(10)

// newNode = Node(10)

// List is empty (head = null) → head points to newNode

// head
//  |
//  v
// +----+----+
// | 10 | null |
// +----+----+


// Second append: list.append(20)

// newNode = Node(20)

// List is not empty → traverse from head to last node (10)

// current.next = newNode → link node 20

// head
//  |
//  v
// +----+----+     +----+----+
// | 10 |  *----->| 20 | null |
// +----+----+     +----+----+


// Third append: list.append(30)

// newNode = Node(30)

// Traverse: 10 → 20 → last node

// current.next = newNode → link node 30

// head
//  |
//  v
// +----+----+     +----+----+     +----+----+
// | 10 |  *----->| 20 |  *----->| 30 | null |
// +----+----+     +----+----+     +----+----+


print() {
    let current = this.head

    while(current) {
        console.log(current.data);  
        
        current = current.next  // move to next node
    }
}


// Traversal visual:

// current = head → prints 10

// current = current.next → prints 20

// current = current.next → prints 30

// current = current.next → null → stop

// current -> node1 -> node2 -> node3 -> null


// Output:

// 10
// 20
// 30
*/

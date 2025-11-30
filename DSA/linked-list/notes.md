1. What is a Linked List?

A Linked List is a linear data structure where elements (nodes) are connected using pointers.

Each node has:

data → value of the node

next → pointer/reference to the next node

Example (visual):

[10 | next] → [20 | next] → [30 | next] → null


Here:

First node’s data = 10, next → points to node containing 20

Last node’s next → null (end of list)

2. Why Linked List (vs Array)?
Feature	Array	Linked List
Memory	Fixed size	Dynamic size
Insertion/Deletion	Costly (shifting)	Easier (change pointers)
Access time	O(1) using index	O(n) (must traverse)
Cache locality	Better	Poor
3. Types of Linked Lists

Singly Linked List – Each node points to next only
[1] → [2] → [3] → null

Doubly Linked List – Each node has prev and next pointers
null ← [1] ⇄ [2] ⇄ [3] → null

Circular Linked List – Last node points back to head
[1] → [2] → [3] ↺ (back to [1])


4. Common Operations

| Operation           | Description                   | Time Complexity |
| ------------------- | ----------------------------- | --------------- |
| Insert at beginning | Add new node at head          | O(1)            |
| Insert at end       | Traverse and attach new node  | O(n)            |
| Delete node         | Bypass node by changing links | O(n)            |
| Search node         | Traverse for match            | O(n)            |
| Traverse            | Print all nodes               | O(n)            |

5. Basic Node Structure (JavaScript)
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
And a simple LinkedList class:

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print();  // Output: 10, 20, 30

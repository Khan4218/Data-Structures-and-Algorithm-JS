// Challenge 1: Append Nodes to a Linked List

// Problem:
// Create a singly linked list and append the following values in order: 5, 10, 15. Then print the list.

// Steps to follow:

// Create a Node class with data and next.

// Create a LinkedList class with head.

// Implement an append method to add nodes at the end.

// Implement a print method to display all node values.

// Expected Output:

// 5
// 10
// 15


class Node{
    constructor(data) {
      this.data = data
      this.next = null
    }
}

class LinkedList{
     constructor() {
        this.head = null
     }

     append(data) {
        
        const newNode = new Node(data)
        
        if(!this.head) {
            this.head = newNode
            return
        }

        let current = this.head
        while(current.next) {
          
          current = current.next
        }
        current.next = newNode
         
    }

    insertAtBeginning(data) {
         const newNode = new Node(data)
         newNode.next = this.head
         this.head = newNode
    }


     print() {
        let current = this.head
        while(current) {
         console.log(current.data);
        
          current = current.next
        }
     }
    }
    
const list = new LinkedList

list.append(5)
list.append(10)
list.append(15)
list.insertAtBeginning(2)
list.print()

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

  insertAtPosition(data, position) {
    const newNode = new Node(data)

    if(position === 0) {
      newNode.next = this.head
      this.head = newNode
    }

    let current = this.head
    let count = 0

    while(current && count < position - 1) { 
      current = current.next
      count++
    }

    if(!current) {
      console.log("position out of bonds");
      return
      
    }

    newNode.next = current.next
    current.next = newNode

  
  }

  deleteAtBeginning() {

    if(!this.head) return
    this.head = this.head.next
  }

  deleteAtEnd() {

    if(!this.head) return
    
    if(!this.head.next){
     this.head = null
     return
    }

    let current = this.head

    while(current.next.next) {
     
      current = current.next
    }

    current.next = null
  }

  deleteAtPosition(position) {
    
    if(!this.head) return

    if(position === 0) {
      this.head = this.head.next
      return
    }

    let current = this.head
    let count = 0

    while(current.next && count < position - 1) {
      current = current.next
      count++
    }

    if(!current.next) {
      console.log("Position Out of bonds");
      return;
    }

    current.next = current.next.next

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
list.append(3)
list.append(7)

console.log("Main");
list.print()

console.log("delete at beginning");
list.deleteAtBeginning()
list.print()

console.log("delete at end")
list.deleteAtEnd()
list.print()

console.log("Delete at position");
list.deleteAtPosition(2)
list.print()




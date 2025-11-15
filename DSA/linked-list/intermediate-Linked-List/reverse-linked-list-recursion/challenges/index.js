// Challenge 1 — Reverse a List Recursively (Basic Implementation)
// Implement a reverseRecursive() method inside your LinkedList class using this exact logic:
// Base case: if head is null or only one node → return head
// Recursively call reverseRecursive(head.next)
// Reverse pointer using: head.next.next = head
// Set head.next = null
// Return the new head
// Task:
// Write the full working recursive method.


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
     while(current.next){
        current = current.next
     }
     current.next = newNode
    }

    reverseRecursiveHelper(node) {
      if(node === null || node.next === null)return node

      let newHead = this.reverseRecursiveHelper(node.next)

      node.next.next = node
      node.next = null

      return newHead
    }

    reverseRecursive() {
        this.head = this.reverseRecursiveHelper(this.head)
    }

    print() {
      let current = this.head
      while(current){
       console.log(current.data);
       current = current.next
      }
    }
}

const list = new LinkedList

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.reverseRecursive()
list.print()
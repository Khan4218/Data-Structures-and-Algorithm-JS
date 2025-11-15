// Challenge 2
// Write a recursive function that reverses a linked list but you cannot use a helper function.
// You must write everything inside one function:
// handle the base case
// reverse recursively
// update this.head
// return the new head
// Basically:
// Do the entire reverse recursively using only one function (no helper).
// Your Task
// Implement:
// reverseRecursive() {
//     // your recursive logic here
// }

// Rules:
// No helper function allowed.
// reverseRecursive() must return the new head.
// It must correctly update this.head.
// Code must not break if the list is empty or has one node.

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

    reverseRecursiveNoHelper(node = this.head) {
        if(node === null || node.next === null) {
            this.head = node
        return node
        }

        let newNode = this.reverseRecursiveNoHelper(node.next)
        
        node.next.next = node
        node.next = null
        return newNode
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
list.reverseRecursiveNoHelper()
list.print()
// list.reverseRecursive()
// list.print()
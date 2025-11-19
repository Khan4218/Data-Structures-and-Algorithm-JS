// Challenge 2 (Return meeting point)
// Modify the function to return the node where slow and fast meet, instead of just true/false.

// detectLoopNode(node = this.head) {
//     // return meeting node if loop exists
//     // else return null
// }

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
        let newNode = new Node(data)
        
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

    detectLoop(node = this.head) {
      if(!node || !node.next) return null

      let slow = node
      let fast = node 

      while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
        if(slow === fast) {
           return slow
        }
      }
      return null
    }

    print() {
      let current = this.head
      while (current) {
        console.log(current.data);
        current = current.next
      }
      
    }
}

let list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(3)
list.append(2)
list.append(1)
list.print()
list.head.next.next.next.next.next = list.head.next.next;
let meetNode = list.detectLoop()
if (meetNode) {
    console.log("meeting point value", meetNode.data);
} else {
    console.log("No loop found");
}

// Challenge 1 (Basic)
// Implement detectLoop() using Floyd’s cycle detection.

// detectLoop(node = this.head) {
//     // return true if loop exists else false
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
      if(this.head === null) return false

      let slow = node
      let fast = node 

      while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
        console.log(fast);
        
        if(slow === fast) {
           return true
        }
      }
      return false
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
console.log(list.detectLoop());
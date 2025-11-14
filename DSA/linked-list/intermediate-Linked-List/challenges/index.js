
class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    
    append(data) {
        const newNode = new Node(data)
        
        if(!this.head){
            this.head = newNode
            return
        }
        
        let current = this.head
        
        while(current.next) {
            current = current.next
        }
        current.next = newNode
        
    }
    // Challenge 1: Basic Reverse
    // Input: 5 → 10 → 15 → 20 → null
    // Task: Reverse the list iteratively and print the new list.
    // Expected output: 20 → 15 → 10 → 5 → null
    reverse() {
        let next = null;
        let prev = null;
        let current = this.head

        while(current) {
          next = current.next
          current.next = prev
          prev = current
          current = next
        }
        this.head = prev
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
list.append(20)
console.log("Before Reverse");
list.print()
console.log("after Reverse");
list.reverse()
list.print()



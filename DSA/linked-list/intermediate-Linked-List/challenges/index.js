
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
        //     Challenge 2: Reverse Single Node
        // Input: 42 → null
        // Task: Reverse the list iteratively.
        // Expected output: 42 → null
        // Edge case check: Ensure your code handles a single-node list.
    singleNodeReverse(){
        let next = null
        let prev = null
        let current =  this.head

        while(current) {
         next = current.next
         current.next = prev
         prev = current
         current = next
        }
        this.head = prev
    }
    
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
// list.append(5)
// list.append(10)
// list.append(15)
// list.append(20)
// console.log("Before Reverse");
// list.print()
// console.log("after Reverse");
// list.reverse()
// list.print()
list.append(42)
list.singleNodeReverse()
list.print()




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
    // Challenge 3: Reverse Empty List
    // Input: null
    // Task: Reverse the list iteratively.
    // Expected output: null
    // Edge case check: Ensure your code handles an empty list without errors.
    reverseEmptyList(){
     let next = null
     let prev = null
     let current = this.head

     while(current) {
        next = current.next
        current.next = prev
        prev = current
        current = next
     }
     this.head = prev
    }

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
list.append(null)
list.reverseEmptyList()
list.print()



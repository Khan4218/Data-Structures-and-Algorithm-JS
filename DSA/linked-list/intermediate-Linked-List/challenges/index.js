
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
// Challenge 4: Print Before & After

// Input: 1 → 2 → 3 → 4 → 5 → null

// Task: Print the list before reversal, reverse it iteratively, then print it after reversal.

const list = new LinkedList
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
console.log("Before Reverse");
list.print()
console.log("after Reverse");
list.reverse()
list.print()
// list.append(null)
// list.reverseEmptyList()
// list.print()



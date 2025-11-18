// Challenge 1 (Basic)
// Return the data of the Nth node from the end using the two-pointer method.

// Example:
// List: 1 → 2 → 3 → 4 → 5
// N = 2
// Output = 4

// Function:

// findNthFromEnd(n, node = this.head) {
//     // implement
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
    
    FindNthNodeFromEnd(n, node = this.head) {
        let slow = node
        let fast = node

        while(n > 0) {
            if(fast === null) return null
            fast = fast.next
            n--
        }

        while (fast !== null) {
            slow = slow.next
            fast = fast.next
        }
        return slow.data
    }
    
    print() {
        let current = this.head

        while(current) {
            console.log(current.data);
            current = current.next
            
        }
    }

}

const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.print()
console.log(list.FindNthNodeFromEnd(2))


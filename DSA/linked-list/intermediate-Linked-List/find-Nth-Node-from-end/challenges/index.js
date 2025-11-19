
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

    length(node = this.head) {
      let count = 0

      while(node) {
        count++
        node = node.next
      }

      return count
    }
    
    FindNthNodeFromEnd(n, node = this.head) {
        if(!node) return null
        if(n <= 0) return null

        let length = this.length()
   
        if(n > length) return null
        if(n === length) return node.data
        
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
        return slow
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


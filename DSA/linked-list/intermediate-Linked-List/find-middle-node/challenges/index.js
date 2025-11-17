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
    
    findFirstMiddle(node = this.head) {
      let slow = node
      let fast = node?.next

      while(fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next 
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
list.append(6)
console.log(list.findFirstMiddle().data)

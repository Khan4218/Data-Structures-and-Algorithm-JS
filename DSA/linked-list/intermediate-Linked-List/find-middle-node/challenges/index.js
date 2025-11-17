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

    length(node = this.head) {
      let count = 0
      
      
        while(node) {
          count++
          node = node.next
        }
        return count

    }

    findBothMiddle(node = this.head) {
      let len = this.length()
      let result = []

      let mid1 = Math.floor((len - 1) / 2 )
      let mid2 = Math.floor(len / 2)
      console.log(mid1, mid2);
      
      
      let i = 0
      let current = node

      while(current !== null) {  
        if(i === mid1) result.push(current.data)
        if(i === mid2 && mid1 !== mid2) result.push(current.data)
        current = current.next
        i++
      }
      
      return result
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
// console.log(list.findFirstMiddle().data)
console.log(list.findBothMiddle())


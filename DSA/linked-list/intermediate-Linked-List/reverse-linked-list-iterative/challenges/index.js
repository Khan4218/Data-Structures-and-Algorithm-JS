
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

    reverseFirstKNode(k) {
      if(k <= 0 || !this.head) return 0
      if(k === 1) return 1


       let current = this.head
       let prev = null
       let next = null
       let count = 0
      
       let tailOfReversed = current

       while(current !== null && count < k) {
         next = current.next
         current.next = prev
         prev = current
         current = next
         count ++
       }
        tailOfReversed.next = current
      
        
        this.head = prev

        return count

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
// list.append(1)
// list.append(2)
// list.append(3)
// list.append(4)
// list.append(5)
// console.log("Before Reverse");
// list.print()
// console.log("after Reverse");
// list.reverse()
// list.print()
// list.append(null)
// list.reverseEmptyList()
// list.print()
console.log("Before reverse first K Node");

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.print()
console.log("After reverse first K node");

list.reverseFirstKNode(3)
list.print()
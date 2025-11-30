export class Node{
    constructor(value) {
       this.value = value
       this.next = null
    }
}

class LinkedList{
    constructor() {
        this.head = null
        this.tail = null
    }

    append(value) {
      const newNode = new Node(value)

      if(!this.head) {
        this.head = newNode
        this.tail = newNode
        return
      }
      this.tail.next = newNode
      this.tail = newNode
    }

    addToBeginning(value) {
       let newNode = new Node(value)
       newNode.next = this.head
       this.head = newNode
      
    }

    addToEnd(value) {
     let newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
            return
        }
       this.tail.next = newNode
       this.tail = newNode
     
    }

    print() {
     let current = this.head

        while(current) {
            console.log(current.value);

            current = current.next
        }
    }




}

const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.addToBeginning(100)
list.addToEnd(200)
list.print()

// Input

// Linked list:
// 1 → 2 → 3 → 4 → 5 → null
// k = 3
// Output
// 3 → 2 → 1 → 4 → 5 → null
// What you need to do
// Implement:
// reverseFirstKRecursive(k)

// Rules:
// Reverse only the first k nodes using recursion
// Rest of the list must stay unchanged
// Correctly connect the last reversed node to the (k+1)th node
// Update this.head properly
// Handle edge cases:
// k = 0
// k = 1
// list empty
// k > length

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
     const newNode = new Node(data)

     if(!this.head) {
       this.head = newNode
       return
      }
     
     let current = this.head
     while(current.next){
        current = current.next
     }
     current.next = newNode
    }

    reverseRecursiveHelper(node) {
      if(node === null || node.next === null)return node

      let newHead = this.reverseRecursiveHelper(node.next)

      node.next.next = node
      node.next = null

      return newHead
    }

    reverseRecursive() {
        this.head = this.reverseRecursiveHelper(this.head)
    }

    reverseRecursiveNoHelper(node = this.head) {
        if(node === null || node.next === null) {
            this.head = node
        return node
        }

        let newNode = this.reverseRecursiveNoHelper(node.next)
        
        node.next.next = node
        node.next = null
        return newNode
    }
    // Input

    // Linked list:
    // 1 → 2 → 3 → 4 → 5 → null
    // k = 3
    // Output
    // 3 → 2 → 1 → 4 → 5 → null
    // What you need to do
    // Implement:
    // reverseFirstKRecursive(k)

    // Rules:
    // Reverse only the first k nodes using recursion
    // Rest of the list must stay unchanged
    // Correctly connect the last reversed node to the (k+1)th node
    // Update this.head properly
    // Handle edge cases:
    // k = 0
    // k = 1
    // list empty
    // k > length
    reverseRecursiveKNodes(k) {
     

      function helper(node, k) {
        if(k === 1 || node.next === null) {
         return {newHead: node, nextNode : node.next}
        }

        let result = helper(node.next, k - 1)
        
        node.next.next = node
        node.next = result.nextNode

        return {newHead: result.newHead, nextNode : result.nextNode}
        
      }

      let result = helper(this.head, k)
      this.head = result.newHead
    }

    print() {
      let current = this.head
      while(current){
       console.log(current.data);
       current = current.next
      }
    }
}

const list = new LinkedList

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.reverseRecursiveKNodes(3)
list.print()
// list.reverseRecursiveNoHelper()
// list.print()
// list.reverseRecursive()
// list.print()
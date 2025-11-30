// stacks use last in first out logic LIFO

export class stack {
    constructor() {
     this.stack = []

    }

    push(element) {
      this.stack.push(element)
    }

    pop() {
        if(this.isEmpty()) {
          throw new Error("Empty Stack")
        }

        return this.stack.pop()
    }

    peek() {
        if(this.isEmpty()) {
          throw new Error("Empty Stack")
        }

        return this.stack[this.stack.length - 1]
    }

    size() {
        return this.stack.length
    }

    isEmpty() {
        return this.stack.length === 0
    }
}



// const newStack = new stack()
// newStack.push(5)
// newStack.push(4)
// newStack.push(3)
// newStack.push(2)
// console.log(newStack.pop());
// console.log(newStack.peek());
// console.log(newStack.size());
// console.log(newStack.isEmpty());




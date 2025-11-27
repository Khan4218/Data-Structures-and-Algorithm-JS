export class Queue{
    constructor() {
        this.queue = []
    }

    enqueue(element) {
        this.queue.push(element)
    }

    dequeue() {
        if(this.isEmpty()) {
          throw new Error("Empty Queue")
        }
       return this.queue.shift()
    }

    peek() {
         if(this.isEmpty()) {
          throw new Error("Empty Queue")
        }
       return this.queue[0]
    }

    size() {
        return this.queue.length
    }

    isEmpty() {
        return this.queue.length === 0
    }
}

// const queue = new Queue()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// console.log(queue.dequeue());
// console.log(queue.peek());
// console.log(queue.size());
// console.log(queue.isEmpty());




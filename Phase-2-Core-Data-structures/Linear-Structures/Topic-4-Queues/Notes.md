What Is a Queue?
A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. This means the first element added to the queue is the first one to be removed, much like a real-world queue of people standing in line.

Key Features
Order: Elements are inserted at the rear (back) and removed from the front.

Operations:

Enqueue: Add an element to the rear of the queue.

Dequeue: Remove an element from the front of the queue.

Front/Peek: Retrieve the element at the front without removing it.

isEmpty: Check if the queue has no elements.

Size/Length: Get the number of elements in the queue.

Use Cases: Task/job scheduling, breadth-first search (BFS) in graphs, print/spooling tasks, asynchronous data processing.

Basic Implementation (Concept)
Here’s a simple way to implement a queue in JavaScript using an array:

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }
  front() {
    return this.isEmpty() ? null : this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}

Visual Analogy
Imagine a line of people at a ticket counter:

The person at the front of the line gets served first (dequeue).

New arrivals join at the end (enqueue).

No one "cuts" the line; the order is strictly maintained.

Time Complexity
Enqueue: 
O
(
1
)
O(1) (amortized, when using a linked list or optimized array approach)

Dequeue: 
O
(
1
)
O(1) (linked list), 
O
(
n
)
O(n) (array, due to shifting elements after shift())

Real-World Applications
Printer/task queues
Managing requests in servers
Data streaming and buffer management
BFS traversal in trees and graphs
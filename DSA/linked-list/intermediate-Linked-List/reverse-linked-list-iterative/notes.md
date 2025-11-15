We need to reverse the direction of the pointers in a linked list so that the last node becomes the head.

Example:
Before reversing: 10 → 20 → 30 → 40 → null
After reversing: 40 → 30 → 20 → 10 → null

2. Logic (Iterative Approach)

To reverse, we must change each node’s next pointer to point to its previous node.
We do this by maintaining three pointers:

prev → previous node (initially null)

current → node we’re currently on (starts from head)

next → temporarily stores the next node so we don’t lose track

3. Step-by-Step Dry Run

Let’s take this list:
10 → 20 → 30 → null

Before start:

prev = null

current = head (10)

Step 1:
Save next = 20
Make 10.next = prev (null)
Move prev → 10
Move current → 20

Now:
10 → null
prev = 10
current = 20

Step 2:
Save next = 30
Make 20.next = 10
Move prev → 20
Move current → 30

Now:
20 → 10 → null
prev = 20
current = 30

Step 3:
Save next = null
Make 30.next = 20
Move prev → 30
Move current → null

Loop ends (because current = null)

Now the reversed list is:
30 → 20 → 10 → null

Finally, set this.head = prev.

4. Code Implementation
reverse() {
  let prev = null;
  let current = this.head;
  let next = null;

  while (current) {
    next = current.next;   // Save next node
    current.next = prev;   // Reverse pointer
    prev = current;        // Move prev ahead
    current = next;        // Move current ahead
  }

  this.head = prev; // Update head to new first node
}
We need to reverse the direction of the pointers in a linked list so that the last node becomes the head.

Example:
Before reversing: 10 → 20 → 30 → 40 → null
After reversing: 40 → 30 → 20 → 10 → null

2. Logic (Iterative Approach)

To reverse, we must change each node’s next pointer to point to its previous node.
We do this by maintaining three pointers:

prev → previous node (initially null)

current → node we’re currently on (starts from head)

next → temporarily stores the next node so we don’t lose track

3. Step-by-Step Dry Run

Let’s take this list:
10 → 20 → 30 → null

Before start:

prev = null

current = head (10)

Step 1:
Save next = 20
Make 10.next = prev (null)
Move prev → 10
Move current → 20

Now:
10 → null
prev = 10
current = 20

Step 2:
Save next = 30
Make 20.next = 10
Move prev → 20
Move current → 30

Now:
20 → 10 → null
prev = 20
current = 30

Step 3:
Save next = null
Make 30.next = 20
Move prev → 30
Move current → null

Loop ends (because current = null)

Now the reversed list is:
30 → 20 → 10 → null

Finally, set this.head = prev.

4. Code Implementation
reverse() {
  let prev = null;
  let current = this.head;
  let next = null;

  while (current) {
    next = current.next;   // Save next node
    current.next = prev;   // Reverse pointer
    prev = current;        // Move prev ahead
    current = next;        // Move current ahead
  }

  this.head = prev; // Update head to new first node
}

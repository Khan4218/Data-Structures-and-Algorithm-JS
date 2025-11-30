⭐ Find Nth Node from the End (Two Pointer Technique)

Let’s begin.

🔥 Find Nth Node From End — Explanation (Two Pointer Method)

Goal:
Given a linked list, find the node that is N positions from the end.

Example:
List: 10 → 20 → 30 → 40 → 50
N = 2
Output = 40
(because 40 is 2nd from the end)

💡 Key Idea — Two Pointers

We use:

fast pointer

slow pointer

Step 1

Move fast pointer N steps ahead

Step 2

Move slow and fast together until fast reaches the end.

Because:

fast is already N steps ahead

When fast reaches end

slow will be exactly at the Nth node from the end

🧠 Why this works?

Imagine fast is always N nodes ahead of slow.
So when fast hits null (end), slow must be at the correct index.

✔️ Pseudocode (simple)
fast = head
slow = head

// move fast N steps 
for i in range(N): 
    fast = fast.next

// move both until fast reaches end
while fast != null:
    slow = slow.next
    fast = fast.next

return slow

📘 Edge Cases

N > length → invalid

N = length → answer is head

N = 1 → return last node

Empty list → return null

⭐ Very Clear Visual Diagram (You always like this)

List: 10 → 20 → 30 → 40 → 50
N = 2

Step 1: Move fast 2 steps
fast → 30
slow → 10

Diagram:

slow: 10
fast: 30

Step 2: move both:

Iteration 1:
slow → 20
fast → 40

Iteration 2:
slow → 30
fast → 50

Iteration 3:
slow → 40
fast → null (STOP!)

Output = slow = 40 ✔️
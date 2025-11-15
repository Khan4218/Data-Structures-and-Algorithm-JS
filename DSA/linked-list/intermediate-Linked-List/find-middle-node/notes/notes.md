Find the Middle Node (Slow & Fast Pointer)
Phase: Explanation (then we’ll do quiz → challenges when you say yes)

Find the middle node of a linked list
Goal: Given the head of a singly linked list, return the middle node.
If there are 2 middle nodes (even length), return the second middle (LeetCode standard).

Example
List: 1 → 2 → 3 → 4 → 5
Middle = 3

Even example
List: 1 → 2 → 3 → 4 → 5 → 6
Middle = 4 (second middle)

Why slow & fast pointer works
We keep two pointers:

• slow moves 1 step
• fast moves 2 steps

When fast reaches the end, slow will be at the middle.

Because:
For every 2 steps fast takes, slow takes 1 step
So slow travels half the distance.

Visual Diagram (step-by-step)

List: 1 → 2 → 3 → 4 → 5

Step 1
slow = 1
fast = 1

Step 2
slow = 2
fast = 3

Step 3
slow = 3
fast = 5

Step 4
fast.next = null → stop
slow = 3 → middle

Code (JavaScript)

function findMiddle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow; // middle node
}
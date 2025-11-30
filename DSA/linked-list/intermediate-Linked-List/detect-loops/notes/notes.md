Topic 1: Detect Loop / Cycle
(Floyd’s Cycle Detection Algorithm)

Explanation:

In a normal linked list:

1 → 2 → 3 → 4 → 5 → null

But in a looped list:

1 → 2 → 3 → 4 → 5
↑ |
|_____|

The last node points to some earlier node.

Floyd’s Cycle Detection uses:

• slow pointer → 1 step
• fast pointer → 2 steps

If there is a loop → slow and fast will meet inside the cycle.

Pseudocode:

slow = head
fast = head

while(fast && fast.next):
    slow = slow.next
    fast = fast.next.next

    if slow == fast:
        return true   // loop present

return false


Visual:

slow: 1 → 2 → 3 → 4 → 5 → 3 → 4 → …
fast: 1 → 3 → 5 → 4 → 3 → …

Eventually both land on same node.
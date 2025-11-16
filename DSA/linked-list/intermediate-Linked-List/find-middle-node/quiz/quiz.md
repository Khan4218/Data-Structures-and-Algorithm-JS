A linked list has 7 nodes. After the algorithm finishes, how many steps will slow pointer have moved?
A. 2
B. 3
C. 4
D. 6

In the slow–fast pointer technique, the loop condition is:
A. while (slow !== null)
B. while (fast !== null && fast.next !== null)
C. while (fast.next !== null && slow !== null)
D. while (head !== null)

For an even-length list: 10 → 20 → 30 → 40 → 50 → 60
Which node will be returned?
A. 20
B. 30
C. 40
D. 50

Why does fast pointer move 2 steps?
A. To reach the end faster and catch slow
B. To ensure slow reaches the middle when fast reaches the end
C. To reduce time complexity
D. For no particular reason

Time complexity of finding the middle using slow/fast pointers is:
A. O(n²)
B. O(log n)
C. O(n)
D. O(1)

If fast pointer starts at head.next instead of head, what middle will you get for odd length list?
Example: 1 → 2 → 3 → 4 → 5
A. Correct middle (3)
B. One node before the middle (2)
C. One node after the middle (4)
D. It depends on values

Send your answers (e.g., 1A, 2B...).

Your answers:

B

B

C

B

C

A

Results:
1 — Correct
2 — Correct
3 — Correct
4 — Correct
5 — Correct
6 — Incorrect

Explanation for Q6:
If fast starts at head.next, the slow pointer moves fewer times before fast reaches the end.
This shifts the result by +1, meaning slow ends up after the real middle.

For list: 1 → 2 → 3 → 4 → 5
Real middle = 3
Returned middle = 4

Correct answer: C

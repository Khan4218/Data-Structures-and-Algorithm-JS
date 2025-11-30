Question 1
In the two-pointer method, why do we move the fast pointer N steps ahead?
A. To skip the first N nodes
B. To ensure slow and fast reach the end at the same time
C. To maintain an N-node gap between slow and fast
D. To find the length first

Question 2
Given: 1 → 2 → 3 → 4 → 5
N = 3
Which node is 3rd from the end?
A. 2
B. 3
C. 4
D. 5

Question 3
If N equals the length of the list, which node is returned?
A. Last node
B. Middle node
C. Head node
D. Null

Question 4
What happens if N is larger than the length of the list?
A. Return head
B. Return null or error
C. Return last node
D. Continue with slow and fast normally

Question 5
Given: 10 → 20 → 30 → 40 → 50 → 60
N = 1
Output should be:
A. 50
B. 60
C. 40
D. 20

Question 6
In the final while loop, when do we stop moving both pointers?
A. When fast.next becomes null
B. When slow equals fast
C. When fast becomes null
D. When slow.next becomes null



ChatGPT said:

Here are your results:

C → correct

B → correct

C → correct

B → correct

B → correct

A → incorrect

Correct answer for Q6 is:

C. When fast becomes null
because when fast reaches null, slow is exactly at the Nth node from the end.
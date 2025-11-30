🔹 Reverse Linked List Using Recursion — QUIZ

1. What is the base case for reversing a linked list using recursion?
A) When current node is null or its next is null
B) When current node is the last node only
C) When list has at least 3 nodes
D) When current node has a previous pointer

1.A when current node is null or its next node is null we return because to avoid infinite loops 

2. What does the recursive call reverseRecursive(current.next) do?
A) Reverses only the last two nodes
B) Reverses the entire remaining list after current
C) Swaps current node with its previous node
D) Deletes the next node

2.B it reverses the entire remaining list after current becuase it keep calling it self untill base case 

3. In recursive reversal, which node becomes the new head?
A) The original first node
B) The original second node
C) The original last node
D) The middle node

3.C The orginal last node becomes the new node 

4. Which line actually performs the pointer reversal in recursion?
A) reverseRecursive(current.next)
B) current.next = prev
C) current.next.next = current
D) current = current.next

4.C 

5. Why does recursion reverse the list during unwinding?
A) Because the call stack is FIFO
B) Because pointers can only be reversed after base case
C) Because the stack follows LIFO (last in, first out)
D) Because linked list stores previous nodes

5.C it follows LIFO and according to that which comes last goes out first and so it keep unwinding

6. What happens if you forget to set current.next = null at the end?
A) Nothing happens
B) The list becomes circular (loop forms)
C) The list becomes empty
D) Only the last node is removed

6.B it form loop becuase base case will never gets satisify 

7. What must the recursive function return?
A) Always return null
B) The head of the reversed sub-list
C) The last element
D) A count of nodes reversed

7.B 

8. What does this line achieve?
let newHead = reverseRecursive(head.next)
A) It gets the last node (the new head) from recursion
B) It deletes the current node
C) It swaps values
D) It prints the reversed list

8.A 

9. Which technique does recursion naturally implement?
A) Two-pointer technique
B) Depth-first traversal down the list
C) Breadth-first traversal
D) Binary search approach

9.B  i have no idea 

10. When does pointer reversal actually occur?
A) During recursive calls (going down)
B) During recursion unwinding (coming back up)
C) Before recursion starts
D) Only after all nodes are visited and printed

10.B during recusrsion unwinding the pointer reversal occur
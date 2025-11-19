Quiz — Detect Loop / Cycle

1. What is the main idea behind Floyd’s Cycle Detection Algorithm?
A. Count nodes in the list
B. Use slow and fast pointers to detect if they meet
C. Reverse the list and compare
D. Use recursion to check pointers

1Sol : B we use floyd cycle to detect whetether the pointers meet 

2. If a list has a loop, what eventually happens in Floyd’s Algorithm?
A. slow becomes null
B. fast becomes null
C. slow and fast meet at some node
D. recursion stops

2.SOl C if it has a loop slow and fast meet at some point

3. Time complexity of Floyd’s cycle detection:d
A. O(n)
B. O(n²)
C. O(log n)
D. O(1)

3Sol: A because we are looping time increases according to input size

4. Space complexity of Floyd’s cycle detection:
A. O(n)
B. O(1)
C. O(log n)
D. O(n²)

4sol: B no extra space used 

5. Which case confirms that there is NO loop?
A. slow == fast
B. fast == null or fast.next == null
C. slow jumps backward
D. slow moves faster

5.SOl: B

6. If head = null, what should detectLoop return?
A. true
B. false
C. error
D. undefined

6sol: B
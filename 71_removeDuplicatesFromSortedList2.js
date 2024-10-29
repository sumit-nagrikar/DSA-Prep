
var deleteDuplicates = function (head) {
    let dummy = new ListNode(); // Initialize a dummy node to help with easy edge case handling
    dummy.next = head; // Pointing dummy to head

    // Pointers
    let prev = dummy; // This pointer will keep track of the last distinct node
    let curr = head; // This pointer will iterate through the list

    // Iterate to check & skip duplicates
    while (curr !== null) {
        // Check if we have duplicates
        if (curr.next !== null && curr.val === curr.next.val) {
            // Move to the last duplicate
            while (curr.next !== null && curr.val === curr.next.val) {
                curr = curr.next; // Skip the duplicates
            }
            // Now `curr` is at the last duplicate, so skip all duplicates
            prev.next = curr.next; // Point to the first node after duplicates
        } else {
            // No duplicates found, move `prev` to `curr`
            prev = prev.next; // We have found a unique node
        }
        curr = curr.next; // Move to the next node
    }
    return dummy.next; // Return the head of the modified list
};

/* Detailed Walkthrough
ListNode Definition:

The ListNode function defines the structure of a node in the linked list, containing a value (val) and a pointer to the next node (next).
Function Declaration:

The deleteDuplicates function takes a single argument head, which is the head of the linked list we want to process.
Dummy Node:

javascript
Copy code
let dummy = new ListNode();
dummy.next = head;
A dummy node is created to simplify handling edge cases (like when the head itself is a duplicate). It points to the original head.
Pointer Initialization:

javascript
Copy code
let prev = dummy; // This pointer will keep track of the last distinct node
let curr = head; // This pointer will iterate through the list
prev is initialized to point to dummy, and curr is initialized to point to head. prev will help maintain the last unique node found, while curr traverses the list.
Iterate Through the List:

javascript
Copy code
while (curr !== null) {
The loop continues until curr reaches the end of the list (i.e., curr becomes null).
Check for Duplicates:

javascript
Copy code
if (curr.next !== null && curr.val === curr.next.val) {
This checks if curr has a next node and whether the value of curr equals the value of curr.next. If true, it indicates duplicates.
Skip Duplicates:

javascript
Copy code
while (curr.next !== null && curr.val === curr.next.val) {
    curr = curr.next; // Skip the duplicates
}
If duplicates are found, we continue moving curr forward until we find a node that has a different value, effectively skipping all duplicates.
Update the Previous Node's Next Pointer:

javascript
Copy code
prev.next = curr.next; // Point to the first node after duplicates
After identifying all duplicates, we update prev.next to point to curr.next, effectively removing the duplicates from the list.
Unique Node Handling:

javascript
Copy code
prev = prev.next; // We have found a unique node
If no duplicates were found, prev is updated to point to curr, marking it as the last unique node.
Move to the Next Node:

javascript
Copy code
curr = curr.next; // Move to the next node
Finally, curr is moved to the next node to continue the iteration.
Return the Result:

javascript
Copy code
return dummy.next; // Return the head of the modified list
After processing all nodes, the function returns dummy.next, which points to the head of the modified linked list with duplicates removed.
Summary
This function effectively removes duplicates from a sorted linked list using a two-pointer technique.
The use of a dummy node simplifies the logic for handling edge cases where the head node may need to be adjusted.
By iterating through the list, it builds a new linked list of unique values while maintaining the original order. */
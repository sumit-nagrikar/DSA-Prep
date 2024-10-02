# What is a Linked List?
A Linked List is a type of data structure where each element (called a node) contains two things:

Data (the actual value you want to store)
A Pointer/Link to the next node in the list.
Unlike arrays, where elements are stored in continuous memory locations, linked lists store elements randomly and connect them through these links.

Think of it as a train: Each train coach is a node, and the connector between them is the link to the next node.

Key Parts of a Linked List
Node: The basic unit of a linked list that contains data and a reference (link) to the next node.
Head: The first node of the linked list.
Tail: The last node, which points to null, meaning it doesn't link to any other node.

*Visual Representation*

[Data1] -> [Data2] -> [Data3] -> null

In this example:

Data1 is linked to Data2.
Data2 is linked to Data3.
Data3 points to null, meaning it's the end of the list.

**Let's Create a Linked List in JavaScript**
We'll start by defining a Node and a LinkedList class.

*Step 1: Define a Node*
Each node will have two properties: data (the value) and next (the pointer to the next node).

```javascript
class Node {
  constructor(data) {
    this.data = data;  // The value of the node
    this.next = null;  // Initially, it doesn't point to anything (null)
  }
}
```

*Step 2: Define a LinkedList*
The LinkedList will have:

A head to keep track of the first node.
Methods to add, remove, and print elements.

```javascript
class Node {//created to use it inside of Linked List class to add a new node
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
-----------------------------
class LinkedList {
  constructor() {
    this.head = null;  // Initially, the list is empty, so head is null
  }

// Method to add a new node to the linked list
  append(data) {
    const newNode = new Node(data);  // Create a new node with the given data
    
    if (this.head === null) {
      // If the list is empty, set the new node as the head
      this.head = newNode;
    } else {
      // Otherwise, find the last node and link it to the new node
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

//   Method to print all elements of the linked list
  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);  // Print the data of each node
      current = current.next;     // Move to the next node
    }
  }
}
```
**Example of Using the Linked List**
Let's create a linked list and add some values to it:

```javascript
const list = new LinkedList();

list.append(10);  // Add 10 to the list
list.append(20);  // Add 20 to the list
list.append(30);  // Add 30 to the list

list.printList();  // Should output: 10, 20, 30
```

## Next Steps: Inserting and Deleting Nodes in a Linked List
We’ve learned how to append nodes to the end of the linked list. Now, let’s cover two more important operations:

Inserting a node at the beginning or a specific position.
Deleting a node from the linked list.

1. **Inserting a Node**
There are two types of insertion operations:

*Insert at the beginning (prepend).*
*Insert at a specific position.*

### Insert at the Beginning (Prepend)
To insert at the beginning, you just need to create a new node and set its next pointer to the current head of the list. Then, update the head to the new node.

```javascript
prepend(data) {
  const newNode = new Node(data);   // Create the new node
  newNode.next = this.head;         // Point the new node to the current head
  this.head = newNode;              // Update the head to the new node
}
```
Example Usage:
```javascript
list.prepend(5);  // Insert 5 at the beginning
list.printList(); // Outputs: 5, 10, 20, 52
```
### Insert at a Specific Position
To insert at a specific position (for example, at index 2), we need to:

Traverse the list to that position.
Update the next pointers to insert the new node.

#### What the insertAt Method Does??
The insertAt method allows us to insert a new node at any specific position in the linked list. This is useful when you want to add a node in between other nodes, instead of just at the start or end.

Why We Need previous
In a singly linked list, each node only knows about the next node. To insert a new node at a specific position, we need to:

Find the node just before the position where the new node should be inserted (let's call it previous).
Adjust pointers: Once we have the previous node, we set its next pointer to point to the new node, and the new node's next pointer will point to the node currently at that position.
This is where the previous variable becomes important. It keeps track of the node before the insertion point, allowing us to "insert" the new node by updating the previous node's next pointer.

```javascript
insertAt(data, position) {
  const newNode = new Node(data);  // Create the new node with data

  if (position === 0) {
    // If we are inserting at the head (start of the list)
    newNode.next = this.head;
    this.head = newNode;
    return;
  }

  let current = this.head;
  let previous = null;  // This will store the node just before the insertion point
  let index = 0;  // This helps us keep track of the position in the list

  // Traverse the list to find the correct position
  while (current !== null && index < position) {
    previous = current;  // Update previous to the current node
    current = current.next;  // Move to the next node
    index++;  // Increment the index to track the position
  }

  if (current === null && index !== position) {
    console.log("Position out of bounds");
    return;
  }

  // Insert the new node by adjusting the pointers
  previous.next = newNode;  // Previous node now points to the new node
  newNode.next = current;   // New node points to the current node
}

```

Step-by-Step Breakdown:
Initialization:

We create the new node (newNode).
We check if we are inserting at position 0 (the start of the list). If yes, we simply insert the new node at the head and exit the method.
Loop to Traverse the List:

We start at the head of the list with current = this.head and initialize previous = null.
As we move through the list, we update previous to be the current node and move current to the next node. This ensures that when we reach the target position, previous points to the node just before the insertion point, while current points to the node currently at that position.
Insert the New Node:

Once we find the correct position, we set previous.next = newNode. This links the previous node to the new node.
Then, we set newNode.next = current to link the new node to the node that was previously at this position.
Why We Need previous:
We need previous because, in a singly linked list, we can only move forward through the list (from one node to the next). Without previous, we wouldn't be able to link the new node to the correct spot, as we can't "look back" to update the previous node's next pointer.

In short, previous helps us keep track of the node before the insertion point, allowing us to properly insert the new node into the list.


### Deleting a Node
We can delete nodes by:

*Removing the first node.*
*Removing the last node.*
*Removing a node from a specific position.*

**Delete the First Node**
To delete the first node, we simply move the head pointer to the next node.

```javascript
deleteFirst() {
  if (this.head !== null) {
    this.head = this.head.next;   // Move the head to the next node
  }
}
```


**Delete the Last Node**
To delete the last node, we need to traverse the list until we reach the second-to-last node, and set its next pointer to null.

```javascript
deleteLast() {
  if (this.head === null) {
    return;  // List is empty
  }

  if (this.head.next === null) {
    // If there's only one node in the list
    this.head = null;
    return;
  }

  let current = this.head;
  let previous = null;

  // Traverse until the second-to-last node
  while (current.next !== null) {
    previous = current;
    current = current.next;
  }

  previous.next = null;  // Remove the last node by setting previous node's next to null
}
```


**Delete a Node at a Specific Position**

```javascript
deleteAt(position) {
  if (this.head === null) {
    return;  // List is empty
  }

  if (position === 0) {
    // If deleting the head node
    this.head = this.head.next;
    return;
  }

  let current = this.head;
  let previous = null;
  let index = 0;

  // Traverse to the position
  while (current !== null && index < position) {
    previous = current;
    current = current.next;
    index++;
  }

  if (current === null) {
    console.log("Position out of bounds");
    return;
  }

  // Remove the node by updating the pointers
  previous.next = current.next;
}
```

The line **previous.next = current.next**; is used to remove a node from the middle or end of a linked list by updating the pointers.

*How it works:*
previous is the node just before the one you want to remove.
current is the node you want to remove.
current.next points to the node right after the one being removed.
By setting previous.next = current.next, you're telling the previous node to skip over the current node and point directly to the node after current. This effectively removes current from the list.

Example:
If you have a list:


Head -> 10 -> 20 -> 30 -> null
And you want to remove the node with value 20 (the current node):

previous points to 10.
current points to 20.
current.next points to 30.
After previous.next = current.next;, the list becomes:

rust
Copy code
Head -> 10 -> 30 -> null
The node with value 20 is now removed from the list.
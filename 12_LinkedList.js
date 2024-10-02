//Append, Prepend, and insertAt specific position

// Define the Node class
class Node {
    constructor(data) {
      this.data = data;  // The value of the node
      this.next = null;  // The pointer to the next node, initially set to null
    }
  }
  
  // Define the LinkedList class
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
        let current = this.head;//create a variable current & set to head of the linked list. The head is always the first node in the list.
        while (current.next !== null) {//accessing next property from current object
          current = current.next;
        }
        current.next = newNode;
      }
    }

    //Method to prepend data (add data at the beginning/head of linked list)
    prepend(data){
      const newNode = new Node(data)  // Create a new node with given data
      newNode.next = this.head;     // Point new node to current head
      this.head = newNode;      // Update the head to the new node
    }

    //Method to Insert at a Specific Position
    insertAt(data, position) {//taking data and where to insert a new node
      const newNode = new Node(data);
      
      if (position === 0) {
        // If inserting at the head (index 0)
        newNode.next = this.head; // Point new node to current head
        this.head = newNode;    // Update the head to the new node
        return;
      }
    
      let current = this.head;//created a variable and set it to head of list/which is always first node
      let previous = null;  //previous helps us keep track of the node before the insertion point
      let index = 0;
    
      // Traverse the list to find the correct position
      while (current !== null && index < position) {
        previous = current;
        current = current.next;
        index++;
      }
    
      if (current === null && index !== position) {
        console.log("Position out of bounds");
        return;
      }
    
      previous.next = newNode;   // Set previous node's next to new node
      newNode.next = current;    // Point new node to the current node
    }
    
  
    // Method to print all elements of the linked list
    printList() {
      let current = this.head;
      while (current !== null) {
        console.log(current.data);  // Print the data of each node
        current = current.next;     // Move to the next node
      }
    }
  }
  
  // Usage example
  const list = new LinkedList();
  // list.append(10);
  // list.append(20);
  // list.prepend(5);
  // list.prepend(2);
  // list.insertAt(33,2);
  list.printList();  // Outputs: 2, 5, 10, 20
  
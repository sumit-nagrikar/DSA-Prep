class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}



class LinkedList {
    constructor(data){
        this.head = null;
    }

      
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

      // Method to print all elements of the linked list
    printList() {
        let current = this.head;
        while (current !== null) {
          console.log(current.data);  // Print the data of each node
          current = current.next;     // Move to the next node
        }
      }

      //To delete the first node, we simply move the head pointer to the next node.
      deleteFirst(){
        if(this.head !==null){
            this.head = this.head.next;// Move the head to the next node
        }
      }
      //To delete the last node, we need to traverse the list until we reach the second-to-last node, and set its next pointer to null.
      deleteLast(){
        if(this.head === null){
            return;// List is empty
        }

        if(this.head.next == null){// If there's only one node in the list
            this.head = null;
            return;
        }

        let current = this.head;
        let previous = null;

         // Traverse until the second-to-last node
         while(current.next !== null){
            previous = current;
            current = current.next;//move forward
         }
         previous.next = null;  // Remove the last node by setting previous node's next to null
      }

      //Method to delete node at a specific position
      deleteAt(position){
        if(this.head === null){
            return; //list is empty
        }

        if(position === 0){
            //if deleting the head
            this.head = this.head.next;//used to move the head of the linked list to the next node
            return;
        }

        let previous = null;
        let index = 0;
        let current = this.head;

         // Traverse to the position
         while(current !== null && index < position){
            previous = current;
            current = current.next;//to move node forward
            index++;
         }

         if (current === null) {
            console.log("Position out of bounds");
            return;
          }

          // Remove the node by updating the pointers
            previous.next = current.next;
         
      }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
// list.deleteFirst()
// list.deleteLast()
list.deleteAt(1)
list.printList();
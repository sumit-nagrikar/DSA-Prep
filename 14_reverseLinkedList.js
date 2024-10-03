/* class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(data){
        this.head = null;
    }

    // Method to add a new node to the linked list
    append(data){
        const newNode = new Node(data);

        if(this.head === null){
            this.head = newNode;
        }else{
            let current = this.head;

            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    //method to print the data
    printList(){
        let current = this.head;
        while(current!== null){
            console.log(current.data);
            current = current.next;
        }
    }

    reverse(){
        let previous = null;// Initialize previous as null
        let current = this.head; // Start with the head of the list
        let next = null; // Initialize next to null (will be used to temporarily store the next node)

        while(current !== null){
            next = current.next;//store next node in next
            current.next = previous;// Reverse the current node's pointer
            previous = current;// Move the previous pointer one step forward
            current = next;  // Move the current pointer to the next node
        }
        // After the loop, previous will be the new head
            this.head = previous;
    }
}

const list = new LinkedList();
list.append('A');
list.append('B');
list.append('C');
list.printList();
list.reverse();
list.printList(); */

var reverseList = function(head){
    // initialize prev and next pointers to NULL
    let prev = null;
    let next = null;
     // set current pointer to the head node
     let current = head;

    //iterate while the current pointer is not NULL
    while(current !== null){
        next = current.next // set the next pointer to the next node in the list
        current.next = prev; // reverse the current node's pointer to point to the previous node
        prev = current;
        current = next;
    }
    head = prev;// set the head pointer to the last node, which is the new first node after reversal

    return head; // return new head pointer
}

let head = [1,2,3,4,5]
console.log(reverseList(head));
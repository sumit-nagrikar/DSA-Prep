/* class Node{
    constructor(data){
        this.data = data;
        this.head = null;
    }
}

class LinkedList{
    constructor(data) {
        this.head = null;
    }

    
} */

//to  run this we need to put this inside class as a method ans access with object instance
    var removeNthFromEnd = function(head, n){
        let res = new ListNode(0,head);//dummy node for pointing to head
        let dummy = res//pointer for res
        //move head pointer n steps forward
        for(let i=0; i<n; i++){
            head = head.next;
        }
        // Now move both 'head' and 'dummy' one step at a time until 'head' reaches the end
    // This will make 'dummy' point to the node just before the one we need to remove
        while(head){
            head = head.next;
            dummy = dummy.next;
        }
        // Remove the nth node from the end by skipping it in the list
        dummy.next = dummy.next.next;

        // Return the modified list, skipping the dummy node
        return res.next;
    }
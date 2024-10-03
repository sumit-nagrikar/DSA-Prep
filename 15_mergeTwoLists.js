/* You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list. 
NOTE: This will only work in leetcode
to run this function here, we need to add class ListNode with constructor and print function, etc changes
*/

var mergeTwoLists = function(list1, list2){
    let dummy = new ListNode();//created one dummy node as starting point for merged list

     // Create a pointer 'cur' that starts at the dummy node
     let cur = dummy;

     // Loop through both lists as long as they have nodes left
     while(list1 && list2){
        if(list1.val<list2.val){
            cur.next = list1;//attaching to merge list
            list1 = list1.next; //moving pointer forward
        }else{
            cur.next = list2;//attaching to merge list
            list2 = list2.next; //moving pointer forward
        }
        cur = cur.next;//moving merge list pointer forward
     }
     // If one of the lists still has nodes left, add all those remaining nodes to the merged list
     cur.next = list1 || list2;

     // Return the merged list, starting from the first real node (after the dummy node)
    return dummy.next;
}
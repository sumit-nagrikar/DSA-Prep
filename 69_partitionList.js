var partition = function(head,x){
    let left , right = new ListNode();
    ltail,rtail = left,right;

    while(head){
        if(head.val > x){
            ltail.next = head;
            ltail = ltail.next;
        }else{
            rtail.next = head;
            rtail = rtail.next;
        }
        head = head.next;
    }
    ltail.next = right.next;
    rtail.next = null;

    return left.next;
}
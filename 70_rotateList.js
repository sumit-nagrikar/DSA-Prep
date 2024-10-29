/* # Intuition
To solve the problem of rotating a linked list to the right by `k` positions, the main idea is to manipulate the pointers of the list. By determining the length of the list and adjusting the connections accordingly, we can effectively rotate the list without needing to create new nodes or structures.

# Approach
1. **Calculate Length**: Traverse the linked list to calculate its length and also find the tail node.
2. **Normalize k**: Since rotating the list by its length results in the same list, use `k % length` to get the effective number of rotations.
3. **Find Pivot**: If `k` is not zero, traverse the list again to find the node that will be the new tail after rotation.
4. **Adjust Pointers**: Set the next pointer of the new tail to null, and connect the old tail to the head to complete the rotation.
5. **Return New Head**: The node right after the new tail becomes the new head of the rotated list.

# Complexity
- Time complexity: $$O(n)$$, where $$n$$ is the number of nodes in the linked list, since we traverse the list a couple of times.
- Space complexity: $$O(1)$$, as we are using a constant amount of extra space.

# Code

 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return head;

    // Get length
    let length = 1;
    let tail = head;

    while(tail.next){
        length += 1;
        tail = tail.next;
    }
    // Normalize k
    k = k % length;
    if(k === 0) return head;

    // Move to pivot & rotate
    let cur = head;
    for(let i = 0; i < length - k - 1; i++){
        cur = cur.next;
    }
    let newHead = cur.next;
    cur.next = null;
    tail.next = head;

    return newHead;
};
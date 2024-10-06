function isSymmetric(root){
    if(!root) return true;
    return isMirror(root.left,root.right);
}

function isMirror(left, right){
    if(!left && !right) return true;//both are null
    if(!left  || !right) return false;//Any one of them Null
    
    if(left.val !== right.val) return false;// Values do not match

    // Recursively check for mirror condition
    return isMirror(left.left,right.right) && isMirror(left.right,right.left);//If both side matches return true
}




/* To check whether a binary tree is symmetric (i.e., a mirror of itself around its center), you need to compare the left and right subtrees of the root node to ensure they are mirror images of each other.

Key Concept:
The binary tree is symmetric if:
The left subtree of the root node is a mirror reflection of the right subtree.
This means that:
The left child of the left subtree should equal the right child of the right subtree.
The right child of the left subtree should equal the left child of the right subtree.
Approach:
The approach is recursive and checks whether two trees (the left and right subtrees) are mirror images of each other.

Step-by-step process:
Base case:

If both nodes are null, return true (because two null trees are symmetric).
If one of the nodes is null but the other is not, return false (because they aren't symmetric).
Recursive case:

Check whether the value of the two nodes is equal.
Recursively check whether the left subtree of one node is symmetric with the right subtree of the other, and vice versa.
 */
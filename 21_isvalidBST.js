var isValidBST = function(root) {//root = [5, 1, 4, null, null, 3, 6]
    // Helper function to validate BST
    const validate = (node, lower, upper) => {//Use 5 as a root node
        // Base case: If node is null, it's a valid BST by default
        if (node === null) return true;

        // Get the current node's value//sabse pahle 5 nikali//this 5 first time we use for upper & lower bound for its left and right child
        let val = node.val;

        // Check if the current node's value violates the BST property
        if (val <= lower || val >= upper) return false;

        // Recursively validate the left and right subtrees
        // For the left subtree, the upper bound is the current node's value
        // For the right subtree, the lower bound is the current node's value
        if (!validate(node.left, lower, val)) return false;//we continuousluy check left & right child for returning false, but if thats not the case, unfortunately we return true, at end - that This is a BST
        if (!validate(node.right, val, upper)) return false;

        // If both subtrees are valid, the tree is valid
        return true;
    };

    // Start the recursion with initial bounds (-∞, ∞)
    return validate(root, -Infinity, Infinity);//after passing root we go inside of function
};

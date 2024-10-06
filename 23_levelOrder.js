function levelOrder(root) {
    if (!root) return [];// If the tree is empty, return an empty list

    let result = [];
    let queue = [root];// Initialize the queue with the root node

    while (queue.length > 0) {
        let level = [];//aplyala current level mdhe jitke nodes ahe tyancha ek array bnvaycha ahe, then we push it to result
        let size = queue.length;// Get the current level size (number of nodes at this level)

        for (let i = 0; i < size; i++) {
            let node = queue.shift();//if multiple node are in queue - here extracting first one
            level.push(node.val);// Add the node's value to the current level list

            //upper loop push the current level nodes to level array/now below condition for their childern
            // Enqueue the left and right children (if they exist)
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(level);
    }
    return result;
}

let root = [3,9,20,null,null,15,7];
levelOrder(root);

//Note: BFS Breadth First search Algorithm search work first on horizontal level in a tree, add root node in queue -- check how many nodes are there in each level and adds them to level array. --Then Next looks for if that  node having any children -- if yes. add them too queue and process continues.
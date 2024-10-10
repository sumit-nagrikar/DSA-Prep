// BFS approach
    // 1. create a new node
    // 2. add the new node to the queue
    // 3. add the new node to the visited map
    // 4. while the queue is not empty
    // 5.    get the first node from the queue
    // 6.    for each neighbor of the node
    // 7.        if the neighbor is not in the visited map
    // 8.            create a new node
    // 9.            add the new node to the queue
    // 10.           add the new node to the visited map
    // 11.       add the new node to the neighbors of the new node
// Define the Node class
class Node {
    constructor(val) {
        this.val = val;
        this.neighbours = [];
    }
}

// Clone Graph function (your BFS implementation)
var cloneGraph = function(node) {
    if (!node) return null; // Handle empty graph

    let newNode = new Node(node.val); // Create the clone for the starting node
    let queue = [node]; // Initialize BFS with the original node
    let visited = new Map(); // Map to track original to cloned nodes
    visited.set(node, newNode); // Mark the starting node as visited by storing its clone

    while (queue.length > 0) {
        let currentNode = queue.shift(); // Get the next node from the queue (BFS)

        // Traverse all the neighbors of the current node
        for (const neighbour of currentNode.neighbours) {
            if (!visited.has(neighbour)) { // If the neighbor hasn't been cloned yet
                let newNeighbour = new Node(neighbour.val); // Create the clone of the neighbor
                visited.set(neighbour, newNeighbour); // Store the clone in the visited map
                queue.push(neighbour); // Add the original neighbor to the queue for further processing
            }
            // Connect the cloned current node with the cloned neighbor
            visited.get(currentNode).neighbours.push(visited.get(neighbour));
        }
    }

    return newNode; // Return the clone of the original starting node
};

// Helper function to print the graph (for better visualization)
const printGraph = (node) => {
    let visited = new Set();
    const queue = [node];
    
    while (queue.length > 0) {
        const curr = queue.shift();
        if (visited.has(curr.val)) continue;
        visited.add(curr.val);
        console.log(`Node ${curr.val} ->`, curr.neighbours.map(n => n.val));
        for (const neighbor of curr.neighbours) {
            if (!visited.has(neighbor.val)) {
                queue.push(neighbor);
            }
        }
    }
};

// Test the function with input
const testGraph = () => {
    // Create a simple graph
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);

    // Manually connect the nodes (undirected graph)
    node1.neighbours = [node2, node4];
    node2.neighbours = [node1, node3];
    node3.neighbours = [node2, node4];
    node4.neighbours = [node1, node3];

    // Print the original graph
    console.log("Original Graph:");
    printGraph(node1);

    // Clone the graph
    const clonedGraph = cloneGraph(node1);

    // Print the cloned graph
    console.log("\nCloned Graph:");
    printGraph(clonedGraph);
};

// Run the test
testGraph();

function canFinish(numCourses, prerequisites) {
    const graph = buildGraph(numCourses,prerequisites);
    let visited = new Set();//for processed courses which do include cyclic dependency
    let visiting = new Set(); //for the elements are currently being visited

    for(let course = 0; course < numCourses; course++){
        if(!dfs(course)){//aaplyala true return karaycha ahe, / but just in case jar dfs returns false then we are returning false from this case;
            return false;
        }
    }
    return true;


    // Depth-First Search function to check for cycles
    function dfs(course) {
        if (visited.has(course)) {//base case
            return true;  // If already fully processed, no need to check again
        }

        if (visiting.has(course)) {//base case
            return false; // If currently visiting, it means we have found a cycle
        }

        visiting.add(course);  // Mark the course as currently visiting

        const prerequisites = graph[course]; // Get all prerequisites for this course

        // Visit all the prerequisites (neighbors)
        for (const prerequisite of prerequisites) {
            if (!dfs(prerequisite)) {  // If any prerequisite leads to a cycle, return false
                return false;
            }
        }

        visiting.delete(course);  // Remove the course from visiting (DFS done for this course)
        visited.add(course);      // Mark the course as fully processed (safe)

        return true;  // No cycle detected for this course
    }


     // Helper function to build the graph
    function buildGraph(numCourses, prerequisites){
        const graph = Array.from({length: numCourses}, () => []);//created graph array of length numcourses with each empty element graph = [[],[],[]] /if numcourses=3
    
        //puh dependencies
        for(const [course, prerequisite] of prerequisites){//prerequisites is array - we exctracted these two   [course, prerequisite] from it.
    
            graph[course].push(prerequisite);//pushed the dependency in course aapn each empty array mdhe ek course and tyachi deppendency takt aho
        }
        return graph;
    }
}


let numCourses = 3, prerequisites = [[1,0], [2,1]];
console.log(canFinish(numCourses,prerequisites));
/* The use of const visited = new Set(); and const visiting = new Set(); in the code is to keep track of the states of each course during the Depth-First Search (DFS) process. Let's break down their roles:

1. visited Set:
The visited set keeps track of fully processed courses — meaning that the course and all its prerequisites have been successfully checked without encountering any cycles. Once a course is marked as visited, it means we are confident it can be taken without any circular dependencies.

Purpose:

Once a course is fully processed, we never need to revisit it. If a course is in the visited set, it means we've already verified it doesn't lead to a cycle.
This optimization helps avoid unnecessary repeated work (checking the same course multiple times).
Example: Let's say the visited set contains {0, 1}. This means both courses 0 and 1 have been fully processed, and they don't lead to a cycle.

2. visiting Set:
The visiting set tracks courses that are currently being visited during the DFS traversal. A course is added to visiting when we start processing it and is removed once all its dependencies (prerequisites) are resolved.

Purpose:
Detecting cycles: If a course that is already in the visiting set is encountered again during the DFS traversal, it indicates a cycle. This is because we are revisiting a course that is still in the process of being checked — meaning we have a circular dependency.
Example: Suppose during DFS we are checking course 0 and it leads to course 1, which in turn leads back to course 0. In this case:
When DFS is at course 1, it sees that course 0 is still in the visiting set, which confirms a cycle. Hence, it returns false for a cyclic dependency.
Example to Clarify:
Let's walk through a small example to see how visited and visiting work.

Suppose you have:

javascript
Copy code
let numCourses = 3, prerequisites = [[1, 0], [2, 1], [0, 2]];
Here, course 1 depends on 0, course 2 depends on 1, and course 0 depends on 2. This creates a cycle: 0 → 1 → 2 → 0.

DFS Traversal:
We start the DFS on course 0.
visiting = {0}
Now, we go to course 0's prerequisite, course 2.
visiting = {0, 2}
Now, we check course 2's prerequisite, course 1.
visiting = {0, 2, 1}
Now, we check course 1's prerequisite, course 0.
Since course 0 is already in visiting, a cycle is detected, and the DFS returns false.
Without these two sets, it would be difficult to distinguish between whether we've already visited a course safely (in the visited set) or are still processing it (in the visiting set).

Summary:
visited Set: Tracks courses that are fully processed (all prerequisites checked without cycles).
visiting Set: Tracks courses that are currently being visited during DFS. Detects cycles if a course is revisited while still in the visiting set.
These two sets help the algorithm efficiently detect cycles in the course dependency graph, ensuring that we can decide whether it's possible to finish all courses. */
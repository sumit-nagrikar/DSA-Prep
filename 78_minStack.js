//Approach
var minStack = function() {
    this.st = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let min_val = this.getMin();
    if (min_val === null || min_val > val) {
      min_val = val;
    }
    this.st.push([val, min_val]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.st.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.st.length ? this.st[this.st.length - 1][0] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.st.length ? this.st[this.st.length - 1][1] : null;
};


/* Understanding the Min Stack Design
When tackling the Min Stack problem, the challenge is to design a stack that supports standard operations like push, pop, and top, while also allowing retrieval of the minimum element in constant time. This requirement drives the design decisions in the solution, where simplicity and efficiency are key.

Initialization: Keeping Track of the Stack State
def __init__(self):
    self.st = []
We start by initializing an empty list self.st to represent our stack. This stack will store both the value pushed and the minimum value at the time of pushing. By combining these two pieces of information in one stack, we avoid the need for a separate data structure to track the minimum values, leading to a more efficient and compact design.
Push Operation: Managing Minimum Values
def push(self, val: int) -> None:
    min_val = self.getMin()
    if min_val is None or min_val > val:
        min_val = val
        
    self.st.append([val, min_val])
The push method needs to insert a new element into the stack while ensuring we can quickly access the minimum value.
First, the current minimum value is retrieved using self.getMin(). If the stack is empty (i.e., min_val is None) or the new value is smaller than the current minimum, we update the minimum to be the new value.
The stack then stores a pair [val, min_val], where val is the actual value being pushed, and min_val is the minimum value up to that point in the stack. This dual storage allows the stack to maintain constant time complexity for retrieving the minimum value.
Pop Operation: Simple Stack Behavior
def pop(self) -> None:
    self.st.pop()
The pop operation removes the most recent element from the stack, which includes both the value and the minimum value at that point. Since the stack inherently manages this pairing, no extra steps are needed to maintain the integrity of the minimum value tracking. This keeps the pop operation efficient and straightforward.
Top Operation: Accessing the Latest Value
def top(self) -> int:
    return self.st[-1][0] if self.st else None
The top method returns the most recent value that was pushed onto the stack. Since each element in the stack is stored as a pair [val, min_val], we access the actual value using self.st[-1][0]. If the stack is empty, it returns None, reflecting the absence of any elements.
GetMin Operation: Constant-Time Minimum Retrieval
def getMin(self) -> int:
    return self.st[-1][1] if self.st else None
The primary challenge of the Min Stack is retrieving the minimum value in constant time. Thanks to the design choice of storing the minimum value alongside each element in the stack, the getMin method simply returns the second item in the most recent pair [val, min_val]. This ensures that no matter how many elements are in the stack, the minimum can always be accessed in O(1) time.
Conclusion: Efficient Stack Management
The Min Stack implementation cleverly combines the actual value and the current minimum into a single stack structure, ensuring that all operations—push, pop, top, and getMin—can be performed efficiently. This design decision not only simplifies the implementation but also guarantees that the stack meets the problem's requirements for constant-time minimum retrieval, making it an elegant and effective solution.

 */
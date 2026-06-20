// --------------------------SET--------------------------------------------------------------------
// 📦 Initialization
const customSet = new Set();

// 🟢 ADD / INSERT - .add(value) -> Time Complexity: O(1)
customSet.add(1577);
customSet.add(720);
customSet.add(1577); // 🚫 Duplicate element! It will be silently ignored.

// 🔍 FIND / SEARCH - .has(value) -> Time Complexity: O(1)
const handlesRating = customSet.has(1577); // Returns: true
const hasLowRating = customSet.has(1200); // Returns: false

// 🔴 REMOVE - .delete(value) -> Time Complexity: O(1)
customSet.delete(720); // Removes 720 from the set

// 📏 Utility
console.log(customSet.size); // Returns actual count: 1
customSet.clear(); // Wipes out the entire set

// --------------------------MAP--------------------------------------------------------------------
// 📦 Initialization
const platformMap = new Map();

// 🟢 ADD / INSERT - .set(key, value) -> Time Complexity: O(1)
platformMap.set("username", "prashant_cse");
platformMap.set("rating", 1577);
platformMap.set(101, "Admin ID"); // 🟢 Number used as a key!

// 🔍 FIND / SEARCH - .get(key) & .has(key) -> Time Complexity: O(1)
console.log(platformMap.get("username")); // Output: "prashant_cse"
console.log(platformMap.has("rating")); // Output: true

// 🔴 REMOVE - .delete(key) -> Time Complexity: O(1)
platformMap.delete(101); // Removes the key 101 along with its value

// 📏 Utility
console.log(platformMap.size); // Returns pair count: 2

// --------------------------STACK--------------------------------------------------------------------
// 📦 Initialization
const historyStack = [];

// 🟢 ADD / INSERT - .push(value) -> Time Complexity: O(1)
// Elements enter at the very top
historyStack.push("Page_Home");
historyStack.push("Page_Dashboard");
historyStack.push("Page_Settings");

// 🔍 FIND / PEEK - [stack.length - 1] -> Time Complexity: O(1)
// Checking the top element without removing it
const currentTop = historyStack[historyStack.length - 1];
console.log(currentTop); // Output: "Page_Settings"

// 🔴 REMOVE - .pop() -> Time Complexity: O(1)
// Removes and returns the top-most element
const removedElement = historyStack.pop();
console.log(removedElement); // Output: "Page_Settings"

// --------------------------QUEUE--------------------------------------------------------------------
class OptimalQueue {
  constructor() {
    this.storage = {};
    this.frontPointer = 0;
    this.rearPointer = 0;
  }

  // 🟢 ADD / INSERT (Enqueue) -> Time Complexity: O(1)
  enqueue(element) {
    this.storage[this.rearPointer] = element;
    this.rearPointer++;
  }

  // 🔴 REMOVE (Dequeue) -> Time Complexity: O(1)
  dequeue() {
    if (this.frontPointer === this.rearPointer) return null; // Queue is empty

    const deletedItem = this.storage[this.frontPointer];
    delete this.storage[this.frontPointer];
    this.frontPointer++;
    return deletedItem;
  }

  // 🔍 FIND / PEEK (Check front) -> Time Complexity: O(1)
  peek() {
    if (this.frontPointer === this.rearPointer) return null;
    return this.storage[this.frontPointer];
  }
}

// ---- RUNTIME EXECUTION ----
const processingQueue = new OptimalQueue();
processingQueue.enqueue("Task_1");
processingQueue.enqueue("Task_2");

console.log(processingQueue.peek()); // Output: "Task_1" (First item)
console.log(processingQueue.dequeue()); // Output: "Task_1" (Removed from front)
console.log(processingQueue.peek()); // Output: "Task_2" (Now next in line)

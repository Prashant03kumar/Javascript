// DOM Kya Hai? (The Definition)
// Jab browser kisi HTML web page ko load karta hai,
// toh wo us HTML document ka ek structure taiyar karta hai jise DOM (Document Object Model) kehte hain.

/*Deep Definition: The DOM is a live, object-oriented, tree-structured programming interface (API) built inside the browser's memory.
 It maps out your HTML text into highly complex JavaScript objects that adhere to a standard called the W3C DOM Specification. */

//  what is an event
// an event is a signal that happening on the webpage
// how to handle a event
// Find it: Select the HTML element you want to watch
// Listen to it: Attach an event listener to that element specifying the event type.
// Execute it: Provide a callback function (the handler) that runs when the event fires.

// ASYNC IN JAVASCRIPT
// js is single threaded language
// The Event Loop is the secret mechanism inside the browser that makes this possible.
// To understand the Event Loop, we have to look at JavaScript's biggest paradox: JavaScript is single-threaded (can only do one thing at a time),
// yet it can handle complex asynchronous tasks (like API calls, timers, and clicks) without freezing the website.
// The Event Loop is the secret mechanism inside the browser that makes this possible. It acts like a traffic controller, constantly managing where and when your code blocks execute.
// The four pillars architecture of javascript

console.log("1. Start");

setTimeout(() => {
  console.log("2. Timer Finished");
}, 2000); // 2-second delay

console.log("3. End");
console.log("4. End");
console.log("5. End");
console.log("6. End");
console.log("7. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("3. End");
console.log("100. End");

/*
Call Stack
   |
setTimeout()
   |
   v
Web API (timer start)
   |
   |---- JavaScript aage ka code execute karta rehta hai
   |
3 sec complete
   |
   v
Callback Queue (Task Queue)
   |
Event Loop check karta hai
   |
Call Stack empty ?
   |
  Yes
   |
   v
Callback Queue se callback uthake
Call Stack me daal do
   |
Execute
*/
// Jab tak Call Stack me kaam chal raha hai, callback wait karega.

console.log("A");

setTimeout(() => {
  console.log("B"); //timer doesn't matter it will going into callback queue
}, 0);

for (let i = 0; i < 1000000000; i++) {
  // heavy work
}

console.log("C");

// The Event Loop (The Controller): This is a continuous, infinite loop that has only one job: it constantly looks at the Call Stack and the Task Queue.
// The Rule: If the Call Stack is completely empty, it takes the first function from the Task Queue and pushes it onto the Call Stack to be executed.
/*

Event Loop Ka Algorithm

Wo lagbhag ye kaam karta rehta hai:

while(true){
    if(Call Stack empty &&
       Callback Queue not empty){
       
       Queue se callback nikalo
       Call Stack me daalo
    }
}
    */

// Event Propagation
// In what order do their event handlers fire?
// Capturing Phase: The event travels from the absolute top root downward to the target element (window --> body --> div --> button).
// Target Phase: The event reaches the actual element that initiated the interaction (button).
// Bubbling Phase: The event travels back upward from the target to the root (button --> div --> body --> window)

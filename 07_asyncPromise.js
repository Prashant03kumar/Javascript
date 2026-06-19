const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Pizza Delivered");
  }, 3000);
});

p.then((data) => {
  console.log(data);
});
/*
Promise ki 3 states hoti hain:

Pending
   |
   +--> Fulfilled (Resolved)
   |
   +--> Rejected

Call Stack

Microtask Queue
   ^
   |
Promise.then()

Task Queue
   ^
   |
setTimeout()
*/
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

/*
A
D
C
B
*/

async function test() {
  return "Hello";
}

function test() {
  return Promise.resolve("Hello");
}

/*
                 Web APIs
                     |
                     |
        +------------+------------+
        |                         |
    setTimeout()             Promise
        |                         |
        v                         v
   Task Queue              Microtask Queue
        |                         |
        +-----------+-------------+
                    |
              Event Loop
                    |
                    v
               Call Stack

               Priority
1. Call Stack

2. Microtask Queue
   (.then, .catch, await)

3. Task Queue
   (setTimeout, setInterval)
*/

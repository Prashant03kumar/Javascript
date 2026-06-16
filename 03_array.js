/**
 * =========================================================================
 * JAVASCRIPT ARRAYS: THE ULTIMATE INTERVIEW BLUEPRINT
 * =========================================================================
 * Under the hood: JS Arrays normal C++ arrays jaise continuous memory blocks
 * nahi hote. Ye background me standard JS Objects hote hain jahan indices
 * (0, 1, 2) keys ki tarah behave karti hain. Isiliye inme kisi bhi type ka
 * data (mixed types) ek saath store ho sakta hai.
 */

// =========================================================================
// 1. CREATION AND INTERVIEW TRAPS
// =========================================================================

// Standard tarika
const fruits = ["Apple", "Banana"];

// Constructor tarika (⚠️ Interview Warning Trap!)
const arr1 = new Array(3); // Agar ek single number doge, toh ye 3 empty slots ka array banayega, [3] nahi!
console.log(arr1.length); // Output: 3
console.log(arr1[0]); // Output: undefined (actually khaali slot hai, ise "Sparse Array" kehte hain)

const arr2 = new Array(1, 2, 3); // Agar ek se zyada arguments doge, toh elements banenge: [1, 2, 3]

// Array.from(): Ek iterable ya array-like object (jaise NodeList ya Set) ko real array me badalne ke liye
const str = "JS";
const charArray = Array.from(str); // ['J', 'S']

// =========================================================================
// 2. BASIC OPERATIONS (MUTATION / MEMORY MODIFICATION)
// =========================================================================
const stack = [10, 20];

// push(): Last me element add karta hai. Original array change hota hai.
// Complexity: O(1) - Kyunki end me daalna asaan hai.
stack.push(30); // [10, 20, 30]

// pop(): Last se element nikaalta hai aur use return karta hai.
// Complexity: O(1)
const lastElement = stack.pop(); // lastElement = 30, array = [10, 20]

// unshift(): Start me element add karta hai.
// Complexity: O(N) ⚠️ Kyunki baki saare elements ko ek-ek index aage shift hona padta hai.
stack.unshift(5); // [5, 10, 20]

// shift(): Start se element nikaalta hai.
// Complexity: O(N) ⚠️ Kyunki baki saare elements ko ek-ek index peeche aana padta hai.
const firstElement = stack.shift(); // firstElement = 5, array = [10, 20]

// =========================================================================
// 3. ADVANCED MODIFICATION: SPLICE VS SLICE (Most Asked Interview Question)
// =========================================================================

// SLICE: slice(start, end) -> Array ka tukda nikaalta hai.
// 🟢 Original array ko change NAHI karta (Immutable). End index included nahi hota.
// Complexity: O(N)
const numbers = [1, 2, 3, 4, 5];
const subArray = numbers.slice(1, 4);
// subArray = [2, 3, 4]
// numbers = [1, 2, 3, 4, 5] -> Original ekdum safe hai!

// SPLICE: splice(start, deleteCount, item1, item2, ...) -> Element delete ya insert karta hai.
// 🔴 Original array ko MUTATE (change) kar deta hai.
// Complexity: O(N)
const elements = ["A", "B", "C", "D"];
const deleted = elements.splice(1, 2, "X", "Y");
// Index 1 se shuru karo, 2 elements hatao ("B", "C"), aur unki jagah "X", "Y" daal do.
// deleted = ["B", "C"] -> Jo delete hua wo return hota hai
// elements = ["A", "X", "Y", "D"] -> Original array badal gaya!

// =========================================================================
// 4. SEARCHING & ITERATION METHODS
// =========================================================================
const items = [5, 12, 8, 130, 44];

// indexOf(): Element ka index dhoodta hai, na mile toh -1. O(N)
console.log(items.indexOf(8)); // 2

// includes(): Check karta hai element hai ya nahi, returns true/false. O(N)
console.log(items.includes(12)); // true

// find(): Pehla element return karta hai jo condition pass kare. O(N)
const found = items.find((num) => num > 10); // 12 (130 bhi bada hai par ye pehle par ruk jata hai)

// findIndex(): Pehle condition pass karne wale element ka index deta hai. O(N)
const foundIdx = items.findIndex((num) => num > 10); // 1

// =========================================================================
// 5. THE BIG THREE: HIGH-ORDER METHODS (Map, Filter, Reduce)
// =========================================================================
// Ye teeno methods original array ko chhedte nahi hain, hamesha naya data return karte hain.

const data = [1, 2, 3, 4];

// MAP: Har element par operation chala kar ek NAYA array banata hai (Same Length ka)
// Complexity: O(N)
const squared = data.map((num) => num * num); // [1, 4, 9, 16]

// FILTER: Condition ke basis par elements ko filter karke NAYA array banata hai (Length kam ho sakti hai)
// Complexity: O(N)
const evens = data.filter((num) => num % 2 === 0); // [2, 4]

// REDUCE: Puri array ko process karke ek SINGLE value me convert kar deta hai (Accumulator concept)
// Syntax: array.reduce((accumulator, currentValue) => { ... }, initialValue)
// Complexity: O(N)
const sum = data.reduce((acc, curr) => {
  return acc + curr; // Agli baar ke liye acc ki value update ho jayegi
}, 0); // 0 yahan initialValue hai accumulator ki. Sum = 10

// =========================================================================
// 6. SORTING AND REVERSING (The In-Place Danger)
// =========================================================================

// reverse(): Array ko ulta kar deta hai. 🔴 In-place mutates the array!
const revArr = [1, 2, 3];
revArr.reverse(); // revArr ab [3, 2, 1] hai

// sort(): Alphabetical sort karta hai by default! (⚠️ Huge Interview Trap!)
const unsafeSort = [10, 5, 80, 9];
unsafeSort.sort();
console.log(unsafeSort); // Output: [10, 5, 80, 9] 🤯
// Kyunki JS isko string samajh kar sort karta hai ("10" ka "1", "5" ke "5" se pehle aata hai ASCII me)

// Sahi Tarika for Numeric Sort (Comparator Function pass karo):
// Complexity: O(N log N) - V8 engine Timsort use karta hai background me.
const safeSort = [10, 5, 80, 9];
safeSort.sort((a, b) => a - b); // Ascending order ke liye (b - a descending ke liye)
console.log(safeSort); // Output: [5, 9, 10, 80] ✅

// =========================================================================
// 7. MULTI-DIMENSIONAL & FLATTENING (DSA Favourites)
// =========================================================================
const matrix = [1, [2, [3, 4]]];

// flat(depth): Nested arrays ko tod kar single array me convert karta hai. O(N)
console.log(matrix.flat(1)); // [1, 2, [3, 4]] (Sirf 1 level andar gaya)
console.log(matrix.flat(Infinity)); // [1, 2, 3, 4] (Pura flat kar diya)

// flatMap(): Map aur Flat(1) ka combination. Pehle map karega fir 1 level flat. O(N)
const sentences = ["Hello World", "MERN Stack"];
const words = sentences.flatMap((s) => s.split(" ")); // ["Hello", "World", "MERN", "Stack"]

// =========================================================================
// 8. COGNITIVE QUESTIONS & TRAPS FOR INTERVIEWS
// =========================================================================

// Trap A: Reference Comparison
console.log([] == []); // false 🤯 (Dono alag objects hain heap me, references match nahi hote)
console.log([1, 2] === [1, 2]); // false

// Trap B: Array de-structuring with rest operator
const [first, second, ...rest] = [10, 20, 30, 40, 50];
// first = 10, second = 20, rest = [30, 40, 50]

// Trap C: Pass by Reference (Copying an array safely)
const original = [1, 2, 3];
const fakeCopy = original; // Sirf pointer copy hua, original badloge toh fakeCopy bhi badlega

// Sahi Tarika to Clone Array (Spread Operator):
const realCopy = [...original]; // Heap me ek naya array ban gaya clone hokar
realCopy.push(4); // Original par koi asar nahi padega

/**
 * =========================================================================
 * TOPIC: ARRAY DESTRUCTURING & THE REST OPERATOR (...)
 * =========================================================================
 * Interview Perspective: Yeh ES6 (Modern JS) ka feature hai. Iska kaam hota
 * hai kisi array se values ko nikaalna aur unhe bohot clean tarike se
 * alag-alag variables me assign karna.
 */

const programmingLanguages = ["JavaScript", "Python", "C++", "Java", "Go"];

// 1. WHAT IS THIS CALLED?
// Is syntax ko "Array Destructuring" kehte hain.
// Aur jo teen dots (`...`) humne use kiye hain, use "Rest Operator" kehte hain.
const [primary, secondary, ...bakiSaare] = programmingLanguages;

/**
 * EXPLANATION OF VARIABLES:
 * * primary   -> Isko array ka 0th index mila ("JavaScript")
 * secondary -> Isko array ka 1st index mila ("Python")
 * bakiSaare -> Isko baki bache hue saare elements ka ek NAYA ARRAY mila!
 */

console.log(primary); // Output: "JavaScript"
console.log(secondary); // Output: "Python"
console.log(bakiSaare); // Output: ["C++", "Java", "Go"] 🟢 (Yes, yeh ek pure array hai!)

// =========================================================================
// 🔥 INTERVIEW TRAPS & RULES (Rest Operator ke niyam)
// =========================================================================

// TRAP 1: Rest element must be the last element!
// Interviewer aapko confuse karne ke liye rest operator ko beech me daal dega:
// const [a, ...middle, z] = [1, 2, 3, 4, 5];
// ❌ SyntaxError: Rest element must be last element
// Rule: `...` hamesha aakhiri variable hona chahiye, uske baad comma `,` nahi lag sakta.

// TRAP 2: Skipping Elements (Value chhod kar aage badhna)
// Agar aapko beech ka koi element nahi chahiye, toh aap bina variable naam likhe khali comma `,` chhod sakte ho:
const [firstLang, , thirdLang, ...restLang] = [
  "JS",
  "Python",
  "C++",
  "Java",
  "Ruby",
];

console.log(firstLang); // Output: "JS" (0th index)
// Python (1st index) skip ho gaya kyunki humne sirf comma lagaya hai!
console.log(thirdLang); // Output: "C++" (2nd index)
console.log(restLang); // Output: ["Java", "Ruby"] (Baki bacha hua array)

// TRAP 3: What if elements are less than variables?
// Agar array me data kam ho aur aapne rest operator lagaya ho:
const [x, y, ...z] = ["A"];
console.log(x); // Output: "A"
console.log(y); // Output: undefined (Kyunki 1st index par kuch tha hi nahi)
console.log(z); // Output: [] (Khaali Array! Rest operator hamesha array hi return karega, chahe wo khaali ho)

// =========================================================================
// 💡 BONUS INTERVIEW CONFUSION: REST VS SPREAD
// =========================================================================
// Interviewer poochega: "Rest operator aur Spread operator dono me `...` hota hai, toh farq kya hai?"

// 🟢 JAWAB:
// 1. REST (Semetna/Gather): Yeh bikhre hue elements ko ek jagah IKATHA (gather) karke array banata hai. (Hamesha assignment ke LEFT side ya function parameters me hota hai).
// 2. SPREAD (Phailana/Scatter): Yeh ek bane-banaye array ko KHOL kar (scatter) uske tukde alag-alag kar deta hai. (Hamesha assignment ke RIGHT side hota hai).

// Spread Example:
const arrPart1 = [1, 2];
const arrPart2 = [3, 4];
const combinedArray = [...arrPart1, ...arrPart2]; // Yahan dots array ko KHOL rahe hain (Spread)
// output [1,2,3,4]
// const combinedArray = [arrPart1,arrPart2]; // Yahan dots array ko KHOL rahe hain (Spread)
// [[ 1, 2 ], [ 3, 4 ] ]
console.log(combinedArray); // Output: [1, 2, 3, 4]

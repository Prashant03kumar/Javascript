// ARROW FUNCTIONS
// Arrow functions (() => {}) likhne me toh bohot clean hote hain, par inke paas this keyword ka apna koi wajood nahi hota.
//  Yeh interview ka sabse bada hotspot hai.

// regular function
const regFnc = function () {
  console.log("Print regular function");
};

regFnc();

const arrowfuction = (a, b) => a + b;
console.log(arrowfuction(1, 2));

// 🔥 THE INTERVIEW TRAP: 'this' keyword behavior
const userProfile = {
  username: "prashant_cse",

  // Regular Method: Iska 'this' us object ko point karta hai jisne ise call kiya (userProfile)
  showRegular: function () {
    console.log("Regular:", this.username);
  },

  // Arrow Method: Iska apna 'this' nahi hota! Yeh apne baahar wale (Lexical Parent) ke 'this' ko udhaar leta hai.
  // Yahan iska parent global execution context (window/empty object) hai.
  showArrow: () => {
    console.log("Arrow:", this.username);
  },
};

userProfile.showRegular(); // Output: Regular: prashant_cse ✅
userProfile.showArrow();

// First-Class Citizens (Higher-Order Functions & Callbacks)

function greet() {
  return "Hii! How are you?";
}

// Higer order function accept function in argument
function higherOrder(name, callBackFunc) {
  const message = callBackFunc();
  console.log(`${message}-> ${name}`);
}

higherOrder("Prashant", greet);

// IIFE (Immediately Invoked Function Expression)
// IIFE Syntax: (function(){ ... })()

(function () {
  // Iske andar ka variable baahar ki duniya se ekdum safe hai
  let secretKey = "AI_ML_SECRET_BATCH_2027";
  console.log("IIFE Ran automatically! Database connected.");
})();

// HANDLING DYNAMIC ARGUMENTS
function totalSumOld() {
  // Isme map, filter, reduce nahi chalte the, pehle array me convert karna padta tha
  console.log(arguments);
}

// 🟢 Modern Tarika: Rest Parameters (`...args`)
// Yeh saare bikhre hue arguments ko samet kar ek REAL ARRAY bana deta hai.
function totalSumNew(...numbers) {
  // Ab numbers ek proper array hai, hum direct reduce chalayein:
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(totalSumNew(10, 20, 30, 40)); // Output: 100 ✅

/**
 * =========================================================================
 * SYNCHRONOUS CALLBACK CODE
 * =========================================================================
 */

function greetUser(name, callback) {
  console.log("1. Greet function shuru hua.");

  // Callback function turant chalega yahi par
  callback(name);

  console.log("3. Greet function khatam hua.");
}

// Function Call
greetUser("Prashant", (username) => {
  console.log(`2. 🔥 Hello ${username}, yeh callback ke andar hai.`);
});

console.log("4. 🚀 Yeh sabse aakhiri me chalega.");

/* OUTPUT KA SEQUENCE:
1. Greet function shuru hua.
2. 🔥 Hello Prashant, yeh callback ke andar hai.
3. Greet function khatam hua.
4. 🚀 Yeh sabse aakhiri me chalega.

Notice karo: Code ekdum sequence me chala (1 -> 2 -> 3 -> 4). 
Jab tak line 2 ka callback nahi chala, line 3 aur 4 ne wait kiya.
*/

/**
 * =========================================================================
 * ASYNCHRONOUS CALLBACK CODE
 * =========================================================================
 */

function downloadResume(resumeId, callback) {
  console.log("1. Resume download shuru ho raha hai...");

  // setTimeout ek asynchronous background task simulate kar raha hai (3 seconds ka delay)
  setTimeout(() => {
    const fileData = "PDF_DATA_OF_PRASHANT_RESUME";

    // 3 seconds baad yeh callback trigger hoga
    callback(fileData);
  }, 3000);

  console.log("2. Download request background me bhej di gayi hai.");
}

// Function Call
downloadResume("id_123", (data) => {
  console.log(`4. 🎯 Callback Triggered: Aapka data aa gaya -> ${data}`);
});

console.log("3. 💻 Main script baaki kaam kar rahi hai (Page scrollable hai).");

/* OUTPUT KA SEQUENCE:
1. Resume download shuru ho raha hai...
2. Download request background me bhej di gayi hai.
3. 💻 Main script baaki kaam kar rahi hai (Page scrollable hai).
... (3 Seconds ka sannaata/wait) ...
4. 🎯 Callback Triggered: Aapka data aa gaya -> PDF_DATA_OF_PRASHANT_RESUME

Notice karo: Output 1 -> 2 -> 3 -> 4 ke sequence me aaya!
JavaScript ne callback (line 4) ka 3 seconds tak baith kar wait NAHI kiya. 
Usne background me timer chala diya aur turant line 2 aur 3 ko execute kar diya.
*/

// Sab kuch same hai, bas call karte waqt hi humne arrow function daal diya

// Pure Function Expression Tarika (Cleanest for Closures)
// 1. Main function definition
function solveProblem(name, callback) {
  callback(name);
}

// 2. Callback function ko alag variable me store kiya
const myCallback = (name) => {
  console.log(`Problem name: ${name}`);
  console.log("🎉 Congratulations Prashant! Aapne task poora kar liya.");
};

// 3. Simple aur clean function call
solveProblem("Reverse String", myCallback);

/*
// 1. Pehle hum main function ka blueprint (declaration) banayenge
function solveProblem(name, callback) {
    console.log(`1. System: Problem started...`);
    
    // Yahan humne callback ko chalaya aur uske andar 'name' bhej diya!
    callback(name); 
}

// 2. Ab hum isko CALL karenge sahi syntax ke saath
solveProblem("Two Sum", (problemName) => {
    // Ab is callback ke paas 'problemName' ka access hai!
    console.log(`2. 🔥 Problem name inside callback: ${problemName}`);
    console.log("3. 🎉 Congratulations Prashant! Aapne task poora kar liya.");
});

/* OUTPUT:
1. System: Problem started...
2. 🔥 Problem name inside callback: Two Sum
3. 🎉 Congratulations Prashant! Aapne task poora kar liya.
*/

const arr = [1, 2, 3, 4];
console.log(arr.map((num) => num * num));

const price = [100, 200, 300];
const totalPrice = price.reduce((total, x) => {
  return total + x;
}, 0);
console.log(totalPrice);

const products = [
  { name: "Laptop", price: 50000, rating: 4.5 },
  { name: "Mouse", price: 1000, rating: 3.5 },
  { name: "Monitor", price: 15000, rating: 4.8 },
];

const totalTaxedBill = products
  .filter((item) => item.rating > 4.0) // 1. Filter kiya: Laptop aur Monitor bache
  .map((item) => item.price * 1.1) // 2. Map kiya: Prices me 10% tax joda [55000, 16500]
  .reduce((total, taxedPrice) => total + taxedPrice, 0); // 3. Reduce kiya: Dono ko jod diya

console.log(totalTaxedBill); // Output: 71500 🚀 (Ek single line chain me poora data nichod diya!)

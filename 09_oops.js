/*
In JavaScript, every object has a hidden, built-in property called its Prototype (accessible via __proto__ or Object.getPrototypeOf()).
im simple words 
Har JavaScript object ke paas ek hidden link hota hai jo kisi dusre object ko point karta hai. Us hidden link ko Prototype kehte hain.
*/
const user = {
  name: "Prashant",
};
console.log(user.toString());
// we don't add toString but still it is working

console.log(user.__proto__);
console.log(user.__proto__ === Object.prototype);
console.log(Object.getOwnPropertyNames(Object.prototype));

/*
If you try to access a property or method on an object and it’s not found there, JavaScript doesn't give up. 
It looks at the object's prototype, then the prototype's prototype, climbing up a chain called the Prototype 
Chain until it either finds it or hits null.

1. __proto__
Ye har object ke paas hota hai.
Ye batata hai:
"Mera parent object kaun hai?"
__proto__ ek hidden link hai jo parent object ko point karta hai.

Diagram:
user1
 |
 |__proto__
 |
 v
userMethods


2. prototype
Ye sirf functions ke paas hota hai.
JavaScript automatically is function ke saath ek object bana deta hai:
User.prototype


__proto__ = Object ka hidden pointer/link.
prototype = Function ka ek object, jise future objects inherit karenge



Step 1: Function kya hai?
function User() {}
JavaScript is function ke saath ek extra object free me bana deta hai:
User.prototype
Matlab memory me:
User Function
prototype
   |
   v
  {}

Abhi bas itna samjho:
User.prototype ek normal object hai jo JS ne function ke saath automatically banaya.

Step 2: new lagaya
const u1 = new User();
JS internally karta hai:
const u1 = {};
Aur phir:
u1.__proto__ = User.prototype;
Bas.
Yahi poora game hai.
*/

/**
 * =========================================================================
 * ENCAPSULATION IN JAVASCRIPT (Production Grade Pattern)
 * =========================================================================
 * Encapsulation means hiding the internal data (state) of an object and restricting direct access from the outside world.
 * You wrap the data (variables) and behaviors (methods) into a single protective shield (the object),
 * and only expose safe, authorized pathways to interact with it.
 */

class CoderAccount {
  // 1. Declare private fields at the very top using '#'
  #username;
  #rating;

  constructor(username, initialRating) {
    this.#username = username;
    this.#rating = initialRating; // Data is now sealed inside the capsule
  }

  // 2. GETTER METHOD: An authorized public window to READ the private data safely
  getRating() {
    return this.#rating;
  }

  // 3. SETTER METHOD: An authorized public door to MODIFY data with strict validation rules
  updateRating(newRating) {
    // Validation Layer: Protect the integrity of the data
    if (typeof newRating === "number" && newRating >= 0) {
      this.#rating = newRating;
      console.log(`✅ Rating updated successfully to: ${this.#rating}`);
    } else {
      console.error("⚠️ Security Refusal: Invalid rating value provided!");
    }
  }
}

// ---- RUNTIME EXECUTION ----

const profile = new CoderAccount("prashant_cse", 1577);

// ❌ ATTEMPTING DIRECT ACCESS:
// console.log(profile.#rating);
// 🔴 SyntaxError: Private field '#rating' must be declared in an enclosing class. (The browser blocks this completely!)

// 🟢 SAFE ACCESS VIA GETTER:
console.log(profile.getRating()); // Output: 1577

// ❌ ATTEMPTING ILLEGAL MODIFICATION:
profile.updateRating(-200); // Output: ⚠️ Security Refusal: Invalid rating value provided!

// 🟢 LEGITIMATE MODIFICATION VIA SETTER:
profile.updateRating(1600); // Output: ✅ Rating updated successfully to: 1600
console.log(profile.getRating()); // Output: 1600

// Abstraction means hiding the complex, messy internal implementation details of a system and only exposing a clean, simple, and user-friendly interface.

// Encapsulation is about Security & Protection.
// It hides data inside a capsule so the outside world can’t accidentally modify or corrupt it (think of the #private variables).
// Abstraction is about Simplicity & Design.
// It hides complexity so the developer using your class doesn't have to look at 500 lines of underlying logic just to execute one simple action.

/**
 * =========================================================================
 * INHERITENCE IN JAVASCRIPT (Code Reusability Blueprint)
 * =========================================================================
 */

// 1. MASTER PARENT CLASS
class Account {
  constructor(username, baseRating) {
    this.username = username;
    this.baseRating = baseRating;
  }

  // A shared method that every single child class will automatically get
  loginNotification() {
    console.log(
      `📡 System Alert: ${this.username} has logged into the terminal.`,
    );
  }
}

// 2. CHILD CLASS (Inherits everything from Account using 'extends')
class CompetitiveCoder extends Account {
  constructor(username, baseRating, totalProblemsSolved) {
    // 👑 CRITICAL RULE: You must call super() before touching the 'this' keyword!
    // This passes the username and rating up to the master Account constructor.
    super(username, baseRating);

    // This property is specific ONLY to CompetitiveCoder
    this.totalProblemsSolved = totalProblemsSolved;
  }

  // A specific method unique only to this child class
  submitCode() {
    console.log(
      `🚀 ${this.username} just pushed a solution! Total solved: ${this.totalProblemsSolved + 1}`,
    );
    this.totalProblemsSolved++;
  }
}

// ---- RUNTIME EXECUTION ----

// We instantiate the child class
const coderProfile = new CompetitiveCoder("prashant_cse", 1577, 720);

// 🟢 ACCESING INHERITED DATA & METHODS:
console.log(coderProfile.baseRating); // Output: 1577 (Got it from Parent)
coderProfile.loginNotification(); // Output: 📡 System Alert: prashant_cse has logged into the terminal.

// 🟢 ACCESSING CHILD SPECIFIC METHODS:
coderProfile.submitCode(); // Output: 🚀 prashant_cse just pushed a solution! Total solved: 721

// ⚠️ The JS Rule: JavaScript DOES NOT support multiple inheritance. A class can only have one extends target.
// If you try to write class Child extends ParentA, ParentB {}, your code will instantly crash with a syntax error.

// STATIC
// However, when you prefix a property or method with the static keyword, you tell JavaScript:
//  "This belongs strictly to the class blueprint itself. Do not give this to the child instances."

// not called on insta

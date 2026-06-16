/**
 * =========================================================================
 * SECTION 1: OBJECT PROPERTIES & ADVANCED MECHANICS
 * =========================================================================
 */

// 1. Property Descriptors (Hidden Meta-data of Object properties)
// JS me har property ke paas hidden control flags hote hain: writable, enumerable, aur configurable.
const user = {
  name: "Prashant",
  role: "AI-ML Developer",
};

// Kisi property ke hidden attributes dekhna:
console.log(Object.getOwnPropertyDescriptor(user, "name"));
/* Output:
{
  value: 'Prashant',
  writable: true,      // Kya value badli ja sakti hai?
  enumerable: true,    // Kya yeh loops (for...in, Object.keys) me dikhegi?
  configurable: true   // Kya yeh delete ya change ki ja sakti hai?
}
*/

// Ek aisi property banana jise koi badal ya delete na kar sake:
Object.defineProperty(user, "id", {
  value: 101,
  writable: false, // Read-only ban gaya
  enumerable: true,
  configurable: false, // Delete nahi ho sakta
});

user.id = 999; // Silent failure (strict mode me error dega), value change nahi hogi!
delete user.id; // false (delete nahi hoga)
console.log(user.id); // Output: 101

// =========================================================================
// 2. OBJECT FREEZING VS SEALING (High-Frequency Interview Question)
// =========================================================================

const dev1 = { name: "Alex" };
const dev2 = { name: "John" };

// A. Object.seal() -> Khidki-darwaze band!
// Purani properties modify ho sakti hain, par NAYI property add nahi ho sakti, aur delete nahi ho sakti.
Object.seal(dev1);
dev1.name = "Alexis"; // ✅ Allowed (Existing change ho sakta hai)
dev1.age = 22; // ❌ Not Allowed (Nayi property add nahi hogi)

// B. Object.freeze() -> Ekdum Patthar! (Maximum Restriction)
// Na toh koi nayi property add hogi, na delete hogi, aur na hi existing property change hogi.
Object.freeze(dev2);
dev2.name = "Johnny"; // ❌ Not Allowed (Kuch change nahi hoga)

// ⚠️ THE TRAP: Shallow Freeze/Seal
// freeze aur seal sirf top-level par kaam karte hain. Agar nested object hai, toh andar ka data badal jayega!
const complexObj = {
  skills: { primary: "React" },
};
Object.freeze(complexObj);
complexObj.skills.primary = "Next.js"; // ✅ Badal gaya! Kyunki 'skills' ke andar freeze nahi laga.
// Isko solve karne ke liye hume "Deep Freeze" function khud likhna padta hai recursive tarike se.

// =========================================================================
// 3. OBJECT ITERATION METHODS
// =========================================================================
const tools = { backend: "Node", database: "MongoDB" };

console.log(Object.keys(tools)); // ['backend', 'database'] -> Keys ka array
console.log(Object.values(tools)); // ['Node', 'MongoDB'] -> Values ka array
console.log(Object.entries(tools)); // [['backend', 'Node'], ['database', 'MongoDB']] -> Key-Value pairs ka multi-dimensional array

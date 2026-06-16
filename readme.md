# REVISION OF JAVASCRIPT

## Variable

A revision series of javascript

1. var
   var is the old way of declaring variables in JavaScript

- Function scoped
- Can be reassigned
- Can be redeclared

2. let

- Block scoped
- Can be reassigned
- Cannot be redeclared in same scope

3. const

- Block scoped
- Cannot be reassigned
- Cannot be redeclared

### Data types

## JavaScript Data Types

JavaScript provides different types of data that can be stored in variables.  
These are mainly divided into **two categories**:

1. **Primitive Data Types**
2. **Non-Primitive (Reference) Data Types**

---

#### 1. Primitive Data Types

Primitive data types are basic data types that store a **single value** and are **immutable**.

JavaScript has **7 primitive data types**:

- String
- Number
- BigInt
- Boolean
- Undefined
- Null
- Symbol

#### 2. Non-Primitive (Reference) Data Types

Non-primitive data types store collections or complex data.
These are mutable and stored by reference.

Main non-primitive types:

- Object
- Array
- Function

### type of memories

#### 1.Stack Memory

It handles execution tracking and temporary primitive storage.
Primitive Values: Data types of fixed, static sizes (Number, String, Boolean, undefined, null, Symbol, BigInt).
Object References: The Stack does not hold the actual data of an object or an array. Instead, it stores a pointer (the memory address) that points to where the object is located inside the Heap.

#### 2. Heap Memory

The Heap is a massive, unstructured pool of memory

What goes into the Heap?
Reference Types: Objects, Arrays, Functions, and Regular Expressions. Because these data structures are dynamic and can grow or change at runtime, JavaScript cannot pre-determine how much space they will need on the stack.

```
let age = 22;
let name = "Prashant";

let skills = ["JavaScript", "React"];
let newSkills = skills;

newSkills.push("Node.js");
```

Visualizing the Memory State:
Stack (Variable & References) Heap (Actual Reference Data)
age = 22 (Primitive value) name = "Prashant" (Primitive value)
skills = Reference #001 Reference #001 -> ["JavaScript", "React", "Node.js"]
newSkills = Reference #001

Because heap allocations are unstructured, the engine cannot just pop them off when a function finishes. It relies on a mechanism called the Garbage Collector (GC) to free up memory.

Modern engines use an algorithm called Mark-and-Sweep:

- 1. The GC starts at the global object (the "root").
- 2. It "marks" all objects reachable from the root.
- 3. Any object left unmarked (unreachable) is "swept" away, freeing its heap memory.

## Main things

```
function resetUser(obj) {
    obj = { name: "Rahul", age: 30 }; // Pure object ko reassign kar diya!
}

let player = { name: "Amit", age: 22 };
resetUser(player);

console.log(player.name); // Output kya hoga? "Amit" ya "Rahul"?
```

Answer is : Amit because you reassign obj new memory

```
function updatePlayer(obj) {
    // Naya object assign nahi kar rahe, balki existing properties ko update kar rahe hain
    obj.name = "Rahul";
    obj.age = 30;
}

let player = { name: "Amit", age: 22 };
updatePlayer(player);

console.log(player); // Output: { name: 'Rahul', age: 30 } ✅ Update ho gaya!
```

If we have a lot of properties

```
function updatePlayerSmart(obj) {
    let newData = { name: "Rahul", age: 30, score: 99 };

    // Ye obj ka address nahi badlega, bas newData ko obj ke andar copy kar dega
    Object.assign(obj, newData);
}

let player = { name: "Amit", age: 22 };
updatePlayerSmart(player);

console.log(player); // Output: { name: 'Rahul', age: 30, score: 99 } ✅
```

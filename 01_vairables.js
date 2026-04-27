const account_id = 1234567890;
const account_name = "John Doe";

let account_balance = 1000.5;

// let account_balance = false; // This will cause an error because account_balance is already declared as a let variable

account_balance = "update"; // This will not cause an error because account_balance is declared as a let variable, but it will change the type of the variable from a number to a string

var account_status = "active";
var account_status = true; // This will not cause an error because var allows redeclaration of variables

console.log("Account ID:", account_id);
console.log("Account Name:", account_name);
console.log("Account Balance:", account_balance);
console.log("Account Status:", account_status);

console.table({ account_id, account_name, account_balance, account_status });

// Data types
const is_active = true; // boolean
const user_name = "John Doe"; // string
const user_age = 30; // number
const user_address = {
  // object
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
};

const unique_id = Symbol("unique_id"); // symbol
// undefined and null are also data types in JavaScript, but they are not used in this example
const user_hobbies = ["reading", "traveling", "cooking"]; // array

console.log("Is Active:", is_active);
console.log("User Name:", user_name);
console.log("User Age:", user_age);
console.log("User Address:", user_address);
console.log("User Hobbies:", user_hobbies);
console.log("Unique ID:", unique_id);

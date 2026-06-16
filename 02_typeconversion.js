// explicit Type Casting
// when you intentionally convert a value
String(123); // "123"
String(true); // "true"
String(null); // "null"
String(undefined); // "undefined"

(123).toString(); // "123"
// null.toString(); // ❌ TypeError: Cannot read properties of null

// B. Converting to a Number
// Number(value): Converts the entire value. If it can't, it returns NaN (Not a Number).
// parseInt(value) / parseFloat(value): Parses from left to right until it hits a non-numeric character.
Number("123"); // 123
Number("123abc"); // NaN (fails because of 'abc')
Number(true); // 1
Number(false); // 0
Number(null); // 0  <- ⚠️ Crucial interview gotcha!
Number(undefined); // NaN <- ⚠️ Another crucial gotcha!

parseInt("123abc"); // 123 (stops at 'a')
parseInt("abc123"); // NaN (starts with a non-numeric character)

+"456"; // 456 (Unary plus shortcut)

Boolean(""); // false
Boolean([]); // true  <- ⚠️ Empty arrays are TRUTHY objects!
Boolean({}); // true  <- ⚠️ Empty objects are TRUTHY objects!
!!1; // true

// implicit (Type Coercion)
// When JavaScript automatically converts a value under the hood.

// Interview Gauntlet: == vs ===
// === (Strict Equality): Checks both value and type without conversion.
// == (Loose Equality): Triggers implicit coercion using the Abstract Equality Comparison Algorithm if types don't match.

// Number(null) is 0, but Number(undefined) is NaN.

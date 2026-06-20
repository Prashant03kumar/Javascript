// when a function rememer outer function variable even after the outer function got end means it executed still remember
// Jab ek function apne outer function ke variables ko yaad rakhta hai, even after outer function khatam ho chuka ho, usse closure kehte hain.

function bankAccount() {
  let balance = 1000;

  return function (amount) {
    balance += amount;
    console.log(balance);
  };
}

const account = bankAccount();

account(500); // 1500
account(200); // 1700
account(100); // 1800

// LEXICAL SCOPING
/*
The simplest way to remember Lexical Scoping is the "Inside-Out" rule:
A function written inside another function has full access to the variables of its parent scope (outer functions) and the global scope.
However, a parent scope cannot look down inside a child function to read its local variables.
*/
const globalBonus = 100; // 1. Global Scope

function outerContest() {
  const internalRating = 1577; // 2. Outer Function Scope

  function innerProblem() {
    // 3. Local Inner Scope
    const problemPoints = 10;

    // 🟢 LEXICAL LOOKUP CHAIN:
    // - 'problemPoints' is found instantly locally.
    // - 'internalRating' is not here, so JS looks out into its lexical parent 'outerContest' -> Found!
    // - 'globalBonus' is not here or in the parent, so JS looks out to the Global scope -> Found!
    const totalScore = internalRating + problemPoints + globalBonus;
    console.log(`Total Score: ${totalScore}`); // Output: 1687
  }

  innerProblem();

  // ❌ LEXICAL VIOLATION:
  // Parent scopes cannot look inside child scopes.
  // console.log(problemPoints); // ReferenceError: problemPoints is not defined
}

outerContest();

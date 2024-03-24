const x: number = 102;
console.log(x);

//
// give types to arguments of a function
function greet(name: string) {
  console.log("Hello ", name);
}

greet("Ajay");

//
// return type of a function
function sum(a: number, b: number): number {
  return a + b;
  // return "abcd"
}

sum(10, 30);

//
// Return true or false based on if a user is 18+
function isLegal(age: number): boolean {
  return age > 18;
}

console.log(isLegal(2));

//
// a function that takes another function as input, and runs it after 1 second.
function callAfter1S(fn: () => void) {
  setTimeout(fn, 1000);
}

callAfter1S(function () {
  console.log("hi there");
});

// 
// noImplecetAny
const greet1 = (name: string) => `Hello, ${name}!`;
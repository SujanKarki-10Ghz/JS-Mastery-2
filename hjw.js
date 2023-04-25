/**How JS works */

/**compilation
 * Compilation phase:
 *              => tokenizing / lexing => divding codes into small chunks
 *              => Parsing => parses that chunks of code
 *              => Abstract Syntax Tree  => Code Generation
 */

/**code execution
 * In JS Code executes inside execution context: global execution context, local execution context
 * what is global execution context? =>creation phase, code execution phase => added to stack
 *  =>gets popped after the execution of code
 * what is local execution context? =>
 */

/**why compilation
 * => Early Error checking => Syntax errors etc.
 * => Determining appropriate scope for variables
 */

//How javaScript code executes?

//closures

// console.log(this); // {}
// console.log(window); //{}
// console.log(firstName); //=> undefined
// var firstName = "Harshit";
// console.log(firstName); // => Harshit

console.log(this); //{}
// console.log(window); // {}
console.log(myFunction); //undefined
console.log(fullName); // undefined

//function decleration
// function myFunction() {
//   console.log("This is my function");
// }

//function expression
console.log(myFunction); //=> This is my function
var myFunction = function () {
  console.log("This is my function");
};
var firstName = "Harshit";
var lastName = "Sharma";
var fullName = firstName + " " + lastName;
console.log(fullName); // Harshit Sharma

//same o/p in case of const
console.log(first_name); //=> Cannot access 'first_name' before initialization
let first_name = "Harshit";
console.log(first_name);

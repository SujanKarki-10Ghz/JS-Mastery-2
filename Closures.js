//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
//In other words, a closure gives you access to an outer function's scope from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time.

/**Example 1 */
function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}
const ans = printFullName("harshit", "sharma");
// console.log(ans);
ans();

/**Example 2 */
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

  //init() creates a local variable called name and a function called displayName().
  // The displayName() function is an inner function that is defined inside init(),
  // and is available only within the body of the init() function.
  // Note that the displayName() function has no local variables of its own.
   //However, since inner functions have access to the variables of outer functions,
   // displayName() can access the variable name declared in the parent function, init().


   /**Example 3 */
   function hello(x){
    const a = "varA"
    const b = "varB"
    return function(){
        console.log(a, b, x);
    }
   }

   const answer = hello("arg");
   //console.log(answer);
   answer();


   /**Example 4 */

//    const myFunction =function(power){
//         return function (number){
//             return number ** power;
//         }
//    }
const myFunction = (power) => (number)=> number ** power;
   const square = myFunction(2);
   const ans1 = square(3);
   console.log(ans1);
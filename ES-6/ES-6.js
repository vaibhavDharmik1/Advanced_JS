// ARROW Function
// Arrow functions allows a short syntax for writing function expressions.
// You don't need the function keyword, the return keyword, and the curly brackets.
// Arrow functions do not have their own this. They are not well suited for defining object methods.
// Arrow functions are not hoisted. They must be defined before they are used.
// Using const is safer than using var, because a function expression is always a constant value.
// ES5
// var x = function(x, y) {
//     return x * y;
//  }
 
//  // ES6
//  const x = (x, y) => x * y;
// ...........................................................
// Promise
// A Promise is a JavaScript object that links "Producing Code" and "Consuming Code".
// "Producing Code" can take some time and "Consuming Code" must wait for the result.
// const myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() { myResolve("Vaibhav"); }, 3000);
//   });
  
//   myPromise.then(function(value) {
//    console.log(value);
//   });
// .................................................................
// Class Method
// Use the keyword class to create a class.
// Always add a constructor() method.
// Then add any number of methods.
// class ClassName {
//     constructor() { ... }
//     method_1() { ... }
//     method_2() { ... }
//     method_3() { ... }
//   }

// ..............................................................
// default Parameter values
// function myFunction(x, y = 10) {
//     // y is 10 if not passed or undefined
//     return x + y;
//   }
//   myFunction(5); // will return 15
// ..............................................................
// NEW MATH METHODS
// a) THE MATH.trunc() METHOD
// Math.trunc(4.9);    // returns 4
// Math.trunc(4.7);    // returns 4
// Math.trunc(4.4);    // returns 4
// Math.trunc(4.2);    // returns 4
// Math.trunc(-4.2);    // returns -4

// b) The Math.cbrt() Method
// Math.cbrt(8);    // returns 2
// Math.cbrt(64);    // returns 4
// Math.cbrt(125);    // returns 5

// c)The Math.sign() Method
// Math.sign(-4);    // returns -1
// Math.sign(0);    // returns 0
// Math.sign(4);    // returns 1

// d)The Math.log2() Method
// Math.log2(2);    // returns 1

// e)The Math.log10() Method
// Math.log10(10);    // returns 1
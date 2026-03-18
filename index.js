// memory phase/creation phase and code phase/execution phase

console.log("global execution context starts");
var globalVariable = "i am a global variable";
console.log(globalVariable);
globalFunction();
console.log("global execution context ends");
var globalFunction = function () {
  console.log("inside global function");
};
// function globalFunction() {
//   console.log("inside global function");
// }

// whenever a js code is run , gec is created and it has two phases : memory and code phase

// all variables goes to memory phase

// in code phase execution happens line by line.

// memory phase = var globalVariable = undefined , var globalFunction = undefined

// code phase = >
//console.log("global execution context starts");
//var globalVariable = "i am a global variable"; // value is assigned
//console.log(globalVariable);
//globalFunction();  // undefined()

// global execution context starts
// i am a global variable
// TypeError: globalFunction is not a function

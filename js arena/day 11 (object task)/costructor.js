// /--task1--/

/* Is it possible to create functions A and B so that new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
If it is, then provide an example of their code. */

// /---myMistake--/


/* let obj ={}
 function A(Name, age, course) {
  (this.Name = Name), (this.age = age), (this.course = course);
  return obj;
}
function B(Name, age, course) {
   (this.Name = Name), (this.age = age), (this.course = course);
   return obj;
}
// let a = new A(nitin, 19, Dm);
// let b = new B(nitin, 19, Dm);

console.log(new A() == new B()); */

// answer

/* let obj = {};

function A() { return obj; }
function B() { return obj; }

console.log( new A() == new B() ); */

//--task-2---

/* Create a constructor function Calculator that creates objects with 3 methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance: */
/* 
let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() ); */

/* 
let calculator = {
  sum() {
    return this.a + this.b
  },
  mul(){
    return this.a * this.b
  },
  read (){
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
}
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
 */

/* function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */
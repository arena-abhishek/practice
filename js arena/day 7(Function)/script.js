/* 1. function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
checkAge(20)
 */
// let accessAllowed = (age > 18) ?  : false;
// let age = prompt('age?', 18);

/* function showMessage(){
        
 let age =confirm ('Did parents allow you?');
 let accessAllowed = (age > 18) ? true : false;
}
showMessage() */

// using a question mark operator?

/* function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
} */

/* 2.Write a function min(a,b) which returns the least of two numbers a and b.

For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1 */

/*  function min(a, b) {
  if (a < b) {
    return a;
  }  
    return b;
  
}
let value = min(5,3);
console.log(min(5,3))
 */
/* 3.Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1 */

let x = prompt(`x?`, ``);
let n = prompt(`n?`, ``);
function pow(x, n) {
  return x ** n;
}
if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert(pow(x, n));
}

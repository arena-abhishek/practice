//---task1---

/* Create a script that prompts the visitor to enter two numbers and then shows their sum.
 */

//---answer---

/* let = +prompt(`first Number?`, "" );
let = +prompt(`second Number?`, "" );
alert = (a+b); */

//---task2---

/* According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.

For instance:

alert( 1.35.toFixed(1) ); // 1.4
In the similar example below, why is 6.35 rounded to 6.3, not 6.4?

alert( 6.35.toFixed(1) ); // 6.3
How to round 6.35 the right way? */

//---answer---

/* console.log((1.35).toFixed(1));
console.log(Math.round(6.35 * 10) / 10); */

//---task3---

/* Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

The resulting value must be returned as a number.

The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null. */

//---answer---

/* function readNumber(){
        let num;
      
        do {
          num = prompt("Enter a number please?", 0);
        } while ( !isFinite(num) );
      
        if (num === null || num === '') return null;
      
        return +num;
      }
      
      alert(`Read: ${readNumber()}`);
 */

//  ---task4---

/* This loop is infinite. It never ends. Why?

      let i = 0;
      while (i != 10) {
        i += 0.2;
      } */

//---answer---

/* let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert(i);
} */


//---task5---

/* The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

Examples of its work:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525 */

//---answer---

/* function random(min, max) {
  return min + Math.random() * (max - min);
}
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5))
 */


//---task6---


/* Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

Any number from the interval min..max must appear with the same probability.

Examples of its work:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5 */

//---answer---

function randomInteger(min, max) {
  let rdom = min + Math.random() * (max + 1 - min);
  return Math.round(rdom)
}
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5))








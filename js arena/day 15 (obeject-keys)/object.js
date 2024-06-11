/* ----task 1 ----

         Sum the properties
importance: 5
There is a salaries object with arbitrary number of salaries.

Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

If salaries is empty, then the result must be 0.

For instance:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); */


//----answer----




/* function sumSalaries(salaries){
    let sum  = 0;
    for(let salary of Object.values(salaries)){
        sum += salary;
    }
    return sum;
}
let salaries ={
    "Jhon": 100,
    "Pete": 300,
    "Marry": 250
};
console.log(sumSalaries(salaries)); */


//----task 2 ----


/* 
Write a function count(obj) that returns the number of properties in the object:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) );
 */


//----answer----



function count(obj){
    return Object.keys(obj).length
}


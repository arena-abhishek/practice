/* let user = {
  name: "John",
  age: 30
};

let key  = prompt("What do you want to know about the user?", "name")
alert( user[key] ) */
/* 
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name);
alert(user.age) */

/*   hello object  */

//Q-a. Write the code, one line for each action:

// 1.Create an empty object user.
// 2.Add the property name with the value Johan.
// 3.Add the property surname with the value Smith.
// 4.Change the value of the name to Pete.
// 5.Remove the property name from the object.

/* let user = { name: "Johan" };
user.surname = 25;
// console.log(user);
for (let prop in user){ 
  console.log(prop);
  console.log(user[prop]);
}
delete user.name;
for (let prop in user){ 
  console.log(prop);
  console.log(user[prop]);
} */

// alert(`user: ${user.name} ${user.surname}`)

/* check for emptiness */

/* Q-b Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
 */

function isEmpty(obj) {
 for (let key in obj) {
  return false;
} 
return true ;
}
console.log(isEmpty())
/* Sum object properties */

/* Q-c We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.
 */

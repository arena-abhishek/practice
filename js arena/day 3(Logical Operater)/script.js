//  --logical operators
/* alert( null || 2 || undefined );

alert( alert(1) || 2 || alert(3) );

alert( 1 && null && 2 );

alert( alert(1) && alert(2) ) ;

alert( null || 2 && 3 || 4 ); */

// let a = prompt(`your age is`,18 )
/* let age =100;
if (age >= 14 && age <= 90);
console.log(age); */

let begin = prompt(`Who's there?`)

if (begin == `Admin`) {
    
}

else if (begin == `Other`){
    alert(`I don't know you`);
}
else if(begin == ''){
    alert(`canceled`);
}
else{
    alert(`You are not part of this`)
}


let Admin = prompt(`Password`)
if (Admin ==`TheMaster`){
    alert(`Welcome!`);
}

else if (Admin == `Other`){
    alert(`Wrong password`);
}
else if(Admin == ''){
    alert(`canceled`);
}
else{
    alert(`You are not part of this`)
}

/* 
let begin = prompt(`Who's there?`)
let message = (begin == `Master`) ? `Password?`||(Password == `TheMaster`) ? `Welcome!`  :
(begin == `Other`) ? `I don't know you` || (Password == `Other`) ? `Wrong password` :
(begin == '') ? `canceled`:
`You are not part of this`;
alert(message)  */



/* let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}
 */




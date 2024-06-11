/* let a = document.getElementsByTagName("h1");
let b = document.getElementsByTagName("h2");
let c = document.getElementsByTagName("h3");
let d = document.getElementsByTagName("h4");
let e = document.getElementsByTagName("h5");
let f = document.getElementsByTagName("h6"); */

// function mOver(obj) {
//     obj.innerHTML = "Thank You"
//   }

//   function mOut(obj) {
//     obj.innerHTML = "Mouse Over Me"
//   }

// function fun()
// {
//     a[0].style.fontSize = '5rem';
// }

// function hoverin()
// {
//     a[0].style.fontSize = '5rem';
//     b[0].style.fontSize = '3.5rem';
//     c[0].style.fontSize = '3rem';
//     d[0].style.fontSize = '2.5rem';
//     e[0].style.fontSize = '2.25rem';
//     f[0].style.fontSize = '2rem';

// }
// function hoverout()
// {
//     a[0].style.fontSize = '2.5rem';
//     b[0].style.fontSize = '1.75rem';
//     c[0].style.fontSize = '1.5rem';
//     d[0].style.fontSize = '1.25rem';
//     e[0].style.fontSize = '1.125rem';
//     f[0].style.fontSize = '1rem';

// }
/* function hoverin() {
  a[0].style.fontSize = "5rem";
}
function hoverout() {
  a[0].style.fontSize = "2.5rem";
}
function hoverin2() {
  b[0].style.fontSize = "3.5rem";
}
function hoverout2() {
  b[0].style.fontSize = "1.75rem";
}
function hoverin3() {
  c[0].style.fontSize = "3rem";
}
function hoverout3() {
  c[0].style.fontSize = "1.5rem";
}
function hoverin4() {
  d[0].style.fontSize = "2.5rem";
}
function hoverout4() {
  d[0].style.fontSize = "1.25rem";
}
function hoverin5() {
  e[0].style.fontSize = "2.25rem";
}
function hoverout5() {
  e[0].style.fontSize = "1.125rem";
}
function hoverin6() {
  f[0].style.fontSize = "2rem";
}
function hoverout6() {
  f[0].style.fontSize = "1rem"; */
// }

// let a = document.querySelectorAll("example")
// function hoverin(){
//     // a[0].style.fontSize = "5rem";
//     a.forEach(element => {
//         element.style.color="red"

//     });
// }
let a = document.getElementsByClassName("heading");

a.addEventListener("onmouseover", hoverin);

function hoverin() {
  a.style.fontSize = "5rem";
}
function hoverout() {
  a[0].style.fontSize = "2.5rem";
  a[1].style.fontSize = "1.75rem";
  a[2].style.fontSize = "1.5rem";
  a[3].style.fontSize = "1.25rem";
  a[4].style.fontSize = "1.125rem";
  a[5].style.fontSize = "1rem";
}

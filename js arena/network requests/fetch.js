/* let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = await fetch(url);

let commits = await response.json(); // read response body and parse as JSON

alert(commits[0].author.login);

if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let json = await response.json();
} else {
  alert("HTTP-Error: " + response.status);
}

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login)); */

async function f() {
  let response = await fetch("/article/fetch/logo-fetch.svg");

  let blob = await response.blob(); // download as Blob object

  // create <img> for it
  let img = document.createElement("img");
  img.style = "position:fixed;top:10px;left:10px;width:100px";
  document.body.append(img);

  // show it
  img.src = URL.createObjectURL(blob);

  setTimeout(() => {
    // hide after three seconds
    img.remove();
    URL.revokeObjectURL(img.src);
  }, 3000);
}
f();
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script>
    function myfunction() {
      const xhttp = new XMLHttpRequest();
      xhttp.open("POST", "demo_ajax.php");
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.onload = function () {
        document.getElementById("demo").innerHTML = this.responseText;
      }
      xhttp.send("fname=Mary");
    }
  </script>
</head>

<body>

  <button onclick="myfunction()">Click me!</button>

  <h1 id="demo"></h1>
</body>

</html>
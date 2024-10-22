<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

</head>

<body>
 php array/array.php <!-- indexed array -->
  <?php
  $cars = array("Volvo", "BMW", "Toyota");
  echo $cars[0];
  ?><br>
  <?php
  $cars = array("Volvo", "BMW", "Toyota");
  $cars[1] = "Ford";
  var_dump($cars);
  ?><br>
  <?php
  $cars = array("Volvo", "BMW", "Toyota");
  foreach ($cars as $x) {
    echo "$x <br>";
  }
  ?><br>
  <?php
  $cars[0] = "Volvo";
  $cars[1] = "BMW";
  $cars[2] = "Toyota";

  array_push($cars, "Ford");
  var_dump($cars);
  ?><br>

<pre>
<?php
$cars[5] = "Volvo";
$cars[7] = "BMW";
$cars[14] = "Toyota";

array_push($cars, "Ford");
var_dump($cars);
?>
</pre>
<br><br>

</body>

</html>
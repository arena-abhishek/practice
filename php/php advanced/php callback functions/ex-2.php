<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <?php

  $strings = ["apple", "banana", "cherry", "date"];
  $lengths = array_map(function ($item) {
    return strlen($item); }, $strings);
  print_r($lengths);
  ?>
</body>

</html>
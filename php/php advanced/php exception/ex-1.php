<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <!-- throwing exception without try catch statement -->
  <?php
  function divide($dividend, $divisor)
  {
    if ($divisor == 0) {
      throw new Exception("Division by zero");
    }
    return $dividend / $divisor;
  }

  echo divide(5, 0);
  ?>
 
</body>

</html>
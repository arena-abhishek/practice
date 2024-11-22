<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <!-- throwing exception with try catch statement -->
  <?php
  function divid($dividend, $divisor)
  {
    if ($divisor == 0) {
      throw new Exception("Division by zero");
    }
    return $dividend / $divisor;
  }

  try {
    echo divid(5, 0);
  } catch (Exception $e) {
    echo "Unable to divide.";
  }
  ?>
</body>

</html>
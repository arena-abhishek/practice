<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <h1>Welcome to my home page!</h1>
  <p>Some text.</p>
  <p>Some more text.</p>
  <?php include 'footer.php'; ?>
  <br><br>

  <h1>Welcome to my home page!</h1>
  <?php require 'noFileExists.php';
  echo "I have a $color $car.";
  ?>
  <br><br>

  <h1>Welcome to my home page!</h1>
  <?php include 'noFileExists.php';
  echo "I have a $color $car.";
  ?>
  <br><br>

  <h1>Welcome to my home page!</h1>
  <?php include 'vars.php';
  echo "I have a $color $car.";
  ?>
</body>

</html>
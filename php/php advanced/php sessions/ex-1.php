<?php
// start the session 
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<?php
// set a session variable 
$_SESSION["favcolor"] = "blue";
$_SESSION["favanimal"] = "cat";
echo "Session variables are set.";
?>
</body>
</html>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>read and open file </title>
</head>

<body>
  <?php
  $myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
  //output one line until end-of-file
  while (!feof($myfile)) {
    echo fgets($myfile) . "<br>";
  }
  fclose($myfile);
  ?>

</body>

</html>
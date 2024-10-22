<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<?php  
$i = 1;

do {
  echo $i;
  $i++;
} while ($i < 6);
?>  
<br>

<?php  
$i = 8;

do {
  echo $i;
  $i++;
} while ($i < 6);
?>

<p>As you can see, the code is executed once, even if the condition is never true.</p> 
<br>
<?php  
$i = 1;

do {
  if ($i == 3) break;
  echo $i;
  $i++;
} while ($i < 6);
?>
<br>
<?php  
$i = 0;

do {
  $i++;
  if ($i == 3) continue;
  echo $i;
} while ($i < 6);
?>  
<br>

<?php  
$i = 0;

while ($i < 100) {
  $i+=10;
  echo "$i<br>";
}
?>

</body>
</html>
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

while ($i < 6) {
  echo $i;
  $i++;
} 
?>  
<br>
<?php  
$i = 1;

while ($i < 6) {
  if ($i == 3) break;  
  echo $i;
  $i++;
} 
?>  
<br>
<?php  
$i = 0;

while ($i < 6) {
  $i++;
  if ($i == 3) continue;  
  echo $i;
} 
?>  
<br>
<?php  
$i = 1;

while ($i < 6):
  echo $i;
  $i++;
endwhile;
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
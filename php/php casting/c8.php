<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
<pre>
<?php
$a = array("Volvo", "BMW", "Toyota"); // indexed array
$b = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43"); // associative array

$a = (object) $a;
$b = (object) $b;

//To verify the type of any object in PHP, use the var_dump() function:
var_dump($a);
var_dump($b);
?> 
</pre>

<p>Indexed arrays converts into objects with the index number as property name and the value as property value.</p>

<p>Associative arrays converts into objects with the keys as property names and values as property values.</p>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<?php
$x = 'We are the so-called \'Vikings\' from the north.';
echo $x;
?> 


<?php
$x = "We are the so-called \"Vikings\" from the north.";
echo $x;
?> 

<?php
$x = "Escape php variable name \$myvar";
echo $x;
?>
<pre>
<?php
$x = "Hello\rWorld";
echo $x;
?> 
</pre>

<p>To preserve any whitespace or line breaks, we have wrapped the result in a PRE element</p>

<pre>
<?php
$x = "Hello\tWorld";
echo $x;
?> 
</pre>

<p>To preserve any whitespace or line breaks, we have wrapped the result in a PRE element</p>


<p>A backslash followed by three integers will result in a octal value:</p>

<?php
$x = "\110\145\154\154\157";
echo $x;
?> 

<p>A backslash followed by an 'x' and a hex number represents a hex value:</p>

<?php
$x = "\x48\x65\x6c\x6c\x6f";
echo $x;
?> 


</body>
</html>
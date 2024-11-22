<?php
$cookie_name = "user";
$cookie_value = "john Doe";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); //86400 = 1day
?>
<?php
setcookie("test_cookie", "test", time() + 3600, '/');
?>
<?php
$cookie_name = "user";
$cookie_value = "Alex Porter";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");
?>
<?php
// set the expiration date to one hour ago
setcookie("user", "", time() - 3600);
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
  if (!isset($_COOKIE[$cookie_name])) {
    echo "cookie named '" . $cookie_name . "' is not set!";
  } else {
    echo "cookie '" . $cookie_name . "' is set!<br>";
    echo "value is: " . $_COOKIE[$cookie_name];
  }
  ?>
  <br>
  <?php
  if (count($_COOKIE) > 0) {
    echo "Cookies are enabled.";
  } else {
    echo "Cookies are disabled.";
  }
  ?>
  <br>
  <?php
  echo "Cookie 'user' is deleted.";
  ?>
</body>
</html>

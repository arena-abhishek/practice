<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <?php
  /* variable to check */
  $ip = "2001:0db8:85a3:08d3:1319:8a2e:0370:7334";

  //Validae Ip as ipv6
  if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6) === false) {
    echo ("$ip is not a valid IPv6 address");
  } else {
    echo ("$ip is a valid IPv6 address");
  }

  ?>
</body>

</html>
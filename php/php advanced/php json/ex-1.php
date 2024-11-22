<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>

 <!--  // json_encode() returns the JSON representation of a value. -->
  <?php
  $age = array("Peter" => 35, "Ben" => 37, "Joe" => 43);

  echo json_encode($age);
  ?>
  <br><br>
  <?php
  $cars = array("Volvo", "BMW", "Toyota");

  echo json_encode($cars);
  ?>
  <br><br>

<!--   // json_decode() returns the PHP representation of a JSON string. -->
  <?php
  $jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';

  var_dump(json_decode($jsonobj));
  ?>
  <br><br>
  <?php
  $jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';

  var_dump(json_decode($jsonobj, true));
  ?>
  <br><br>

<!--   // accessing the decoded values -->
  <?php
  $jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';

  $obj = json_decode($jsonobj);

  echo $obj->Peter;
  echo $obj->Ben;
  echo $obj->Joe;
  ?>
  <br><br>

  <?php
  $jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';

  $arr = json_decode($jsonobj, true);

  echo $arr["Peter"];
  echo $arr["Ben"];
  echo $arr["Joe"];
  ?>
  <br><br>

<!--   // looping through the values -->
  <?php
  $jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';

  $obj = json_decode($jsonobj);

  foreach ($obj as $key => $value) {
    echo $key . " => " . $value . "<br>";
  }
  ?>
  <br><br>
  <?php
  $jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';

  $arr = json_decode($jsonobj, true);

  foreach ($arr as $key => $value) {
    echo $key . " => " . $value . "<br>";
  }
  ?>
  <br><br>
</body>

</html>
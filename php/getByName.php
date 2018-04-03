<?php
  header("Content-Type: application/json; charset=UTF-8");


  $servername = "108.179.232.92";
  $username = "dbklab_dbklab";
  $password = "onlinedbk123";
  $dbname = "dbklab_salguide";

  $name = $_GET['name'];

  $conn = mysqli_connect($servername, $username, $password, $dbname);
  if(!$conn){
  	die("Connection failed: " .mysqli_connecet_error());
  }

  $tableQ = "SELECT table_name FROM information_schema.tables WHERE TABLE_SCHEMA='dbklab_salguide'";
  $tableList = mysqli_query($conn, $tableQ);
  $tableNames = array();
  while($row = mysqli_fetch_assoc($result)){
    $tableNames[] = $row["table_name"];
  }

  foreach ($tableNames as $tableName)  {
    $showData = "SELECT * FROM $tableName WHERE `name` = $name";
    $data = array();
    $result = mysqli_query($conn, $showData);

    if(mysqli_num_rows($result) > 0){
    	while($row = mysqli_fetch_assoc($result)){
    		$data[] = $row;
    	}
    }
  }
  echo json_encode($data);
  mysqli_close($conn);
 ?>

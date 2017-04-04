<?php
  header("Content-Type: application/json; charset=UTF-8");


  $servername = "108.179.232.92";
  $username = "dbklab_dbklab";
  $password = "onlinedbk123";
  $dbname = "dbklab_salguide";

  $conn = mysqli_connect($servername, $username, $password, $dbname);
  if(!$conn){
  	die("Connection failed: " .mysqli_connecet_error());
  }

  $year = $_GET['year'];
  $tableName = $year."Data";

  $showData = "SELECT * FROM $year";
  $data = array();
  $result = mysqli_query($conn, $showData);

  if(mysqli_num_rows($result) > 0){
  	while($row = mysqli_fetch_assoc($result)){
  		$data[] = $row;
  	}
  }

  echo json_encode($data);
  mysqli_close($conn);

 ?>

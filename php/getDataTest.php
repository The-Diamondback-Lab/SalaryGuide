<?php
  header("Content-Type: application/json; charset=UTF-8");


  $servername = "108.179.232.92";
  $username = "dbklab_dbklab";
  $password = "dbklab";
  $dbname = "dbklab_salguide";

  $conn = mysqli_connect($servername, $username, $password, $dbname);
  if(!$conn){
  	die("Connection failed: " .mysqli_connecet_error());
  }

  $showData = "SELECT * FROM 2017Data";
  $data = array();
  $result = mysqli_query($conn, $showData);

  if(mysqli_num_rows($result) > 0){
  	while($row = mysqli_fetch_assoc($result)){
  		$data[] = $row;
  	}
  } else {
  	echo "Empty";
  };
  echo json_encode($data);
  mysqli_close($conn);

 ?>

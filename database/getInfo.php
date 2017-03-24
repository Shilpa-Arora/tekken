<?php

include('connect.php');

if($_GET['id']==='coach') {
	// print_r($_GET);
	$query = "SELECT * FROM tbl_coach";
  $result = mysqli_query($link, $query);
	$result = mysqli_fetch_array($result, MYSQL_ASSOC);

	echo json_encode($result);

}

else if($_GET['id']==='player') {
	// print_r($_GET);
	$query = "SELECT * FROM tbl_players";
  $result = mysqli_query($link, $query);
	$rows = array();
	while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}

echo json_encode($rows);

}

else {
	$query = "SELECT * FROM tbl_players WHERE player_id =" . $_GET['id'] ;
  $result = mysqli_query($link, $query);
	$result = mysqli_fetch_array($result, MYSQL_ASSOC);

	echo json_encode($result);
}

?>

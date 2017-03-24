<?php
	// Set up connection credentials
	$user = "root";
	$pass = "root";
	$url = "localhost";
	$db = "db_united";

	$link = mysqli_connect($url, $user, $pass, $db);

	/* check connection */
	if(mysqli_connect_errno()) {
		printf("Connect failed: %s\n", mysqli_connect_error());
		exit();
	}
?>

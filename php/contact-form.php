<?php

if (isset($_POST['name']) && isset($_POST['message']) && isset($_POST['email'])) {
	$name = $_POST['name'];
	$message = $_POST['message'];
	$mailFrom = $_POST['email'];
	
	$mailTo = "simbijela@gmail.com";
	$headers = "Email: ".$mailFrom.".\r\n" ."Message: ".$message.".\r\n";
	$txt = "You have received an e-mail from ".$name.".\n\n";

	mail($mailTo, $txt, $headers);
}

?>

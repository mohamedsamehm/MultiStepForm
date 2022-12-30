<?php
$to = "ms627673@gmail.com";
$subject = "Injured Accident Email";

$message = "
<html>
<head>
<title>Injured Accident Email</title>
</head>
<body>
<p>type of accident: " .$_POST['type'] . "</p>
<p>Who was hurt: " .$_POST['who'] . "</p>
<p>Place of the accident: " .$_POST['states'] . "</p>
<p>Date of accident: " .$_POST['date'] . "</p>
<p>Name: " .$_POST['first_name']. ' '.$_POST['last_name'] ."</p>
<p>Treatments: " .implode(",", $_POST['treatment']) . "</p>
<p>Mobile Phone: " .$_POST['phoneNumber'] . "</p>
<p>Email address: " .$_POST['email'] . "</p>
<p>Description of incident: " .$_POST['description'] . "</p>
</body>
</html>
";

// It is mandatory to set the content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers. From is required, rest other headers are optional
$headers .= 'From: '.$_POST['email']. "\r\n";
$headers .= 'Cc: ms627673@gmail.com' . "\r\n";
$send_email = mail($to,$subject,$message,$headers);
echo ($send_email) ? 'success' : 'error';
?>
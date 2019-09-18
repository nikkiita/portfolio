<?php
$name = $POST['name'];
$visitor_email = $POST['email'];
$message = $POST['message'];


$email_from = 'nikita-moonen@hotmail.be';

$email_subject = 'New Form Submission';
$email_body = "User Name: $name.\n".
                "User Email: $visitor_email.\n".
                "User_message: $message.\n";

  $to = "nikita-moonen@outlook.com";
  $headers = "From: $email_from \r\n";
 $headers .= "Reply-To: $visitor_email \r\n";
 
 mail($to,$email_subject,$email_body,$headers);

 headers("Location:index.html");



?>
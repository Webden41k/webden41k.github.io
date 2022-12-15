<?php 
    
  $to = "youremail@mail.com"; // this is your Email address
    
  $from = $_POST['email'];
  $first_name = $_POST['fname'];
  $last_name = $_POST['lname'];
  $subject = $_POST['type'];
    
  $message = $first_name . " " . $last_name . "\n\n" . $_POST['message'];
   
  $headers = "From:" . $from;
 
  mail($to, $subject, $message, $headers);
  
  // You can also use header('Location: index.html'); to redirect to another page.
?>
<?php
$result="";

if(isset($_POST['submit'])){
require 'PHPMailerAutoload.php';
$mail = new PHPMailer;

$mail->Host='smtp.gmail.com';
$mail->Port=587;
$mail->SMTPAuth=true;
$mail->SMTPSecure='tls';
$mail->Username='dderrickmatheww@gmail.com';
$mail->Password='blind565';

$mail->setForm($_POST['email']);
$mail->addAddress('dderrickmatheww@gmail.com');
$mail->addReplyTo($_POST['email']);

$mail->isHTML(true);
$mail->Subject='Competition Submission: '.$_POST['firstname']." ".$_POST['lastname'];
$mail->Body='<h1 class="text-centered"> Game: '.$_POST['game'].'<br> First Name: '.$_POST['firstname'].'<br>Last Name: '.$_POST['lastname'].'<br>Age: '.$_POST['age'].'<br>Email: '.$_POST['email'].'<br>City & State '.$_POST['city_state'].'</h1>'


if(!$mail->send()){
$result='Something went wrong. Make sure your email is correct and try again'
}
else{
    $result="Thanks ".$_POST['firstname'].' for submitting a competition form. We will review your request and get back to you shortly!'
}

}
?>
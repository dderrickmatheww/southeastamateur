<?php
if(isset($_POST['submit'])){
    $firstname=$_POST['firstname'];
    $lastname=$_POST['lastname']; 
    $city_state=$_POST['city_state'];
    $email=$_POST['email'];
    $age=$_POST['age'];
    $game=$_POST['game'];

    $to='dderrickmatheww@gmail.com';
    $subject='Customer Submission';
    $message='Name: '.$firstname." ".$lastname."\n".'City & State: '.$city_state."\n".'Age: '.$age."\n".'Game: '.$game;
    $headers='From: '.$email;

    if(mail($to, $subject, $message, $headers)){
        echo 

    }
    else{
        echo "Something went wrong!";
    }
}
?>
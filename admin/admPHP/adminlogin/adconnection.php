<?php

$host = "localhost";
$adminname = "root"; 
$password = ""; 
$dbname = "hallbooking";

$conn = new mysqli($host, $adminname, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>
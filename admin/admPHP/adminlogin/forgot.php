<?php
// Include database connection
include 'adconnection.php';

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the entered username
    $username = $_POST['username'];

    // Generate a random password
    $new_password = generateRandomPassword();

    // Update the password in the database
    $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);
    $sql = "UPDATE users SET password = '$hashed_password' WHERE username = '$username'";
    $result = mysqli_query($conn, $sql);

    if ($result) {
        // Password updated successfully
        echo "Your new password is: " . $new_password;
    } else {
        // Error updating password
        echo "Error updating password. Please try again.";
    }
}

// Function to generate a random password
function generateRandomPassword($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randomString;
}
?>

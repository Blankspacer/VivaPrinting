<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $phone = trim($_POST['phone']);
    $email = trim($_POST['email']);
    $address = trim($_POST['address']);

    // Validate the form fields
    if (empty($name) || empty($phone) || empty($email) || empty($address)) {
        echo "<script>alert('All fields are required!');</script>";
    } else {
        // Send confirmation email
        $to = $email;
        $subject = "Order Confirmation";
        $message = "Dear $name,\n\nThank you for your purchase! Here are your details:\n\n" .
                   "Name: $name\nPhone: $phone\nAddress: $address\n\n" .
                   "Your order will be processed soon.\n\nBest regards,\nOur Store Team";
        $headers = "From: no-reply@example.com";

        if (mail($to, $subject, $message, $headers)) {
            echo "<script>alert('Thank you for your purchase! A confirmation email has been sent.');</script>";
        } else {
            echo "<script>alert('Error: Unable to send email.');</script>";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Provide Your Details</title>
</head>
<body>
    <h1>Checkout Form</h1>
    <form method="POST" action="">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br><br>

        <label for="phone">Phone Number:</label><br>
        <input type="tel" id="phone" name="phone" required><br><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>

        <label for="address">House Address:</label><br>
        <textarea id="address" name="address" required></textarea><br><br>

        <button type="submit">Confirm Checkout</button>
    </form>
</body>
</html>

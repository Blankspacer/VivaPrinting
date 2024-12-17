<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = htmlspecialchars(trim($_POST['name']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $email = htmlspecialchars(trim($_POST['email']));
    $address = htmlspecialchars(trim($_POST['address']));

    // Validate fields
    if (empty($name) || empty($phone) || empty($email) || empty($address)) {
        die("Error: All fields are required.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Error: Invalid email format.");
    }

    // Prepare order details
    $orderDetails = "Name: $name\nPhone: $phone\nEmail: $email\nAddress: $address";

    // Send confirmation email
    $to = $email;
    $subject = "Order Confirmation";
    $message = "Thank you for your order! Here are your details:\n\n$orderDetails";
    $headers = "From: no-reply@example.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your order! A confirmation email has been sent to $email.";
    } else {
        echo "Error: Unable to send confirmation email.";
    }
} else {
    echo "Invalid request method.";
}
?>

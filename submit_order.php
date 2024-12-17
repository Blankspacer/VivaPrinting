<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $product = htmlspecialchars($_POST['product']);
    $price = floatval($_POST['price']);
    $quantity = intval($_POST['quantity']);

    // Calculate total price
    $total = $price * $quantity;

    // Email details
    $to = "your-email@example.com"; // Replace with your email address
    $subject = "New Order for $product";
    $message = "Product: $product\n";
    $message .= "Price: $$price\n";
    $message .= "Quantity: $quantity\n";
    $message .= "Total: $$total\n";

    $headers = "From: no-reply@example.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Your order has been placed successfully!";
    } else {
        echo "Failed to place your order. Please try again.";
    }
} else {
    echo "Invalid request.";
}
?>

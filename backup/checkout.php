<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];

    // Store or process the order (in a real application, this would be stored in a database)
    $orderDetails = [
        'fullname' => $fullname,
        'email' => $email,
        'address' => $address,
        'phone' => $phone,
        'cart' => $_SESSION['cart'] // assuming cart is stored in the session
    ];

    // Simulate saving to a database or sending confirmation email
    // For demonstration purposes, we will just output the order details

    echo "<h3>Order Confirmed</h3>";
    echo "<p>Thank you, $fullname, for your order!</p>";
    echo "<p>Your order will be shipped to:</p>";
    echo "<p>$address</p>";

    // Here you can save the order to a database and send an email confirmation
} else {
    // If the form isn't submitted, redirect to the cart page
    header('Location: cart.php');
}
?>

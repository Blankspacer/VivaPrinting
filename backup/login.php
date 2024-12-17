<?php
session_start();

// ReCAPTCHA secret key from Google
$recaptchaSecret = 'YOUR_GOOGLE_RECAPTCHA_SECRET_KEY';

// Get the data from the form
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';
$recaptchaResponse = $_POST['g-recaptcha-response'] ?? '';

// Check if CAPTCHA is valid
$recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify';
$recaptchaData = [
    'secret' => $recaptchaSecret,
    'response' => $recaptchaResponse
];

$options = [
    'http' => [
        'method' => 'POST',
        'content' => http_build_query($recaptchaData),
        'header' => "Content-Type: application/x-www-form-urlencoded\r\n"
    ]
];
$context = stream_context_create($options);
$response = file_get_contents($recaptchaUrl, false, $context);
$responseKeys = json_decode($response, true);

// Check if CAPTCHA is valid
if (intval($responseKeys['success']) !== 1) {
    echo "CAPTCHA verification failed. Please try again.";
    exit;
}

// Simulate user authentication (replace with actual database query)
$users = [
    'testuser' => 'password123', // Replace with real data from a database
];

if (isset($users[$username]) && $users[$username] === $password) {
    // Login successful
    $_SESSION['username'] = $username;
    header('Location: dashboard.php'); // Redirect to a protected page
} else {
    // Login failed
    echo "Invalid username or password.";
}
?>

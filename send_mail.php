<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['to']) || !isset($data['subject']) || !isset($data['message'])) {
    echo json_encode(['success' => false, 'error' => 'Missing fields']);
    exit;
}

$to = $data['to'];
$subject = $data['subject'];
$message = $data['message'];
$headers = "From: info@vivamartprinting.com";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => 'Mail function failed']);
}
?>

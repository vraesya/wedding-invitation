<?php
// Konfigurasi database
$servername = "localhost";  // biasannya tetap localhost di cPanel
$dbname = "valeryfa_invitation";     // database yang kamu buat

// Koneksi
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Ambil data dari request POST
$name = $_POST['name'] ?? '';
$status = $_POST['status'] ?? '';
$message = $_POST['message'] ?? '';

// Validasi sederhana
if (!$name || !$status) {
    echo json_encode(['success' => false, 'message' => 'Nama dan status wajib diisi.']);
    exit;
}

// Prepare & execute query
$stmt = $conn->prepare("INSERT INTO rsvp (name, status, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $status, $message);
$result = $stmt->execute();

if ($result) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => $stmt->error]);
}

$stmt->close();
$conn->close();

<?php
$configPath = __DIR__ . '/config.php';
$config = file_exists($configPath) ? require $configPath : require __DIR__ . '/config.sample.php';
header('Content-Type: application/json; charset=utf-8');
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (!empty($config['allowed_origin']) && $origin && $origin !== $config['allowed_origin']) {
  http_response_code(403);
  echo json_encode(['ok' => false, 'error' => 'origin_not_allowed']);
  exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
  exit;
}
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'invalid_json']);
  exit;
}
$input = $data['input'] ?? [];
$lead = $data['lead'] ?? [];
$company = trim($input['company'] ?? '');
$name = trim($input['name'] ?? '');
$phone = trim($input['phone'] ?? '');
$email = trim($input['email'] ?? '');
if ($company === '' || $name === '' || $phone === '') {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'missing_required_fields']);
  exit;
}
$record = [
  'received_at' => gmdate('c'),
  'ip_hash' => hash('sha256', $_SERVER['REMOTE_ADDR'] ?? ''),
  'payload' => $data
];
@file_put_contents($config['storage_file'], json_encode($record, JSON_UNESCAPED_UNICODE) . PHP_EOL, FILE_APPEND | LOCK_EX);
$subject = 'Nuevo lead NearTec: ' . $company . ' · ' . ($lead['label'] ?? 'Sin score');
$body = "Nuevo lead desde NearTec\n\nEmpresa: $company\nContacto: $name\nWhatsApp: $phone\nCorreo: $email\nScore: " . ($lead['score'] ?? '-') . "\nCalificación: " . ($lead['label'] ?? '-') . "\nSiguiente acción: " . ($lead['nextStep'] ?? '-') . "\n\nPayload:\n" . json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
$headers = 'From: ' . $config['from_email'] . "\r\n" . 'Reply-To: ' . ($email ?: $config['from_email']) . "\r\n";
$mailOk = false;
if (function_exists('mail')) {
  $mailOk = @mail($config['to_email'], $subject, $body, $headers);
}
echo json_encode(['ok' => true, 'stored' => true, 'mail' => $mailOk]);

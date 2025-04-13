<?php
header('Content-Type: application/json');

// Configuración del correo
$to = 'documentaciones.mauriciogomez@gmail.com'; // Cambiar por tu dirección de correo
$subject = 'Nueva solicitud de presupuesto - NHRefrigeraciones';

// Validar y sanitizar los datos del formulario
$nombre = filter_input(INPUT_POST, 'nombre', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$telefono = filter_input(INPUT_POST, 'telefono', FILTER_SANITIZE_STRING);
$servicio = filter_input(INPUT_POST, 'servicio', FILTER_SANITIZE_STRING);
$tipo_equipo = filter_input(INPUT_POST, 'tipo_equipo', FILTER_SANITIZE_STRING);
$mensaje = filter_input(INPUT_POST, 'mensaje', FILTER_SANITIZE_STRING);

// Validar campos requeridos
if (empty($nombre) || empty($email) || empty($telefono) || empty($servicio) || empty($mensaje)) {
    echo json_encode(['success' => false, 'message' => 'Por favor complete todos los campos requeridos.']);
    exit;
}

// Construir el cuerpo del mensaje
$body = "Nueva solicitud de presupuesto:\n\n";
$body .= "Nombre: $nombre\n";
$body .= "Email: $email\n";
$body .= "Teléfono: $telefono\n";
$body .= "Servicio solicitado: $servicio\n";
$body .= "Tipo de equipo: " . ($tipo_equipo ? $tipo_equipo : 'No especificado') . "\n";
$body .= "Mensaje:\n$mensaje\n";

// Cabeceras del correo
$headers = "From: $nombre <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Enviar el correo
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Mensaje enviado con éxito. Nos pondremos en contacto pronto.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error al enviar el mensaje. Por favor intente nuevamente.']);
}
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Dirección de correo donde recibirás los datos
    $to = "Redeath414@gmail.com"; 
    $subject = "Nueva Cita - Reserva de Cita";

    $firstName = htmlspecialchars($_POST['First_Name']);
    $lastName  = htmlspecialchars($_POST['Last_Name']);
    $email     = htmlspecialchars($_POST['Email']);
    $phone     = htmlspecialchars($_POST['Contact_No']);
    $date      = htmlspecialchars($_POST['Appointment_Date']);
    $time      = htmlspecialchars($_POST['Appointment_Time']);

    $message = "Información de la nueva cita:\n\n";
    $message .= "Nombre: $firstName $lastName\n";
    $message .= "Correo: $email\n";
    $message .= "Teléfono: $phone\n";
    $message .= "Fecha: $date\n";
    $message .= "Hora: $time\n";

    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo "<script>alert('¡Tu cita se ha enviado con éxito!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Ocurrió un error al enviar la cita. Por favor, inténtalo de nuevo.'); window.location.href='index.html';</script>";
    }
}
?>
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('appointmentForm');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch('php/enviar.php', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                Swal.fire({
                    title: '¡Cita Enviada!',
                    text: 'Tu solicitud se ha recibido correctamente.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#10b981'
                }).then(() => {
                    form.reset();
                });
            } else {
                throw new Error('Error en el servidor');
            }
        } catch (error) {
            Swal.fire({
                title: 'Ocurrió un problema',
                text: 'No se pudo enviar la cita. Inténtalo de nuevo.',
                icon: 'error',
                confirmButtonText: 'Reintentar',
                confirmButtonColor: '#ef4444'
            });
        }
    });
});
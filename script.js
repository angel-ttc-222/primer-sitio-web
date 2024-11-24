// Validación de formulario
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    const name = document.getElementById('nombre').value;
    const email = document.getElementById('correo').value;
    const contacto = document.getElementById('contacto').value;
    if (name === '' || email === '' || contacto === '' ) {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else {
        alert('¡Formulario enviado correctamente!');
    }
});
// JavaScript source code
// Esperar a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar el botón y el elemento de mensaje por sus IDs
    var boton = document.getElementById("cambiarMensaje");
    var mensaje = document.getElementById("mensaje");

    // Añadir un evento de clic al botón
    boton.addEventListener("click", function () {
        // Cambiar el contenido del elemento de mensaje
        mensaje.textContent = "¡Este mensaje ha sido cambiado por script.js!";
    });
});

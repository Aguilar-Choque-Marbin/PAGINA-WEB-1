// JavaScript source code
// Esperar a que el documento est� completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar el bot�n y el elemento de mensaje por sus IDs
    var boton = document.getElementById("cambiarMensaje");
    var mensaje = document.getElementById("mensaje");

    // A�adir un evento de clic al bot�n
    boton.addEventListener("click", function () {
        // Cambiar el contenido del elemento de mensaje
        mensaje.textContent = "�Este mensaje ha sido cambiado por script.js!";
    });
});

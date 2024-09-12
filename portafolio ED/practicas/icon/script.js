// Selecciona el elemento <link> del favicon
const favicon = document.getElementById('favicon');

// Cambia el favicon cuando el usuario intenta salir de la página
window.addEventListener('beforeunload', function() {
    favicon.hret='favicon-salida.ico.png'; // Cambia a tu favicon de salida
});
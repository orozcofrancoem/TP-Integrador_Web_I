// SELECCIÓN DE ELEMENTOS DEL DOM
const formContacto = document.getElementById("form-contacto");
const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const inputTelefono = document.getElementById("telefono");
const inputAsunto = document.getElementById("asunto");
const inputMensaje = document.getElementById("mensaje");
const contenedorResumen = document.getElementById("resumen-envio");

// EXPRESIONES REGULARES
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexTelefono = /^\d{7,15}$/; // solo números, entre 7 y 15 dígitos

// EVENTO PRINCIPAL DEL FORMULARIO
formContacto.addEventListener("submit", (e) => {
  e.preventDefault(); // prevenimos el envío tradicional por defecto

  limpiarErrores(); // utilizamos método propio para limpiar errores previos

// obtenemos valores y los limpiamos con trim 
  const nombre = inputNombre.value.trim();
  const email = inputEmail.value.trim();
  const telefono = inputTelefono.value.trim();
  const asunto = inputAsunto.value.trim();
  const mensaje = inputMensaje.value.trim();

  let esValido = true;

if (nombre === "" || nombre.length < 3) {
    mostrarError("error-nombre", "El nombre debe tener al menos 3 caracteres.")
    esValido = false;
}

if (email === "") {
    mostrarError("error-email", "El correo electrónico es obligatorio.")
} else if (!regexEmail.test(email)) {
    mostrarError("error-email", "Ingrese un correo electrónico válido (ej. ejemplo@gmail.com).")
    esValido = false;
}

if (telefono === "") {
    mostrarError("error-telefono", "El número de teléfono es obligatorio.")
    esValido = false;
} else if (!regexTelefono.test(telefono)) {
    mostrarError("error-telefono", "Ingrese un número de teléfono válido (solo números, entre 7 y 15 dígitos).")
    esValido = false;
}

if (asunto === "") {
    mostrarError("error-asunto", "El asunto es obligatorio.")
    esValido = false;
}

if (mensaje === "" || mensaje.length < 10) {
    mostrarError("error-mensaje", "El mensaje debe contener al menos 10 caracteres.")
    esValido = false;
}

if (esValido) {
    generarResumenDOM(nombre, email, telefono, asunto, mensaje);
    formContacto.reset(); // sirve para limpiar todo el formulario
}
});

function mostrarError(idElemento, mensaje) {
    const errorSpan = document.getElementById(idElemento);
    if (errorSpan) {
        errorSpan.textContent = mensaje;
    }
}

function limpiarErrores() {
    const errores = document.querySelectorAll(".error-msg");
    errores.forEach((span) => { span.textContent = "";
    });
    contenedorResumen.innerHTML = ""; // Limpia el resumen anterior si existe
}



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
    esValido = false;

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
    const errores = formContacto.querySelectorAll(".error-msg");
    errores.forEach((span) => { span.textContent = "";
    });
    contenedorResumen.replaceChildren(); // Limpia el resumen anterior si existe
}

// AGREGA UN DATO AL RESUMEN

function agregarDatoResumen(etiqueta, valor) {
    const parrafo = document.createElement("p");
    const titulo = document.createElement("strong");

    titulo.textContent = `${etiqueta}: `;
    parrafo.append(titulo, document.createTextNode(valor));

    contenedorResumen.appendChild(parrafo);
}

// GENERA EL RESUMEN DEL FORMULARIO

// Esta es la función que ya llamás cuando esValido es verdadero. Crea el título y utiliza agregarDatoResumen() para mostrar los cinco campos
function generarResumenDOM(nombre, email, telefono, asunto, mensaje) {
    const titulo = document.createElement("h2");
    titulo.textContent = "Resumen de tu consulta";

    const aviso = document.createElement("p");
    aviso.textContent =
        "Los datos se validaron correctamente. Esta demostración no envía la consulta.";

    contenedorResumen.append(titulo, aviso);

    agregarDatoResumen("Nombre", nombre);
    agregarDatoResumen("Correo electrónico", email);
    agregarDatoResumen("Teléfono", telefono);
    agregarDatoResumen("Asunto", asunto);
    agregarDatoResumen("Mensaje", mensaje);
}



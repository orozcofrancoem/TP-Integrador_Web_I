// ===== 1. CARGAR UN COMPONENTE HTML =====

async function cargarComponente(selector, ruta) {
    const contenedor = document.querySelector(selector);

    if (!contenedor) {
        return;
    }

    try {
        const respuesta = await fetch(ruta);

        if (!respuesta.ok) {
            throw new Error(`No se pudo cargar ${ruta}`);
        }

        contenedor.innerHTML = await respuesta.text();
    } catch (error) {
        console.error(error);

        const mensaje = document.createElement("p");
        mensaje.textContent =
            "No se pudo cargar esta sección. Recargá la página.";

        contenedor.replaceChildren(mensaje);
    }
}

// ===== 2. MARCAR LA PÁGINA ACTUAL EN EL MENÚ =====

function marcarPaginaActual() {
    const paginaActual =
        window.location.pathname.split("/").pop() || "index.html";

    const enlaces = document.querySelectorAll(
        ".header-principal nav a"
    );

    enlaces.forEach((enlace) => {
        const paginaEnlace = new URL(enlace.href)
            .pathname.split("/").pop();

        const estaActivo = paginaEnlace === paginaActual;

        enlace.classList.toggle("activo", estaActivo);

        if (estaActivo) {
            enlace.setAttribute("aria-current", "page");
        } else {
            enlace.removeAttribute("aria-current");
        }
    });
}

// ===== 3. INICIALIZAR LOS COMPONENTES =====

async function iniciarComponentes() {
    await Promise.all([
        cargarComponente("#cabecera-sitio", "./componentes/header.html"),
        cargarComponente("#pie-sitio", "./componentes/footer.html")
    ]);

    marcarPaginaActual();
}

iniciarComponentes();
# Re Piola Games — Trabajo Final Integrador

Bienvenido/a al repositorio oficial de **Re Piola Games**, una plataforma web orientada a la comunidad gamer desarrollada como **Trabajo Final Integrador (TFI)** para la asignatura **Desarrollo Web I** de la Tecnicatura en Desarrollo de Software (Universidad de La Punta - ULP).

---

## Información General

- **Nombre del Proyecto:** Re Piola Games
- **Materia:** Desarrollo Web I
- **Institución:** Universidad de La Punta (ULP)
- **Año:** 2026

### Integrantes del Equipo

- **Franco Emmanuel Mario Orozco** ([@orozcofrancoem](https://github.com/orozcofrancoem))
- **Luciano Emanuel Borsotto** ([@lucianoborsotto-dev](https://github.com/lucianoborsotto-dev))

---

## Descripción del Sitio

**Re Piola Games** es un portal interactivo de videojuegos creado como un sitio web estático pero altamente interactivo, dinámico y totalmente adaptativo (Responsive Web Design). La plataforma integra maquetación semántica, estilos personalizados mediante CSS3 con Flexbox, y lógica en JavaScript del lado del cliente para la validación de formularios y la navegación en un carrusel de imágenes circular.

---

## Enlaces del Proyecto

- **Repositorio en GitHub:** [https://github.com/orozcofrancoem/TP-Integrador_Web_I.git](https://github.com/orozcofrancoem/TP-Integrador_Web_I.git)
- **Sitio Publicado en GitHub Pages:** [https://orozcofrancoem.github.io/TP-Integrador_Web_I/](https://orozcofrancoem.github.io/TP-Integrador_Web_I/)

---

## Estructura de Páginas

El sitio se compone de tres páginas HTML independientes integradas mediante una barra de navegación común:

1. **Página Principal (`index.html`):**
   - **Cabecera Sticky:** Menú de navegación accesible estructurado con Flexbox que resalta visualmente la página activa.
   - **Hero & Carrusel:** Portada con un carrusel dinámico y circular programado en JavaScript con controles interactivos (`#btn-ant` y `#btn-sig`).
   - **Sección "Lo más popular":** Presentación de juegos destacados mediante tarjetas (_cards_) dispuestas con Flexbox.

2. **Catálogo de Juegos (`juegos.html`):**
   - Secciones informativas y catálogo completo de videojuegos.
   - Disposición en cuadrícula flexible de tres columnas en computadoras de escritorio, dos columnas en tablets y una columna en dispositivos móviles.
   - Enlaces directos a sitios oficiales de cada videojuego.

3. **Página de Contacto (`contacto.html`):**
   - Formulario con cinco campos: Nombre completo, Correo electrónico, Teléfono, Asunto y Mensaje.
   - Validación interactiva en tiempo de envío utilizando **JavaScript Vanilla y Expresiones Regulares**.
   - Inserción dinámica de mensajes de error asociados a cada campo y generación de un **resumen de consulta** en el DOM mediante `createElement()` sin recargar la página.

---

## Tecnologías Utilizadas y Buenas Prácticas

### HTML5 Semántico

- Implementación rigurosa de etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Asociación explícita entre campos de formulario y sus correspondientes etiquetas `<label>`.
- Atributos `alt` descriptivos en todas las imágenes para asegurar la accesibilidad web.

### CSS3 Modular & Flexbox

El proyecto organiza sus reglas de diseño de manera clara en la carpeta `css/`:

- `base.css`: Definición de variables globales (`:root`), tipografía personalizada (Verdana/Tahoma) y resets generales.
- `header.css`: Barra de navegación responsive, logo e indicadores de sección activa.
- `componentes.css`: Estilos para botones primarios y secundarios reutilizables (`.btn`, `.btn-secundario`).
- `inicio.css`: Portada hero, controles del carrusel y tarjetas de juegos destacados.
- `juegos.css`: Maquetación multicolumna adaptativa del catálogo de juegos.
- `contacto.css`: Formulario estilizado, alertas de error y contenedor para el resumen dinámico.
- `footer.css`: Pie de página responsivo con información institucional y redes sociales.

### JavaScript (ES6+ Vanilla)

- **Carrusel Circular (`js/carrusel.js`):**
  - Almacenamiento de rutas y textos alternativos dentro de un array de objetos (`carruselData`).
  - Cálculo de índice mediante operador módulo (`%`) para lograr navegación circular continua en ambas direcciones.
- **Validación de Formulario (`js/contacto.js`):**
  - Limpieza previa de espacios en blanco mediante `.trim()`.
  - Validación de correo electrónico mediante Expresión Regular (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).
  - Validación de formato telefónico mediante Expresión Regular (`/^\d{7,15}$/`).
  - Mensajes de error en el DOM asociados a cada campo (sin uso de `alert()` nativos).
  - Creación y renderizado dinámico del resumen de la consulta enviada utilizando `createElement()` y `append()`.

---

## Estructura del Repositorio

```text
TP-Integrador_Web_I/
├── css/
│   ├── base.css           # Variables CSS, colores, tipografía y layout base
│   ├── header.css         # Navegación principal y comportamiento sticky
│   ├── componentes.css    # Botones e interfaces reutilizables
│   ├── inicio.css         # Estilos del hero, carrusel y tarjetas populares
│   ├── juegos.css         # Diseño multicolumna del catálogo de juegos
│   ├── contacto.css       # Estilos de formularios, mensajes de error y resumen
│   └── footer.css         # Pie de página y enlaces a redes sociales
├── js/
│   ├── carrusel.js        # Lógica del carrusel circular dinámico
│   └── contacto.js        # Validación del formulario y manipulación del DOM
├── img/                   # Fondos del carrusel y carátulas de videojuegos
├── index.html             # Página de inicio
├── juegos.html            # Catálogo de productos/servicios
├── contacto.html          # Página de contacto con formulario
└── README.md              # Documentación oficial del proyecto
```

---

## Recursos Externos

- **Iconos:** [Font Awesome 6.5.2](https://fontawesome.com/) vía CDN.
- **Tipografías:** Fuentes del sistema (`Verdana`, `Tahoma`, `sans-serif`).
- **Imágenes:** Material gráfico utilizado con fines exclusivamente didácticos y académicos.

---

© 2026 **Re Piola Games** · Trabajo Final Integrador · Universidad de La Punta (ULP).

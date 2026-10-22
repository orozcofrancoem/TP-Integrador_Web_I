//  ARRAY DE DATOS DEL CARRUSEL

const carruselData = [
  {
    id: 1,
    src: "./img/01.png",
    alt: "Imagen en carrusel",
    caption: "Imagen 1",
  },
  {
    id: 2,
    src: "./img/02.jpg",
    alt: "Imagen en carrusel",
    caption: "Imagen 2",
  },
  {
    id: 3,
    src: "./img/03.jpg",
    alt: "Imagen en carrusel",
    caption: "Imagen 3",
  },
  {
    id: 4,
    src: "./img/04.jpg",
    alt: "Imagen en carrusel",
    caption: "Imagen 4",
  },
  {
    id: 5,
    src: "./img/05.jpg",
    alt: "Imagen en carrusel",
    caption: "Imagen 5",
  },
  {
    id: 6,
    src: "./img/06.jpg",
    alt: "Imagen en carrusel",
    caption: "Imagen 6",
  },
  {
    id: 7,
    src: "./img/07.jpg",
    alt: "Imagen en carrusel",
    caption: "Imagen 7",
  },
  {
    id: 8,
    src: "./img/08.jpg",
    alt: "Imagen en carrusel",
    caption: "Imagen 8",
  },
];

// REFERENCIAS A LOS ELEMENTOS DEL DOM

const caruselImage = document.getElementById("img-carrusel");
// const caruselCaption = document.getElementById("img-carrusel");
// const counterElement = document.getElementById("img-carrusel");
const prevBtn = document.getElementById("btn-ant");
const nextBtn = document.getElementById("btn-sig");

//INICIALIZACIÓN DEL ÍNDICE ACTUAL Y ACTUALIZACIÓN INICIAL DEL CARRUSEL

// Se ejecuta al cargar la página para mostrar el primer elemento del array

let currentIndex = 0;
updateCarusel();

// FUNCIÓN DE ACTUALIZACIÓN DEL CARRUSEL

function updateCarusel() {
  const currentItem = carruselData[currentIndex]; // Obtenemos el elemento correspondiente al índice actual
  caruselImage.src = currentItem.src; // Actualizamos los atributos y contenidos de la imagen de forma dinámica
  caruselImage.alt = currentItem.alt; // Requisito: texto alternativo adecuado

  // Actualizamos el texto de la leyenda (caption)
  // caruselCaption.textContent = currentItem.caption;

  // Actualizamos el contador numérico en pantalla (ej: 1 de 4)
  // counterElement.textContent = `${currentIndex + 1} de ${carruselData.length}`;
}

// FUNCIONES DE NAVEGACIÓN CIRCULAR

// Función para avanzar a la siguiente imagen
function nextSlide() {
  // Operación módulo para lograr un funcionamiento circular:
  // Si estamos en la última (ej. índice 3 de 4 elementos),
  // (3 + 1) % 4 da 0, volviendo automáticamente a la primera.
  currentIndex = (currentIndex + 1) % carruselData.length;
  updateCarusel();
}

// Función para retroceder a la imagen anterior
function prevSlide() {
  // Operación módulo para retroceso circular:
  // (currentIndex - 1 + length) % length evita números negativos y
  // permite saltar desde el índice 0 directamente al último.
  currentIndex = (currentIndex - 1 + carruselData.length) % carruselData.length;
  updateCarusel();
}

//ASIGNACION DE EVENTOS A LOS BOTONES DE NAVEGACIÓN

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

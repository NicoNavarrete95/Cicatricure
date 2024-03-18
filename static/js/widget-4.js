const URLactual = window.location.pathname;
const componentWrapper = document.querySelectorAll(".component-wrapper");
const secciones2 = document.querySelector(".lineas-home-section");
const secciones3 = document.querySelector(".before-section");

// Función para ocultar elementos si la URL no es la raíz ("/")
function hideIfNotHome(element) {
  if (URLactual == "/") {
    setTimeout(function () {
      element.classList.remove('invisible');
    });
  }
}

// Ocultar elementos usando la función
hideIfNotHome(secciones2);
hideIfNotHome(secciones3);

console.log(3)
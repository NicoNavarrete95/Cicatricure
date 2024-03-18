const URLactual = window.location.pathname;
const componentWrapper = document.querySelectorAll(".component-wrapper");
const secciones = document.querySelector(".before-section");

if (URLactual === "/") {
  setTimeout(function () {

    // Insertar secciones2 antes del segundo componente
    if (componentWrapper[1] && secciones) {
      componentWrapper[1].parentNode.insertBefore(secciones, componentWrapper[1]);
    }
  }, 1000);
}


console.log(1);
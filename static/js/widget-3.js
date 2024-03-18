const URLactual = window.location.pathname;
const componentWrapper = document.querySelectorAll(".component-wrapper");
const secciones2 = document.querySelector(".before-section_2");

if (URLactual === "/") {
  setTimeout(function () {

    // Insertar secciones2 antes del segundo componente
    if (componentWrapper[2] && secciones2) {
      componentWrapper[2].parentNode.insertBefore(secciones2, componentWrapper[2]);
    }
  }, 1000);
}


console.log(2);
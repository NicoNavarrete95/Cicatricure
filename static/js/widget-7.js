const URLactual = window.location.pathname;
if (URLactual == "/p/cicatrices") {
  setTimeout(function () {

    const main = document.querySelector("#root-app");

    main.innerHTML += '<div class="banner-custom_page"> <div class="banner-cicatrices_desktop"> <img src="https://iili.io/JEq1VtI.png" alt=""> </div> <div class="banner-cicatrices_mobile"> <img src="https://iili.io/JEq1MwN.png" alt=""> </div></div><div class="custom-text-section"> <div class="custom-text-section_container"> <div class="custom-text-section_img"> <img src="https://iili.io/JEqE4bp.png" alt=""> </div> <div class="custom-text-section_text"> <div class="custom-text-section_text-title"> <h3 class="custom-text-section_text-title-h3 cicatrices-title">Un Cómplice en la Transformación</h3> </div> <div class="custom-text-section_text-paragraph"> <p class="custom-text-section_text-p">Cicatricure, con su enfoque en la innovación y la ciencia, ha creado cremas diseñadas especícamente para ayudar a transformar la apariencia de las cicatrices y estrías. Más que un producto de cuidado de la piel, se convierte en un cómplice en tu viaje hacia la confianza y la aceptación. Cicatricure entiende que cada piel es diferente, y el proceso de desvanecimiento de cicatrices y estrías es único para cada persona. Con paciencia y consistencia, las cremas de Cicatricure se convierten en un acompañante en tu viaje de transformación personal.(...) <a href="/cicatrices" class="ver-cicatrices">ver más</a></p></div> </div> </div></div>';
}, 200);

  setTimeout(function () {
    const carrousel = document.querySelector(".mshops-recommendations-wrapper");
    const intro = document.querySelector(".banner-custom_page");
    intro.insertAdjacentElement("afterend", carrousel);
  }, 200);
}
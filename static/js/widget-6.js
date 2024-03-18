const URLactual = window.location.pathname;
if (URLactual == "/p/antiarrugas") {
  setTimeout(function () {

    const main = document.querySelector("#root-app");

    main.innerHTML += '<div class="banner-custom_page"> <div class="banner-cicatrices_desktop"> <img src="https://iili.io/JEqIOa1.png" alt=""> </div> <div class="banner-cicatrices_mobile"> <img src="https://iili.io/JEqIN3P.png" alt=""> </div></div><div class="custom-text-section"> <div class="custom-text-section_container"> <div class="custom-text-section_img"> <img src="https://iili.io/J1R9Z7V.png" alt=""> </div> <div class="custom-text-section_text"> <div class="custom-text-section_text-title"> <h3 class="custom-text-section_text-title-h3">Cicatricure Age Care: Tu aliado en la belleza atemporal</h3> </div> <div class="custom-text-section_text-paragraph"> <p class="custom-text-section_text-p">En la travesía de la vida, cada línea en nuestro rostro cuenta una historia, pero eso no signica que no podamos influir en cómo se narran. Cicatricure Age Care se presenta como la combinación perfecta para preservar la frescura y vitalidad en la expresión de su rostro. Entendemos que la verdadera belleza no tiene edad y que, a medida que acumulamos experiencias, queremos que nuestra piel refleje una juventud atemporal. Las cremas Age Care de Cicatricure han sido especialmente diseñadas para abrazar la madurez con gracia (...) <a href="/antiarrugas" class="ver-antiarrugas">ver más</a></p> </div> </div> </div></div>';
}, 200);

  setTimeout(function () {
    const carrousel = document.querySelector(".mshops-recommendations-wrapper");
    const intro = document.querySelector(".banner-custom_page");
    intro.insertAdjacentElement("afterend", carrousel);
  }, 200);
}
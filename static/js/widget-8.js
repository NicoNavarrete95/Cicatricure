const URLactual = window.location.pathname;
if (URLactual == "/p/gold-lift") {
  setTimeout(function () {

    const main = document.querySelector("#root-app");

    main.innerHTML +='<div class="banner-custom_page"> <div class="banner-cicatrices_desktop"> <img src="https://iili.io/JEbRsSe.png" alt=""> </div> <div class="banner-cicatrices_mobile"> <img src="https://iili.io/JEbRPK7.png" alt=""> </div></div><div class="custom-text-section"> <div class="custom-text-section_container"> <div class="custom-text-section_img"> <img src="https://iili.io/JEqGVEX.png" alt=""> </div> <div class="custom-text-section_text"> <div class="custom-text-section_text-title"> <h3 class="custom-text-section_text-title-h3 gold-title">Un Cómplice en la Transformación</h3> </div> <div class="custom-text-section_text-paragraph"> <p class="custom-text-section_text-p">Cicatricure Gold Lift se destaca por su capacidad para redefinir el contorno facial, ofreciendo una alternativa exquisita para quienes buscan una piel más firme y tonificada. Este producto no solo se convierte en parte de tu rutina de belleza, sino en un símbolo de elegancia y sostificación. Cicatricure entiende que la belleza va de la mano con la cofinanza. Al redefinir el contorno facial y aumentar la firmeza, Cicatricure Gold Lift se convierte en el secreto para una juventud radiante que irradia desde el interior hacia afuera.(...) <a href="/gold-lift" class="ver-gold">ver más</a></p> </div> </div> </div></div>';
  }, 200);

  setTimeout(function () {
    const carrousel = document.querySelector(".mshops-recommendations-wrapper");
    const intro = document.querySelector(".banner-custom_page");
    intro.insertAdjacentElement("afterend", carrousel);
  }, 200);
}
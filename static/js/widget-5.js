let productos = document.querySelector(".productos-menu");
let articulos = document.querySelector(".articulos-menu");
let subarticulo = document.querySelector(".art-select");
let submenu = document.querySelector(".submenu-categorias");
let submenuCuidado = document.querySelector(".submenu-categorias");

productos.addEventListener('mouseenter', function(){
    submenuCuidado.classList.toggle("invisible"); //si esta desactivado lo activa (si tiene la clase la saca si no la tiene la pone)
    subarticulo.classList.add("invisible");
})

articulos.addEventListener('mouseenter', function(){
    subarticulo.classList.toggle("invisible"); //si esta desactivado lo activa (si tiene la clase la saca si no la tiene la pone)
    submenuCuidado.classList.add("invisible"); 
})

submenu.addEventListener('mouseleave', function(){
    submenu.classList.toggle("invisible");
})

subarticulo.addEventListener('mouseleave', function(){
    subarticulo.classList.toggle("invisible");
})


console.log(7)


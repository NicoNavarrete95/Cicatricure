// Obtener todas las flechas principales y subcategorías
const flechasPrincipales = document.querySelectorAll(".flecha_principal");
const subcategorias = document.querySelectorAll(".subcategorias_mobile");

// Función para manejar el clic en las flechas principales
function toggleSubmenu(index) {
  // Mostrar u ocultar la subcategoría correspondiente al índice clicado
  subcategorias[index].classList.toggle("invisible");

  // Rotar la flecha
  flechasPrincipales[index].classList.toggle("rotada");
}

// Asignar un controlador de eventos a cada flecha principal
flechasPrincipales.forEach((flecha, index) => {
  flecha.addEventListener("click", () => toggleSubmenu(index));
});

// Obtener todas las flechas de subcategoría y subcategorías móviles
const flechasSubcategoria = document.querySelectorAll(".flecha_subcategoria");
const subcategoriasMobile = document.querySelectorAll(".subcategoria_mobile");

// Función para manejar el clic en las flechas de subcategoría
function toggleSubcategoriaMobile(index) {
  // Mostrar u ocultar la subcategoría móvil correspondiente al índice clicado
  subcategoriasMobile[index].classList.toggle("invisible");

  // Rotar la flecha
  flechasSubcategoria[index].classList.toggle("rotada");
}

// Asignar un controlador de eventos a cada flecha de subcategoría
flechasSubcategoria.forEach((flecha, index) => {
  flecha.addEventListener("click", () => toggleSubcategoriaMobile(index));
});


console.log(7);
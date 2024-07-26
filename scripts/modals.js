document.addEventListener("DOMContentLoaded", () => {
    const verMasBtns = document.querySelectorAll(".ver-mas-btn");
    const modales = document.querySelectorAll(".modal");
    const cerrarBtns = document.querySelectorAll(".cerrar");
  
    // Mostrar modal al hacer clic en "Ver más"
    verMasBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        modales[index].style.display = "flex";
      });
    });
  
    // Cerrar modal al hacer clic en la cruz
    cerrarBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        modales[index].style.display = "none";
      });
    });
  });
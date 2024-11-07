document.addEventListener("DOMContentLoaded", () => {
  const verMasBtns = document.querySelectorAll(".ver-mas-btn");

  // Mostrar modal al hacer clic en "Ver más"
  verMasBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const modals = document.querySelectorAll(".modal");
      modals[index].style.display = "flex";
    });
  });

  // Cerrar modal al hacer clic en la cruz
  const cerrarBtns = document.querySelectorAll(".cerrar");
  cerrarBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const modals = document.querySelectorAll(".modal");
      modals[index].style.display = "none";
    });
  });

  // Cerrar modal al hacer clic fuera del contenido del modal
  window.addEventListener("click", (event) => {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});

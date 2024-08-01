document.addEventListener("DOMContentLoaded", () => {
  const verMasBtns = document.querySelectorAll(".ver-mas-btn");
  const cerrarBtns = document.querySelectorAll(".cerrar");
  const modal = document.querySelector(".modal");

  // Mostrar modal al hacer clic en "Ver más"
  verMasBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  });

  // Cerrar modal al hacer clic en la cruz
  cerrarBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });

  // Cerrar modal al hacer clic fuera del contenido del modal
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});


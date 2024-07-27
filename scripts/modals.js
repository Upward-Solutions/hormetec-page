document.addEventListener("DOMContentLoaded", () => {
  const verMasBtns = document.querySelectorAll(".ver-mas-btn");
  const cerrarBtns = document.querySelectorAll(".cerrar");

  // Mostrar modal al hacer clic en "Ver más"
  verMasBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.nextElementSibling;
      modal.style.display = "flex";
    });
  });

  // Cerrar modal al hacer clic en la cruz
  cerrarBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      modal.style.display = "none";
    });
  });
});

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-60px"; // Ocultar navbar al hacer scroll hacia abajo
  } else {
    navbar.style.top = "0"; // Mostrar navbar al hacer scroll hacia arriba
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Asegura que el valor no sea negativo
});